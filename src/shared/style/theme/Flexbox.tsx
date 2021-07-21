import styled, { css } from "styled-components";

const Box = styled.div<{ justify?: "flex-start" 
| "flex-end" 
| "center" 
| "space-between" 
| "space-around "
| "space-evenly" 
; align: "flex-start" 
| "flex-end" 
| "center"
| "baseline"
| "stretch" }>`

display: flex;
justify-content: ${({ justify }) => (justify ? justify: " ")};
align-items: ${({ align }) => (align ? align: " ")};
`
const CenterBox = styled(Box)`  
    justify-content: center !important;
    align-items: center !important;
`

const Center: React.FC<any> = (props) => {
    return <CenterBox {...props} />;
  };

  const Flexbox = {
    Center,
    Box
  };
  
  export default Flexbox;