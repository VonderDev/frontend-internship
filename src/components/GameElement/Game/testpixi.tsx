import Container from "components/Container/Container";
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
            </PixiProvider>
            </AppProvider>
        </Container>
    )
};

export default TestPixi;