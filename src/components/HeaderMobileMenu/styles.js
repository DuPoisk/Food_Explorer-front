import styled from "styled-components";

export const Container = styled.header`
  /* grid-area: header; */
  width: 100%;
  height: 11.4rem;
  padding-left: 2.8rem;
  gap: 1.6rem;

  display: flex;
  align-items: center; 

  background: ${({ theme }) => theme.COLORS.DARK_700};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  .closeIcon  {
    width: 2.4rem;
    height: 2.4rem; /* mudei de 18 para 24*/
  }

  p {
    background: transparent; /* se ao inves de p for button*/
    color: ${({ theme }) => theme.COLORS.LIGHT_100}; /* se ao inves de p for button*/

    font-size: 2.1163rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }  
`;

