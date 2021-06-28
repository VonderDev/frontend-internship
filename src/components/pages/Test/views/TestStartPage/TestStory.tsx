import React, { useEffect, useState } from 'react';
import Container from 'components/Container/Container';
import { ContainerTestStoryPage, TextStory } from '../../shared/styles/TestStory.styled';
import { useHistory } from 'react-router-dom';
import { IQuestion } from '../../shared/interface/Test.interfaces';
import { API_GetTestData } from '../../apis/test.api';
import { Col, Modal } from 'antd';
import { ButtonStartOver, TextQuestionIndex } from '../../shared/styles/TestQuestion.styled';

function TestStory() {
    const history = useHistory();
    const [currentQuestionDetail, setCurrentQuestionDetail] = useState<IQuestion>({ question_category: '', question_body: '', question_no: 0 });
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [questionList, setQuestionList] = useState<Array<IQuestion> | null>(null);

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
            <ContainerTestStoryPage onClick={() => history.push('/testquestion')}>
                <Col>
                    <TextQuestionIndex>
                        คำถามข้อที่ {currentQuestion + 1}/{questionList?.length}
                    </TextQuestionIndex>
                    <ButtonStartOver type="primary" onClick={showModal}>
                        เริ่มใหม่{' '}
                    </ButtonStartOver>
                </Col>
                <Modal visible={visible} okText="เริ่มใหม่" cancelText="ยกเลิก" onOk={handleOk} width={400} confirmLoading={confirmLoading} onCancel={handleCancel}>
                    ข้อมูลทั้งหมดจะไม่ถูกบันทึก คุณจะเริ่มใหม่หรือไม่ ?
                </Modal>
                <TextStory>(แตะหน้าจอเพื่อไปต่อ)</TextStory>
            </ContainerTestStoryPage>
        </Container>
    );
}

export default TestStory;
