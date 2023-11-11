import styled from "styled-components";

export const Container = styled.button `
  background-color:transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  ${({ theme }) => theme.FONTS.POPPINS};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */

  border: none;

  display: flex;
  flex-direction: row;
  align-items: center;  

  p {
    width: 4.625rem;
    height: 2.125rem;
  }

  svg{
    width: 2rem;
    height: 2rem;
  }
`