import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* :root { 
    --ff-roboto: 'Roboto', sans-serif;
    --ff-poppins: 'Poppins', sans-serif; 
  } */
  

  body {
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased; /* para deixar as fontes mais suaves */
  } 

  

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover{
    filter: brightness(0.9) /*vai escurecer */
  }

`;