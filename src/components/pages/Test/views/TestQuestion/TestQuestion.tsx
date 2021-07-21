import { useEffect, useState } from 'react';
import TestAnimation from '../TestStartPage/TestAnimation';
import { TextQuestionIndex, ButtonStartOver, TextQuestion, ButtonChoiceStlyed, ContainerButton } from '../../shared/styles/TestQuestion.styled';
import { useHistory } from 'react-router-dom';
import { API_GetTestData, API_PostTestResult } from '../../apis/test.api';
import { IQuestion, IUserAns } from '../../shared/interface/Test.interfaces';
import { SmileFilled } from '@ant-design/icons';
import { Spin } from 'antd';
import { IsLoadingSpinner, TextIsLoading } from '../../shared/styles/TestPage.styled';

function TestQuestion() {
    //
    // ─── Set variable ───────────────────────────────────────────────────────────────────
    //
    const history = useHistory();
    const [currentQuestionDetail, setCurrentQuestionDetail] = useState<IQuestion>({ categoryID: 0, question: '', questionIndex: 0 });
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [questionList, setQuestionList] = useState<Array<IQuestion> | null>(null);
    const buttonList = [
        { value: 3, label: 'ใช่มาก', icon: <SmileFilled style={{ fontSize: '20px', color: '#FFF566' }} /> },
        { value: 2, label: 'ใช่', icon: <SmileFilled style={{ fontSize: '20px', color: '#FFF566' }} /> },
        { value: 1, label: 'น้อย', icon: <SmileFilled style={{ fontSize: '20px', color: '#FFF566' }} /> },
        { value: 0, label: 'น้อยมาก', icon: <SmileFilled style={{ fontSize: '20px', color: '#FFF566' }} /> },
    ];
    const [testScore, setTestScore] = useState<Array<IUserAns>>([]);
    const [isLoading, setLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        if (!questionList) return;
        setCurrentQuestionDetail(questionList[currentQuestion]);
    }, [currentQuestion, questionList]);

    async function getTestData() {
        const response = await API_GetTestData();
        if (response) {
            setQuestionList(response); // store all question into the hook
            const resp = response;
            setCurrentQuestionDetail(resp[currentQuestion]);
        } else {
            console.log('error');
        }
    }
    useEffect(() => {
        getTestData();
    }, []);

    function onNextQuestion(value: number) {
        console.log('[Debug]: score == ' + value);
        let newTestScore = testScore;
        newTestScore.push({ categoryID: currentQuestionDetail.categoryID, score: value });
        setTestScore(newTestScore);

        if (!questionList) return;
        // ถ้ามากกว่า 23 ก็คือ 24 ให้ Post Test Result
        if (currentQuestion + 1 > questionList.length - 1) {
            setLoading(true);
            setTimeout(() => {
                console.log('set Loading:', isLoading);
                setLoading(false);
                API_PostTestResult(testScore);
                history.push('/result');
            }, 1500);

            return;
        }
        setCurrentQuestion(currentQuestion + 1);
    }

    function onPrevQuestion() {
        if (!questionList) return;
        if (currentQuestion - 1 < 0) return;
        setCurrentQuestion(currentQuestion - 1);
    }

    const fetchData = () => {
        console.log(isLoading);
        setLoading(true);
        setIsModalVisible(true);
        setTimeout(() => {
            console.log('set Loading:', isLoading);
            setLoading(false);
            history.push('/resulttest');
        }, 1500);
    };

    return (
        <div>
            <TextQuestionIndex>
                คำถามข้อที่ {currentQuestion + 1}/{questionList?.length}
            </TextQuestionIndex>
            <TextQuestion>{currentQuestionDetail.question}</TextQuestion>
            <ButtonStartOver onClick={() => history.push('/test')}>เริ่มใหม่</ButtonStartOver>
            <TestAnimation />

            <div>
                {isLoading ? (
                    ''
                ) : (
                    <ContainerButton>
                        {buttonList.map((item, index) => {
                            return (
                                <ButtonChoiceStlyed
                                    key={index}
                                    onClick={() => {
                                        onNextQuestion(item.value);
                                    }}
                                    icon={item.icon}
                                >
                                    {item.label}
                                </ButtonChoiceStlyed>
                            );
                        })}
                    </ContainerButton>
                )}
                {isLoading ? (
                    <IsLoadingSpinner>
                        <TextIsLoading>กำลังประมลผลคำตอบน้า</TextIsLoading>
                        <Spin size="large" />
                    </IsLoadingSpinner>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}

export default TestQuestion;
