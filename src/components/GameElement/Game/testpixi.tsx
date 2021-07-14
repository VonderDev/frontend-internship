import Container from "components/Container/Container";
import { Box } from "shared/style/theme/component";
import { AppContext, AppProvider, useAppContext } from "../PixiStore/AppContext";
import PixiApp from "../PixiStore/PixiApp";
import { PixiProvider } from "../PixiStore/PixiContext";
import GameContent from "./GameContent";
import { useState, useContext, useEffect, useRef } from "react";

const TestPixi = () => {
    
    const { changeScene }= useContext(AppContext);

    return(
        <Container header={{ title: 'Pixi', right: 'menu' }}>
            
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
                , opacity: 0.5}}
                onClick={() => changeScene('S1')} >
                    <h1>This is React Content</h1>
                </div>
                </Box>
        </Container>
    )
};

export default TestPixi;