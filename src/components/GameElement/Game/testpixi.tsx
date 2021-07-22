import Container from "components/Container/Container";
import { Box } from "shared/style/theme/component";
import { AppContext, AppProvider, useAppContext } from "../PixiStore/AppContext";
import PixiApp from "../PixiStore/PixiApp";
import { PixiProvider } from "../PixiStore/PixiContext";
import GameContent from "./GameContent";
import { useState, useContext, useEffect, useRef } from "react";
// import useSound from "../PixiStore/SoundContext";
import Sound from '../Assets/Sound/soundBg.mp3';

const TestPixi = () => {
    const [audio] = useState(new Audio(Sound));
    const [playing, setPlaying] = useState(false);
    const toggle = () => {
        setPlaying(!playing);
    }

    let [value,setValue] = useState<number>(1)
    const { changeScene }= useContext(AppContext);
    // const [playing, toggle] = useSound(Sound);

    const onNext = () =>{
        setValue(value + 1)
        console.log(value)    
        if(value === 3){
            changeScene('S2')
        }else if (value === 6){
            changeScene('S3')
        }else if (value === 11){
            changeScene('S4')
        }else if (value === 12){
            changeScene('S4.2')
        }else if (value === 13){
            changeScene('S4.3')
        }else if (value === 14){
            changeScene('S5')
        }else if (value === 23){
            changeScene('S6')
        }
        else if (value === 25){
            setPlaying(false);
        }
    }

    // useEffect(() => { SetAudio(new Audio(Sound))},[audio]);
    useEffect(() => {
        playing ? audio.play() : audio.pause();
        console.log(playing)
      },
      [playing]
    );

    return(
        <Container header={null}>
            <PixiProvider>
                <PixiApp content={GameContent}/>
            </PixiProvider>
            <Box justify="center" align="center" direction="row">
                <div style={{width:'200px' 
                , height: '200px'
                ,backgroundColor: 'wheat'
                ,position: 'absolute'
                , top: '80px'
                , display: 'inline-block'
                , opacity: 0.5}}>
                    <h1 style={{fontSize: '20px'}}>This is React Content [{value} ]</h1>
                    <button style={{width: '50px' , height: '50px'}} onClick={onNext}> + </button>
                    <button onClick={toggle}>{playing? <p>Off</p> :  <p>On</p>}</button>
                </div>
                </Box>
        </Container>
    )
};

export default TestPixi;