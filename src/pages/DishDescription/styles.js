import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;  
  box-sizing: border-box;
`;

export const Ingredients = styled.ul`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;  
`;

export const Content = styled.div`
  margin: auto 10.0rem auto;
    .backButton {
      width: fit-content;
      display: flex;
      align-items: center; 
      margin: 2.4rem auto 4.2rem; 
    }

    main {
      align-items: center;    
      display: flex;
      flex-direction: row;
      justify-content: space-evenly; 
      gap: 4.8rem;  

      img {
        width:34.6rem;
        height: 34.5rem;
      }

      .texts {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        ${({ theme }) => theme.FONTS.POPPINS};
        font-style: normal;
        width: 68.7rem;
        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        h2 {        
          font-size: 4.0rem;
          font-weight: 500;
          line-height: 140%; /* 56px */
        }

        p {
          font-size: 2.4rem;        
          font-weight: 400;
          line-height: 140%; /* 33.6px */
        }
      }

      .buttons {      
        display: flex;
        flex-direction: row;   
        align-items: center;     
        margin-top: 4.8rem;
        white-space: nowrap;
        gap: 3.3rem;

        .includeButton{
          width: 16.2rem;     
        }
      }
    }
`;