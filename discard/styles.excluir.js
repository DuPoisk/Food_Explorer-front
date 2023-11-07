import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center; /*stretch para fazer a distribuição (?) */
  justify-content: center;

  background: ${({ theme }) => theme.COLORS.DARK_400};
  ${({ theme }) => theme.FONTS.ROBOTO};

  @media (min-width: 820px ){
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Logo = styled.header`
  width: 316px;
  margin-bottom: 73px;
  gap: 10.74px;

  display:flex;
  flex-direction: row;
  align-items: center;

  /*> svg {
  size: 43.315px; width and height
  }*/

  > h1 {
    font-size: 37.2px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media (min-width: 820px ){
    margin-left: 9%; /*153*/
    gap: 19px;
  }
`;

export const Form = styled.form`
  >div {
    width: 100%;
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
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 8px;
    }

    input {
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }

    input, button {
      width: 316px;
      margin-bottom: 32px;
    }

    h2, button, a {
      ${({ theme }) => theme.FONTS.POPPINS};
    }
  }

  @media (min-width: 820px){
    margin-right: 5%; /* mudar essa margem depois*/ 

    > div {        
        padding: 64px;
        border-radius: 16px;
        background-color: ${({ theme }) => theme.COLORS.DARK_700};        

      h2 {
        visibility: visible;
        font-size: 32px;
      }

      h2, input, button {
        margin-bottom: 32px;
      }
    }
  }
`;