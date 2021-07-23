import styled, { css } from "styled-components";
import Text from "antd/lib/typography/Text";
import TextParagraph from "antd/lib/typography/Paragraph";
import TextLink from "antd/lib/typography/Link";
import Title from "antd/lib/typography/Title";

type TextProps = {
  fontSize?: any
  colortext?: any
};

const HeadlineText = styled(Title)<TextProps>`
  font-size: ${({ fontSize }) =>
    fontSize ? `${fontSize} !important` : "var(--font-22) !important"};
    font-weight: 700;
    color: ${({colortext}) => colortext? `${colortext}  !important` : "var(--Black) !important "};
`;

const SubHeadlineText = styled(TextParagraph)<TextProps>`
  font-size: var(--font-18) !important;
  font-weight: 700;
  color: ${({colortext}) => colortext? `${colortext}  !important` : "var(--Gray-400) !important "};
`;

const DescriptionText = styled(TextParagraph)<TextProps>`
  font-size: var(--font-16) !important;
  font-weight: 400;
  color: ${({colortext}) => colortext? `${colortext}  !important` : "var(--Gray-400) !important "};
`;

const BodyText = styled(TextParagraph)<TextProps>`
  font-size: var(--font-14) !important;
  font-weight: 400;
  color: ${({colortext}) => colortext? `${colortext}  !important` : "var(--Gray-400) !important "};
`;

const InfoText = styled(Text)<TextProps>`
  font-size: ${({ fontSize }) =>
    fontSize ? `${fontSize} !important` : "var(--font-12) !important"};
    font-weight: 700;
    color: ${({colortext}) => colortext? `${colortext}  !important` : "var(--Gray-400) !important "};

`;

const LinkText = styled(TextLink)<TextProps>`
  font-size: ${({ fontSize }) =>
    fontSize ? `${fontSize} !important` : "var(--font-14) !important"};
    font-weight: 700;
    color: ${({colortext}) => colortext? `${colortext}  !important` : "var(--Blue-300) !important "};
`;

const Headline: React.FC<any> = (props) => {
    return <HeadlineText {...props} />;
  };
  
  const SubHeadline: React.FC<any> = (props) => {
    return <SubHeadlineText {...props} />;
  };
  
  const Description: React.FC<any> = (props) => {
    return <DescriptionText {...props} />;
  };
  
  const Body: React.FC<any> = (props) => {
    return <BodyText {...props} />;
  };
  
  const Info: React.FC<any> = (props) => {
    return <InfoText {...props} />;
  };
  
  const Link: React.FC<any> = (props) => {
    return <LinkText {...props} />;
  };
  

  const Typography = {
    Headline,
    SubHeadline,
    Description,
    Body,
    Info,
    Link,
  };
  
  export default Typography;