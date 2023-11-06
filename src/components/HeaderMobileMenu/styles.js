import styled from "styled-components";

export const Container = styled.header`
  /* grid-area: header; */
  width: 100%;
  height: 114px;
  padding-left: 28px;
  gap: 16px;

  display: flex;
  align-items: center; 

  background: ${({ theme }) => theme.COLORS.DARK_700};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  .closeIcon  {
    width: 24px;
    height: 24px; /* mudei de 18 para 24*/
  }

  p {
    background: transparent; /* se ao inves de p for button*/
    color: ${({ theme }) => theme.COLORS.LIGHT_100}; /* se ao inves de p for button*/

    font-size: 21.163px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }  
`;

