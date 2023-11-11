import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center; /*stretch para fazer a distribuição (?) */
  justify-content: center;  

  @media (min-width: 820px ){
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const Logo = styled.header`
  margin-bottom: 3.8rem;
  gap: 1.074rem;  

  display:flex;
  flex-direction: row;
  align-items: center;

  /*> svg {
  size: 43.315px; width and height
  }*/

  > h1 {
    font-size: 3.72rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    /*cor e fonte já definido em global */
  }
`;

export const Form = styled.form`
  >div {
    /* width: 100%; */
    /* padding: 0 136px; */
    text-align: center;

    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > h2 {
      visibility: hidden;
    }

    > label {
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.6rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 0.8rem;
    }

    input, button {
      width: 31.6rem;
      margin-bottom: 3.2rem;
    }

    h2, button, a {
      ${({ theme }) => theme.FONTS.POPPINS};
      color: ${({ theme }) => theme.COLORS.LIGHT_100}; 
    }
  }

  @media (min-width: 820px){
    > div {        
      padding: 6.4rem;
      border-radius: 1.6rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_700};        

      h2 {
        visibility: visible;
        font-size: 3.2rem;
      }

      h2, input, button {
        margin-bottom: 3.2rem;
      }
    }
  }
`;