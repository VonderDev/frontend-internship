import { Box, ButtonLarge, ButtonMeduim, ButtonSmall } from "shared/style/theme/component";
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
        <ButtonLarge>Test</ButtonLarge>
        <ButtonLarge Size="60" Background="var(--White)" Color="var(--Blue-400)">Test Size 60</ButtonLarge>
        <ButtonMeduim Size="60" >Medium  Size 60 </ButtonMeduim>
        <ButtonSmall Size="20">Small</ButtonSmall>
        </Box>
        </>
    );
};

export default TestStyle;