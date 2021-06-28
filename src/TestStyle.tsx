import { Box, ButtonStyle } from "shared/style/theme/component";
import Typography from "shared/style/theme/Typograhy"

const TestStyle = () => {
    return (
        <>
        <Box justify="center" align="center" direction="column">
        <Typography.Headline fontSize="56" Color="var(--Red-400)" >Headline สวัสดี</Typography.Headline>
        <Typography.SubHeadline>Sub สวัสดี</Typography.SubHeadline>
        <Typography.Body>Body สวัสดี</Typography.Body>
        <Typography.Description>Des สวัสดี</Typography.Description>
        <Typography.Info>Info สวัสดี</Typography.Info>
        <Typography.Link href='/'>Link สวัสดี</Typography.Link>
        
        <ButtonStyle typebutton="Large">Large</ButtonStyle>
        <ButtonStyle
         typebutton="Medium"
         sizebutton="60" 
         backgroundbutton="var(--White)" 
         colorbutton="var(--Blue-400)">
             Medium
             </ButtonStyle>
        <ButtonStyle typebutton="Small"  sizebutton="20">Small</ButtonStyle>
        </Box>
        </>
    );
};

export default TestStyle;