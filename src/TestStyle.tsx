import { Box, ButtonStyle } from "shared/style/theme/component";
import Typography from "shared/style/theme/Typograhy"

const TestStyle = () => {
    return (
        <>
        <Box justify="center" align="center" direction="column">
        <Typography.Headline fontSize="56" colortext="var(--Red-400)" >Headline สวัสดี</Typography.Headline>
        <Typography.SubHeadline>Sub สวัสดี</Typography.SubHeadline>
        <Typography.Body>Body สวัสดี</Typography.Body>
        <Typography.Description>Des สวัสดี</Typography.Description>
        <Typography.Info>Info สวัสดี</Typography.Info>
        <Typography.Link href='/'>Link สวัสดี</Typography.Link>

        <ButtonStyle typebutton="Large">Large</ButtonStyle>
        <ButtonStyle typebutton="Medium" sizebutton={60} backgroundbutton="var(--Red-400)" colorbutton="var(--White)">
             Medium
        </ButtonStyle>
        <ButtonStyle typebutton="Small"  sizebutton={20}>Small</ButtonStyle>
        <ButtonStyle typebutton="Large" pattern="Light" sizebutton={15}>Special</ButtonStyle>
        <ButtonStyle typebutton="Small" pattern="Text" sizebutton={10}>Special</ButtonStyle>
        </Box>
        </>
    );
};

export default TestStyle;