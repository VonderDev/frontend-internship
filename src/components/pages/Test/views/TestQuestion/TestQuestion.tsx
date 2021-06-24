import { useEffect, useState } from 'react';
import {
    TextQuestionIndex,
    ButtonStartOver,
    TextQuestion,
    ButtonChoiceStlyed,
    ContainerButton,
    ContainerTestQuestion,
    IsLoadingSpinnerTestQuestion,
    TextIsLoadingTestQuestion,
} from '../../shared/styles/TestQuestion.styled';
import { useHistory } from 'react-router-dom';
import { API_GetTestData, API_PostTestResult } from '../../apis/test.api';
import { IQuestion, IUserAns } from '../../shared/interface/Test.interfaces';
import { Col, Modal, Spin } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import React from 'react';
import Container from 'components/Container/Container';

function TestQuestion() {
    //
    // ─── Set variable ───────────────────────────────────────────────────────────────────
    //
    const history = useHistory();
    const [currentQuestionDetail, setCurrentQuestionDetail] = useState<IQuestion>({ categoryID: 0, question: '', questionIndex: 0 });
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [questionList, setQuestionList] = useState<Array<IQuestion> | null>(null);
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
    return (
        <Container header={null}>
            <ContainerTestQuestion>
                <Col>
                    <TextQuestionIndex>
                        คำถามข้อที่ {currentQuestion + 1}/{questionList?.length}
                    </TextQuestionIndex>
                    <ButtonStartOver type="primary" onClick={showModal}>
                        เริ่มใหม่{' '}
                    </ButtonStartOver>
                </Col>
                <Modal
                    visible={visible}
                    okText="เริ่มใหม่"
                    cancelText="ยกเลิก"
                    onOk={handleOk}
                    // footer={[
                    //     <ContainerButtonStartOver>
                    //         <ButtonConfirmStartOver onClick={handleOk}>เริ่มใหม่</ButtonConfirmStartOver>, <ButtonCancleStartOver onClick={handleCancel}>ยกเลิก</ButtonCancleStartOver>
                    //     </ContainerButtonStartOver>,
                    // ]}
                    width={400}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                >
                    ข้อมูลทั้งหมดจะไม่ถูกบันทึก คุณจะเริ่มใหม่หรือไม่ ?
                </Modal>
                <TextQuestion>{currentQuestionDetail.question}</TextQuestion>
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
                                        {index}
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
