import { useEffect, useState } from 'react';
import {
    TextQuestionIndex,
    TextQuestion,
    ButtonChoiceStlyed,
    ContainerButton,
    ContainerTestQuestion,
    IsLoadingSpinnerTestQuestion,
    TextIsLoadingTestQuestion,
    ButtonSeeAllResults,
} from '../../shared/styles/Test/TestQuestion.styled';
import { useHistory } from 'react-router-dom';
import { ApiGetTestData, ApiPostTestResult } from '../../apis/test.api';
import { IQuestion, IUserAns } from '../../shared/interface/Test.interfaces';
import { Col, Modal, Spin } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import React from 'react';
import Container from 'components/Container/Container';
import useSWR from 'swr';

function TestQuestion() {
    //
    // ─── Set variable ───────────────────────────────────────────────────────────────────
    //
    const history = useHistory();
    const [currentQuestionDetail, setCurrentQuestionDetail] = useState<IQuestion>({ questionIndex: 0, questionBody: '', category_id: 0 });
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [questionList, setQuestionList] = useState<Array<IQuestion> | null>(null);
    const [isSWRTriggered, isSetSWRTriggered] = useState<boolean>(false);

    const buttonList = [
        { value: 3, label: 'ใช่ที่สุด' },
        { value: 2, label: 'ปานกลาง' },
        { value: 1, label: 'น้อย' },
        { value: 0, label: 'ไม่เลย' },
    ];
    const [testScore, setTestScore] = useState<Array<IUserAns>>([]);
    const [isLoading, setLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { confirm } = Modal;

    //---------------- if using AXIOS ----------------//
    useEffect(() => {
        if (!questionList) return;
        setCurrentQuestionDetail(questionList[currentQuestion]);
    }, [currentQuestion, questionList]);

    // async function getTestData() {
    //     const response = await ApiGetTestData();
    //     if (response) {
    //         setQuestionList(response); // store all question into the hook
    //         const resp = response;
    //         setCurrentQuestionDetail(resp[currentQuestion]);
    //     } else {
    //         console.log('error');
    //     }
    // }
    // useEffect(() => {
    //     getTestData();
    // }, []);

    async function onNextQuestion(value: number) {
        console.log('[Debug]: score == ' + value);
        let newTestScore = testScore;
        newTestScore.push({ categoryId: currentQuestionDetail.category_id, score: value });
        setTestScore(newTestScore);

        if (!questionList) return;
        // ถ้ามากกว่า 23 ก็คือ 24 ให้ Post Test Result
        if (currentQuestion + 1 > questionList.length - 1) {
            setLoading(true);
            console.log('set Loading:', isLoading);
            await ApiPostTestResult(testScore);
            setLoading(false);
            history.push('/result');
            return;
        }
        setCurrentQuestion(currentQuestion + 1);
    }

    function onPrevQuestion() {
        if (!questionList) return;
        if (currentQuestion - 1 < 0) return;
        setCurrentQuestion(currentQuestion - 1);
    }

    function showPromiseConfirm() {
        confirm({
            title: 'ข้อมูลทั้งหมดจะไม่ถูกบันทึก คุณจะเริ่มใหม่หรือไม่ ?',
            icon: <ExclamationCircleOutlined />,
            okText: 'เริ่มใหม่',
            cancelText: 'ยกเลิก',
            onOk() {
                setTimeout(() => {
                    console.log('set Loading:', isLoading);
                    setLoading(false);
                    history.push('/result');
                }, 1500);
            },
            onCancel() {},
        });
    }

    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);

    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
            history.push('/test');
        }, 500);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    // const questionListFetcher = (key: any) =>
    //     fetch(key).then(async (res) => {
    //         console.log('Fetcher triggered');
    //         const data = await res.json();
    //         setQuestionList(data); // store all question into the hook
    //         const response = data;
    //         setCurrentQuestionDetail(response[currentQuestion]);
    //         return data;
    //     });

    const { data, error } = useSWR('/questions');
    if (error) return <div>failed to load data , please waiting</div>;
    if (!data) return <div>loading...</div>;
    // -------------- OTHER SOLUTION -------------- //
    if (data && !isSWRTriggered) {
        console.log('data from useSWR');
        isSetSWRTriggered(true);
        setQuestionList(data); // store all question into the hook
        const resp = data;
        setCurrentQuestionDetail(resp[currentQuestion]);
    }

    return (
        <Container header={null}>
            <ContainerTestQuestion>
                {/* {rendered_questions} */}
                <Col>
                    <TextQuestionIndex>
                        คำถามข้อที่ {currentQuestion + 1}/{questionList?.length}
                    </TextQuestionIndex>
                    <ButtonSeeAllResults type="primary" onClick={showModal}>
                        เริ่มใหม่{' '}
                    </ButtonSeeAllResults>
                </Col>
                <Modal visible={visible} okText="เริ่มใหม่" cancelText="ยกเลิก" onOk={handleOk} width={400} confirmLoading={confirmLoading} onCancel={handleCancel}>
                    ข้อมูลทั้งหมดจะไม่ถูกบันทึก คุณจะเริ่มใหม่หรือไม่ ?
                </Modal>
                <TextQuestion>{currentQuestionDetail.questionBody}</TextQuestion>
                {/* <TextQuestion>{data[currentQuestion].question_body}</TextQuestion> */}
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
                                    >
                                        {item.label}
                                    </ButtonChoiceStlyed>
                                );
                            })}
                        </ContainerButton>
                    )}
                    {isLoading ? (
                        <IsLoadingSpinnerTestQuestion>
                            <TextIsLoadingTestQuestion>กำลังประมวลผลคำตอบน้า</TextIsLoadingTestQuestion>
                            <Spin size="large" />
                        </IsLoadingSpinnerTestQuestion>
                    ) : (
                        ''
                    )}
                </div>
            </ContainerTestQuestion>
        </Container>
    );
}

export default TestQuestion;
