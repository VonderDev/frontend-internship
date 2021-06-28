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
type sizebutton = "Large" | "Medium" | "Small" ;
interface ButtonProps {
    Size?: any
    Background?: any
    Color?: any
    sizebutton ?: sizebutton
  }
 

//   export const ButtonStyle = styled(Button)<ButtonProps>`
//   ${({ sizebutton }) => sizebutton? 
//     if ( sizebutton == "Large"){
//         return css`
//         height: 51px; 
//         `
//     }else if(sizebutton == "Medium"){
//         return css`
//         height: 43px; 
//         `
//     }else if(sizebutton == "Small"){
//         return css`
//         height: 35px; 
//         `
//     }
    
//     ${css`
//     width : ${(props: ButtonProps) => props.Size? props.Size  : 100 }%;
//     background-color: ${(props: ButtonProps) => props.Background? props.Background : 'var(--Blue-400)'};
//     color:  ${(props: ButtonProps) => props.Color? props.Color : 'var(--White)'};
//     `}
//     border-radius: var(--Radius-15);
//     box-shadow: var(--Shadow-light-bottom);
//     margin: 10px;
    
//     }
//     `;

export const ButtonLarge = styled(Button)<ButtonProps>`
    ${css`
    width : ${(props: ButtonProps) => props.Size? props.Size  : 100 }%;
    background-color: ${(props: ButtonProps) => props.Background? props.Background : 'var(--Blue-400)'};
    color:  ${(props: ButtonProps) => props.Color? props.Color : 'var(--White)'};
    `}
    height: 51px;
    border-radius: var(--Radius-15);
    box-shadow: var(--Shadow-light-bottom);
    margin: 10px;
  `;

export const ButtonMeduim = styled(Button)<ButtonProps>`
${css`
    width : ${(props: ButtonProps) => props.Size? props.Size  : 100 }%;
    background-color: ${(props: ButtonProps) => props.Background? props.Background : 'var(--Blue-400)'};
    color:  ${(props: ButtonProps) => props.Color? props.Color : 'var(--White)'};
`}
height: 43px;
border-radius: var(--Radius-15);
box-shadow: var(--Shadow-light-bottom);
margin: 10px;
`;

export const ButtonSmall= styled(Button)<ButtonProps>`
${css`
    width : ${(props: ButtonProps) => props.Size? props.Size  : 15 }%;
    background-color: ${(props: ButtonProps) => props.Background? props.Background : 'var(--Blue-400)'};
    color:  ${(props: ButtonProps) => props.Color? props.Color : 'var(--White)'};
`}
height: 35px;
border-radius: var(--Radius-15);
box-shadow: var(--Shadow-light-bottom);
margin: 10px;
`;