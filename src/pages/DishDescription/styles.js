import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;  
  box-sizing: border-box;
`;

export const Ingredients = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 12px;  
`;

export const Content = styled.div`
margin: auto 100px auto;

  .backButton {
    width: fit-content;
    display: flex;
    align-items: center; 
    margin: 24px auto 42px; 
  }

  main {
    align-items: center;    
    display: flex;
    flex-direction: row;
    justify-content: space-evenly; 
    gap: 48px;  

    img {
      width:346px;
      height: 345px;
    }

    .texts {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      ${({ theme }) => theme.FONTS.POPPINS};
      font-style: normal;
      width: 687px;
      display: flex;
      flex-direction: column;
      gap: 24px;

      h2 {        
        font-size: 40px;
        font-weight: 500;
        line-height: 140%; /* 56px */
      }

      p {
        font-size: 24px;        
        font-weight: 400;
        line-height: 140%; /* 33.6px */
      }
    }

    .buttons {      
      display: flex;
      flex-direction: row;   
      align-items: center;     
      margin-top: 48px;
      white-space: nowrap;
      gap: 33px;

      .includeButton{
        width: 162px;     
      }
    }
  }  
`;