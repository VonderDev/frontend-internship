import { Button } from "antd";
import styled, { css } from "styled-components";

export const Box = styled.div<{ justify?: "flex-start" 
| "flex-end" 
| "center" 
| "space-between" 
| "space-around "
| "space-evenly" 
; align: "flex-start" 
| "flex-end" 
| "center"
| "baseline"
| "stretch" 
; direction : "row" | "column"}>`

display: flex;
justify-content: ${({ justify }) => (justify ? justify: " ")};
align-items: ${({ align }) => (align ? align: " ")};
flex-direction: ${({ direction }) => (direction ? direction: " ")};
`
type Sizebutton = "Large" | "Medium" | "Small" ;
interface ButtonProps {
    sizebutton?: any
    backgroundbutton?: any
    colorbutton?: any
    typebutton ?: Sizebutton
  }
 

  export const ButtonStyle = styled(Button)<ButtonProps>`
      ${css`
    width : ${(props: ButtonProps) => props.sizebutton? props.sizebutton  : 100 }%;
    background-color: ${(props: ButtonProps) => props.backgroundbutton? props.backgroundbutton : 'var(--Blue-400)'};
    color:  ${(props: ButtonProps) => props.colorbutton? props.colorbutton : 'var(--White)'};
    `}
    border-radius: var(--Radius-15);
    box-shadow: var(--Shadow-light-bottom);
    margin: 10px;

    ${( props: ButtonProps ) =>  {
       if ( props.typebutton == "Large"){
        return css`
        height: 51px; 
        `
    }else if(props.typebutton == "Medium"){
        return css`
        height: 43px; 
        `
    }else if(props.typebutton == "Small"){
        return css`
        height: 35px; 
        `
    }}
    }
    `;