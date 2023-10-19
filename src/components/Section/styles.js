import styled from "styled-components";

export const Container = styled.section`
  margin: 28px 0;

  > h2 {
    ${({theme }) => theme.FONTS.POPPINS};
    color: ${({theme }) => theme.COLORS.LIGHT_300};
    font-size: 24px;
    font-weight: 300;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme }) => theme.COLORS.DARK_1000};

    padding: 10px;


  }
`