import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }  

  :root{   
    font-size: 62.5%;  /*1 rem = 10px */
  }

  body {
    
    background-color: ${({ theme }) => theme.COLORS.DARK_400};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    -webkit-font-smoothing: antialiased; /* para deixar as fontes mais suaves */

    display: grid;
    grid-template-rows: 7.125rem auto 4.8125rem; 
    grid-template-areas:
    "header"
    "content"
    "footer";
  }   

  body, input, button, textarea {
    ${({ theme }) => theme.FONTS.ROBOTO}; /*conteúdo que vem dentro de uma variável. É um conteúdo dinâmico*/
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover{
    filter: brightness(0.9); /*vai escurecer */
  }

 
`;