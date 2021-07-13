import Container from "components/Container/Container";
import { Box } from "shared/style/theme/component";
import { AppProvider } from "../PixiStore/AppContext";
import PixiApp from "../PixiStore/PixiApp";
import { PixiProvider } from "../PixiStore/PixiContext";
import GameContent from "./GameContent";

const TestPixi = () => {
    return(
        <Container header={{ title: 'Pixi', right: 'menu' }}>
            <AppProvider>
            <PixiProvider>
                <PixiApp content={GameContent}/>
                <Box justify="center" align="center" direction="row">
                <div style={{width:'200px' 
                , height: '200px'
                ,backgroundColor: 'wheat'
                ,position: 'absolute'
                , top: '80px'
                , display: 'inline-block'
                , opacity: 0.5}}>

                    <h1>This is React Content</h1>
                </div>
                </Box>
            </PixiProvider>
            </AppProvider>
        </Container>
    )
};

export default TestPixi;