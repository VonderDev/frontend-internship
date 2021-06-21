import styled, { css } from "styled-components";
import Text from "antd/lib/typography/Text";
import TextParagraph from "antd/lib/typography/Paragraph";
import TextLink from "antd/lib/typography/Link";
import Title from "antd/lib/typography/Title";

const HeadlineText = styled(Title)<any>`
  font-size: ${({ fontSize }) =>
    fontSize ? `${fontSize} !important` : "var(--font-22) !important"};
  font-weight: 700;
`;

const SubHeadlineText = styled(TextParagraph)`
  font-size: var(--font-18) !important;
`;

const DescriptionText = styled(TextParagraph)`
  font-size: var(--font-16) !important;
`;

const BodyText = styled(TextParagraph)`
  font-size: var(--font-14) !important;
`;

const InfoText = styled(Text)<any>`
  font-size: ${({ fontSize }) =>
    fontSize ? `${fontSize} !important` : "var(--font-12) !important"};

`;

const LinkText = styled(TextLink)<any>`
  font-size: ${({ fontSize }) =>
    fontSize ? `${fontSize} !important` : "var(--font-14) !important"};
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