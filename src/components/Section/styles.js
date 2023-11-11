import styled from "styled-components";

export const Container = styled.section`
  margin: 2.8rem 0;

  > h2 {
    ${({theme }) => theme.FONTS.POPPINS};
    color: ${({theme }) => theme.COLORS.LIGHT_300};
    font-size: 2.4rem;
    font-weight: 300;

    border-bottom-width: 0.1rem;
    border-bottom-style: solid;
    border-bottom-color: ${({theme }) => theme.COLORS.DARK_1000};

    padding: 1.0rem;
  }
`