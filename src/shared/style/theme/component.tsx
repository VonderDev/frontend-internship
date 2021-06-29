import { Button, Input ,Card } from "antd";
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
`;

type Sizebutton = "Large" | "Medium" | "Small" ;
type Typebutton = "Light" | "Text";
interface ButtonProps {
    sizebutton?: number
    backgroundbutton?: string
    colorbutton?: any
    typebutton ?: Sizebutton
    pattern?: Typebutton
    
  }
 
  export const ButtonStyle = styled(Button)<ButtonProps>`
      ${css`
    width : ${(props: ButtonProps) => props.sizebutton? props.sizebutton  : 100 }%;
    color:  ${(props: ButtonProps) => props.colorbutton? props.colorbutton : 'var(--White)'};
    `}
    border-radius: var(--Radius-15);
    box-shadow: var(--Shadow-light-bottom);

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
    }else{
        return css`
        height: 51px; 
        `
    }}
    }
    ${( props: ButtonProps ) =>  {
       if ( props.backgroundbutton ){
        return css`
        background-color: ${props.backgroundbutton} !important ;
        &:hover{
            border: 2px solid ${props.backgroundbutton};
            color: ${props.backgroundbutton};
            background-color: transparent !important ;
        }
        `
    }else{
        return css`
         background-color: var(--Red-400);
        `
    }}
    }

    ${( props: ButtonProps ) =>  {
       if ( props.pattern == "Light"){
        return css`
        background-color: var(--White);
        border: 2px solid var(--Blue-400);
        color: var(--Blue-400);
        &:hover{
            color: var(--White);
            background-color: var(--Blue-400);
        }
        `
        }else if( props.pattern == "Text"){
            return css`
            background-color: transparent;
            border: none;
            color: var(--Blue-400);
            `
        }
        else{
        return css`
         background-color: var(--Blue-400);
        `
    }}
    }

    `;
    type SizeInput = "Large" | "Medium" | "Small" ;
    interface InputProps{
        sizeinput?: number
        typeinput?: SizeInput
    }
    
export const InputStyle = styled(Input)<InputProps>`
${css`
    width : ${(props: InputProps) => props.sizeinput? props.sizeinput  : 100 }%;
    `}
    ${( props: InputProps ) =>  {
       if ( props.typeinput == "Large"){
        return css`
        height: 51px; 
        `
    }else if(props.typeinput == "Medium"){
        return css`
        height: 43px; 
        `
    }else if(props.typeinput == "Small"){
        return css`
        height: 35px; 
        `
    }else{
        return css`
        height: 51px; 
        `
    }}
    }
    font-size: var(--font-16);
    border-radius: var(--Radius-15);
    background-color: var(--White);
    box-shadow: var(--Shadow-light-bottom);
`;

type CardType = "Vertical" | "Horizontal" ;
interface CardProps{
    sizecard?: number
    typecard?: CardType
    widthcard?: number
    heightcard?: number
}
export const CardStyle = styled(Card)<CardProps>`
    border-radius: var(--Radius-12);
    box-shadow: var(--Shadow-light-bottom);
    margin: 10px;
    padding: 5px;
${( props: CardProps ) =>  {
       if ( props.typecard == "Vertical"){
        return css`
            width : ${(props: CardProps) => props.widthcard? props.widthcard  : 205 }px;
            height: ${(props: CardProps) => props.heightcard? props.heightcard  : 254 }px;
        `
        }else if( props.typecard == "Horizontal"){
            return css`
            height: ${(props: CardProps) => props.heightcard? props.heightcard  : 90 }px;
            width : ${(props: CardProps) => props.widthcard? props.widthcard  : 100 }%;
            `
        }
        else{
        return css`
            height: ${(props: CardProps) => props.heightcard? props.heightcard  : 100 }px;
            width : ${(props: CardProps) => props.widthcard? props.widthcard  : 100 }px;
        `
    }}
    }
`;
