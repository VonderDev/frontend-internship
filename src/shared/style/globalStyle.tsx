import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    max-width: 600px;
    height: 100vh;
    overflow-y: scroll;
  }
  html{
    //COLORS
    --White: #FFFFFF;
    --Black: #1C1C28;
    --Silver-200: #F2F2F5;
    --Silver-100: #FAFAFC;

    //COLORS_BLUE
    --Blue-700: #093F7A;
    --Blue-600: #11549E;
    --Blue-500: #1B6ABF;
    --Blue-400: #287FDE;
    --Blue-300: #3A8CE4;
    --Blue-200: #56A0EF;
    --Blue-100: #56A0EF;
    --Blue-000: #DAEBFD;

    //COLORS_RED
    --Red-700: #7D2622;
    --Red-600: #A33631;
    --Red-500: #C64843;
    --Red-400: #E86C56;
    --Red-300: #F0685B;
    --Red-200: #F08980;
    --Red-100: #FFBAB4;
    --Red-000: #FFD6D2;

    //COLORS_ORANGE
    --Orange-700: #BE6A04;
    --Orange-600: #D37604;
    --Orange-500: #E88105;
    --Orange-400: #FD8D05;
    --Orange-300: #FC9518;
    --Orange-200: #FFB050;
    --Orange-100: #FFD39F;

    //COLORS_GREEN
    --Green-700: #125D45;
    --Green-600: #1B795A;
    --Green-500: #269370;
    --Green-400: #33AB84;
    --Green-300: #62C4A4;
    --Green-200: #94DAC3;
    --Green-100: #C8EEE2;

    //COLORS_VIOLET
    --Violet-700: #2A2A80;
    --Violet-600: #3C3CA9;
    --Violet-500: #4F4FCF;
    --Violet-400: #6565F2;
    --Violet-300: #8787FA;
    --Violet-200: #ACACFE;
    --Violet-100: #D4D4FF;

    //COLORS_GRAY
    --Gray-700: #1C1C28;
    --Gray-600: #28293D;
    --Gray-500: #3E4357;
    --Gray-400: #6E7282;
    --Gray-300: #80879B;
    --Gray-200: #9EA0AC;
    --Gray-100: #BEC3CE;

    //FONTS_SIZE
    --font-56: 56px;
    --font-32: 32px;
    --font-28: 28px;
    --font-22: 22px;
    --font-20: 20px;
    --font-18: 18px;
    --font-16: 16px;
    --font-14: 14px;

    //BREAKPOINT
    --mobile-small: 300px;
    --mobile-medium: 400px;
    --mobile-large: 500px ;
    
    

  }
`;
 
export default GlobalStyle;