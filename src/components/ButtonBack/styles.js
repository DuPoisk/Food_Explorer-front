import styled from "styled-components";

export const Container = styled.button `
  background-color:transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  ${({ theme }) => theme.FONTS.POPPINS};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */

  border: none;

  p {
    width:74px;
    height:34px;
  }
`