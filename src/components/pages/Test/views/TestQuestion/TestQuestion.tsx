import { useEffect, useState, useContext } from 'react';
import {
    TextQuestionIndex,
    TextQuestion,
    ButtonChoiceStlyed,
    ContainerButton,
    ContainerTestQuestion,
    IsLoadingSpinnerTestQuestion,
    TextIsLoadingTestQuestion,
    ButtonSeeAllResults,
    MainContainer,
} from '../../shared/styles/Test/TestQuestion.styled';
import { useHistory } from 'react-router-dom';
import { ApiGetTestData, ApiPostTestResult } from '../../apis/test.api';
import { IQuestion, IUserAns } from '../../shared/interface/Test.interfaces';
import { Col, message, Modal, Spin } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import React from 'react';
import Container from 'components/Container/Container';
import useSWR from 'swr';
import { PixiProvider } from 'components/GameElement/PixiStore/PixiContext';
import { AppProvider } from 'components/GameElement/PixiStore/AppContext';
import GameContent from 'components/GameElement/Game/GameContent';
import PixiApp from 'components/GameElement/PixiStore/PixiApp';
import { Box } from 'shared/style/theme/component';
import { AppContext } from 'components/GameElement/PixiStore/AppContext';
import { setTimeout } from 'timers';
import { TextStory } from '../../shared/styles/Test/TestStory.styled';
import { Item } from 'react-bootstrap/lib/Breadcrumb';
import Animation from 'shared/style/theme/animation'
import Sound from 'components/GameElement/Assets/Sound/soundBg.mp3';
import {PauseCircleFilled ,SoundFilled} from '@ant-design/icons';

function TestQuestion() {
    
 //---------------- Set state ----------------//
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

    const [cutScene, setCutScene] = useState<boolean>(false);
    const [currentCutScnen, setCurrentCutScene] = useState<number>(0)
    const [currentMessage, setCurrentMessage] = useState<number>(0)

    useEffect(() => {
        if (!questionList) return;
        setCurrentQuestionDetail(questionList[currentQuestion]);
    }, [currentQuestion, questionList]);

    //---------------- Play Sound ----------------//
    const [audio] = useState(new Audio(Sound));
    const [playing, setPlaying] = useState(false);
    const toggle = () => {
        setPlaying(!playing);
    }
    useEffect(() => {
        playing ? audio.play() : audio.pause();
        console.log(playing)
        console.log('Winndow size:',window.innerWidth)
      },
      [playing]
    );

    //---------------- Cut Scene ----------------//
    const cutSceneList = [
        { value: 1, message:[ '" ที่นี่ที่ไหนกัน... แล้วฉันคือใคร... "',' "โอ๊ย ทำไมจำอะไรไม่ได้เลย… "',
                            ' "ลองเดินตามทางนี้ไปละกัน เผื่อจะจำอะไรได้มากขึ้น "'] },
        { value: 2, message: ['เอ๊ะ! ตรงนั้นมีคนนี่นา ลองเข้าไปถามดูดีกว่าเผื่อจะมีใครช่วยฉันได้']},
        { value: 3, message: ['A: “นายนั่นแหละที่เป็นคนบอกให้มาทางนี้” ' ,
                            'B: “ฉันบอกให้ไปอีกทางนึงต่างหาก” ',
                            ' เอ๊ะ! เหมือนว่าพวกเขากำลังทะเลาะกันอยู่นะ']},
        { value: 4, message: ['“เกิดอะไรขึ้นเหรอ”',
                            'A: “พวกเรากำลังหาทางออกจากป่านี้อยู่ แต่เจ้านี่น่ะสิ มันพาฉันหลงทาง”',
                            'B: “อะไรนะ นายต่างหากที่พาฉันหลงทาง!”' ,
                            ' "พอดีเลย ฉันก็หาทางออกอยู่เหมือนกัน งั้นพวกเรามาหาทางออกด้วยกันไหม "',
                            ' "เอาสิ!!! "']},
        { value: 5, message: ['"ว่าแต่ ช่วยอะไรฉันหน่อยได้ไหม พวกเธอพอจะรู้ไหมว่าฉันคือใคร" ',
                            'A: “หืม ทำไมเธอถึงไม่รู้ว่าตัวเองคือใครล่ะ”',
                            '“ฉันก็ไม่รู้เหมือนกันว่าเกิดอะไรขึ้น แต่อยู่ๆพอฉันตื่นขึ้นมาก็จำอะไรไม่ได้เลย”',
                            'B: “อืม พวกเราก็ไม่รู้เหมือนกันว่าเธอคือใคร ขอโทษด้วยนะ”',
                            '"อ้อ ไม่เป็นไรๆ งั้นพวกเราก็ออกเดินทางต่อเถอะ"']},
        { value: 6, message: ['"เอ๊ะ มีบ้านอยู่ตรงนี้ด้วย ลองเข้าไปดูดีกว่าเผื่อมีใครอยู่"']},
        { value: 7, message: ['“ไม่มีใครอยู่เลย...”', '"แต่ในนี้มีของน่าสนใจเยอะแยะเลย"']},
        { value: 8, message: ['"เอาล่ะ เราน่าจะเดินทางต่อได้แล้ว"']},
        { value: 9, message: ['"ตรงนั้นมีใครก็ไม่รู้เล่นดนตรีอยู่ ลองไปฟังกันเถอะ"']},
        { value: 10, message: ['สุดยอดไปเลย เธอเล่นดนตรีเพราะจริงๆ',
                                'นักดนตรี: “ขอบคุณนะ พวกเธอก็เต้นเก่งมากเลย”',
                                'ว่าแต่ ฉันขอถามอะไรหน่อยได้รึเปล่า..']},
        { value: 11, message: ['นักดนตรี: “อ๋อ เรื่องมันเป็นอย่างนี้นี่เอง งั้นฉันขอถามกลับได้ไหม” ']},
        { value: 12, message: ['“ถ้าเธอยังนึกไม่ออก ก็ลองไปตามทางที่ฉันบอกก็แล้วกัน”' ,
                                '“ลองเดินไปตามทางนี้ดู เธอก็จะรู้คำตอบเองแหละ”']},
        { value: 13, message: ['“เราออกจากป่านี้มาได้แล้ว!”',
                                '“สวยจัง นี่มันทะเลสาบนี่นา”']},
        { value: 14, message: [' ตกลงฉันคือใครกันนะ.. ','.....','.....']},
    ];
    useEffect(() => {
        cutSceneList[currentCutScnen];
        console.log(currentCutScnen);
        console.log('CutScene :', cutSceneList[currentCutScnen].value, 'message:', cutSceneList[currentCutScnen].message);
    }, [currentCutScnen]);

    const showStory =()=>{
        console.log('Cut ? :' ,cutScene);
        console.log(' currentMessage:' ,currentMessage);
        if(currentMessage === cutSceneList[currentCutScnen].message.length -1){
             if(currentCutScnen + 1 === 5)
            {
                changeScene('S3')
                setCutScene(true) // start cutscene v.6
            }else if (currentCutScnen+1 === 6){
                changeScene('S4')
                setCutScene(true) // start cutscene v.7
            }else if (currentCutScnen+ 1 === 8){
                changeScene('S5')
                setCutScene(true) // start cutscene v.9
            }else if (currentCutScnen + 1 === 13){
                changeScene('S6.1')
                setCutScene(true)// start cutscene v.14
                setLoading(true)
                setPlaying(false)
                setTimeout(async()=>{
                            await ApiPostTestResult(testScore);
                            setLoading(false);
                            console.log('set Loading:', isLoading);
                            history.push('/result');
                            return;
            },3000)
            }else{
                setCutScene(false)
            }
            setCurrentMessage(0);
            setCurrentCutScene(currentCutScnen + 1);
        } else {
            setCutScene(true);
            setCurrentMessage(currentMessage + 1);
        }
    }
    // -------------- handle change scene & Question -------------- //
    const { changeScene, gameRef }= useContext(AppContext);

    async function onNextQuestion(value: number) {
        console.log('[Debug]: score == ' + value);
        let newTestScore = testScore;
        newTestScore.push({ categoryId: currentQuestionDetail.category_id, score: value });
        setTestScore(newTestScore);
        setCurrentQuestion(currentQuestion + 1);
        console.log('Q number =>>>', currentQuestion);
        if (currentQuestion + 1 === 3) {
            changeScene('S2');
            setCutScene(true); // start cutscene v.2
        } else if (currentQuestion + 1 === 4) {
            setCutScene(true); // start cutscene v.3
        } else if (currentQuestion + 1 === 5) {
            setCutScene(true); // start cutscene v.4
        } else if (currentQuestion + 1 === 6) {
            setCutScene(true); // start cutscene v.5
        } else if (currentQuestion + 1 === 11) {
            changeScene('S4.3');
        } else if (currentQuestion + 1 === 14) {
            setCutScene(true); // start cutscene v.8
        } else if (currentQuestion + 1 === 18) {
            setCutScene(true); // start cutscene v.10
        } else if (currentQuestion + 1 === 21) {
            setCutScene(true); // start cutscene v.11
        } else if (currentQuestion + 1 === 23) {
            setCutScene(true); // start cutscene v.12
        } else if (currentQuestion + 1 === 24) {
            changeScene('S6');
            setCutScene(true); // start cutscene v.13
        }
    }

        window.onload = function(){
        changeScene('Start')
        setTimeout(() => {
            setPlaying(true);
        }, 2000);
    }

    // -------------- Show Modal -------------- //
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

    // -------------- USE SWR -------------- //
    const { data, error } = useSWR('/questions');
    if (error) return <div>failed to load data , please waiting</div>;
    if (!data) return <div>loading...</div>;
    if (data && !isSWRTriggered) {
        console.log('data from useSWR');
        isSetSWRTriggered(true);
        setCutScene(true); //start story v.1
        setQuestionList(data); // store all question into the hook
        const resp = data;
        setCurrentQuestionDetail(resp[currentQuestion]);
    }

    return (
        <Box justify='center' align="center" direction='column'>
        <MainContainer>
            <PixiProvider>
                <PixiApp content={GameContent}/>
            </PixiProvider>
            <ContainerTestQuestion active={cutScene?  'active' : ''}>
                {currentQuestion +1 === 25 ? null :
                 (<>
                 <Box justify='space-between' align="center" direction='row' style={{background: 'linear-gradient(180deg, white, transparent)', padding:'0px 5%'}}>
                    <div onClick={toggle}>
                        {playing?  <PauseCircleFilled style={{ fontSize: '30px'}}/> :  <SoundFilled style={{ fontSize: '30px' }}/> }
                  </div>
                    <TextQuestionIndex>
                        คำถามข้อที่ {currentQuestion + 1}/24
                    </TextQuestionIndex>
                    <ButtonSeeAllResults type="primary" onClick={showModal}>
                        เริ่มใหม่{' '}
                    </ButtonSeeAllResults>
                    </Box >
                </>)
                 }
                
                <Modal visible={visible} okText="เริ่มใหม่" cancelText="ยกเลิก" onOk={handleOk} width={400} confirmLoading={confirmLoading} onCancel={handleCancel}>
                    ข้อมูลทั้งหมดจะไม่ถูกบันทึก คุณจะเริ่มใหม่หรือไม่ ?
                </Modal>
                {currentQuestion +1 === 25 ? 
                ( <>
                <Animation onEnter='fadeIn' key={currentMessage} duration={1000} delay={200}>
                <Box justify='center' align="center" direction='row'>
                <TextStory
                    onClick={showStory}>
                            {cutSceneList[currentCutScnen].message[currentMessage]}
                </TextStory>
                </Box>
                </Animation>
                {isLoading ? (
                    <IsLoadingSpinnerTestQuestion>
                        <TextIsLoadingTestQuestion>กำลังประมวลผลคำตอบน้า</TextIsLoadingTestQuestion>
                        <Spin style={{fontSize: '50px'}}/>
                    </IsLoadingSpinnerTestQuestion>
                    ) : (
                        null
                    )} </>)
                :
                ( <>
                  {cutScene? 
                        (<Animation onEnter='fadeIn' key={currentMessage} duration={1000} delay={200}>
                        <TextStory
                        onClick={showStory}>
                            {cutSceneList[currentCutScnen].message[currentMessage]}
                            </TextStory>
                            </Animation>)
                    :
                     (<>
                       <Animation type='fadeIn' key={currentQuestion} duration={600} delay={100}>
                        <TextQuestion>{currentQuestionDetail.questionBody}</TextQuestion>
                        </Animation>
                        <div>
                         {isLoading ? (
                            ''
                        ) : (
                        <Animation type='slideInLeft' duration={500} delay={100}>
                           <Animation type='fadeIn' key={currentQuestion} duration={600} delay={100}>
                        <Box justify='center' align='center' direction='column'>
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
                        </Box>  
                        </Animation>
                        </Animation>                 
                )}
            </div>
            </>)}
            </>)}
            </ContainerTestQuestion>
        </MainContainer>
        </Box>
    );
}

export default TestQuestion;
