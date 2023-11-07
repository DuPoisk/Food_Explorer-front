import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  .backButton{
    width: fit-content;
    display: flex;
    align-items: center;
    align-self: flex-start;
    font-family: "Poppins", sans-serif;
  }
`;

export const Ingredients = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;

  > li {
    ${({ theme }) => theme.FONTS.POPPINS};
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    font-size: 1.4rem;

    padding: 0.4rem 0.8rem;
    border-radius: 5px;
  }
`;

export const Content = styled.div`
  
  main{
    align-items: center;    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  /* overflow-y: scroll; */

  > :first-child {
    width: fit-content;
    align-self: normal;
  }

  > :nth-child(2) {
    max-width: 100%;
    height: auto;
    margin-top: 1.6rem;
  }

  > :nth-child(3) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2.4rem;
    font-family: "Poppins", sans-serif;

    margin-bottom: 4.8rem;
  }
`;