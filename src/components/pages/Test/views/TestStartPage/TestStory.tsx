import React, { useEffect, useState } from 'react';
import Container from 'components/Container/Container';
import { ContainerTestStoryPage, TextStory } from '../../shared/styles/Test/TestStory.styled';
import { Redirect, useHistory } from 'react-router-dom';
import { IQuestion } from '../../shared/interface/Test.interfaces';
import { ApiGetTestData } from '../../apis/test.api';
import { Col, Modal } from 'antd';
import { ButtonSeeAllResults, TextQuestionIndex } from '../../shared/styles/Test/TestQuestion.styled';
import { Box } from 'shared/style/theme/component';

function TestStory() {
    const history = useHistory();
    const [currentQuestionDetail, setCurrentQuestionDetail] = useState<IQuestion>({ questionIndex: 0, questionBody: '', category_id: 0 });
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [questionList, setQuestionList] = useState<Array<IQuestion> | null>(null);

    useEffect(() => {
        if (!questionList) return;
        setCurrentQuestionDetail(questionList[currentQuestion]);
    }, [currentQuestion, questionList]);

    async function getTestData() {
        const response = await ApiGetTestData();
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
        const tokenGuest = localStorage.getItem('tokenGuest');
        if(tokenGuest){
            localStorage.removeItem('tokenGuest')
        } 
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
    // const goTest = ()=>{
    //     return <Redirect to="/testquestion" />;
    // }

    return (
        <Container header={null}>
            <a href='/testquestion' style={{color:'black'}} >
            <ContainerTestStoryPage>
                <Box justify='space-between' align="center" direction='row' style={{background: 'linear-gradient(180deg, white, transparent)', padding:'0px 5%'}}>
                    <div></div>
                    <TextQuestionIndex>
                        คำถามข้อที่ {currentQuestion + 1}/24
                    </TextQuestionIndex>
                    <ButtonSeeAllResults type="primary" onClick={showModal}>
                        เริ่มใหม่{' '}
                    </ButtonSeeAllResults>
                </Box>
                <Modal visible={visible} okText="เริ่มใหม่" cancelText="ยกเลิก" onOk={handleOk} width={400} confirmLoading={confirmLoading} onCancel={handleCancel}>
                    ข้อมูลทั้งหมดจะไม่ถูกบันทึก คุณจะเริ่มใหม่หรือไม่ ?
                </Modal>
                <TextStory>(แตะหน้าจอเพื่อไปต่อ)</TextStory>
            </ContainerTestStoryPage>
            </a>
        </Container>
    );
}

export default TestStory;
