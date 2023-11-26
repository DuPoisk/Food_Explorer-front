import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  padding: 3.75rem 1.75rem 1.75rem 2.8rem;
  gap: 1.6rem;

  display: flex;
  align-items: center; 

  background: ${({ theme }) => theme.COLORS.DARK_700};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  .closeIcon  {
    width: 1.125rem;
    height: 1.125rem; /* mudei de 18 para 24*/
  }

  p {
    background: transparent; /* se ao inves de p for button*/
    color: ${({ theme }) => theme.COLORS.LIGHT_100}; /* se ao inves de p for button*/

    font-size: 1.32269rem; /*2.1163rem;*/
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  } 
`;

