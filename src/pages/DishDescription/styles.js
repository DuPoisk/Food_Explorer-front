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
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
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