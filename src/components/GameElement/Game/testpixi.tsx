import Container from "components/Container/Container";
import PixiApp from "../PixiStore/PixiApp";

const TestPixi = () => {
    return(
        <Container header={{ title: 'Pixi', right: 'menu' }}>
        <PixiApp/>
        </Container>

    )
};

export default TestPixi;