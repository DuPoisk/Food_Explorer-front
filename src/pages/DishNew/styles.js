import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div`
  

  #image {
    /* input[type="file"]::file-selector-button{
      border: 2px solid #6c5ce7;     
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
    } */
  }

  .backButton{
    font-size: 1.03413rem;
    display: flex;
    flex-direction: row;
    margin: 1.1rem auto 2.4rem 2.6rem;

    svg{
      zoom:0.73; 
    }

    p{
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      display: flex;
      align-items: start;   
    }   
  }

  form, .submitButton{
    width: 22.75rem;   
    display: flex;
    flex-direction: column;  
    gap: 1.5rem;
    margin: auto 3.2rem;

    p {     
      ${({ theme }) => theme.FONTS.POPPINS};
      font-size: 3.2rem;
    }

    input {
      width: 100%;      
    }
  }

  .formInputs{
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    display: flex;
    flex-direction: column; 
    gap: 1.6rem;

    ::placeholder, #imageInput, #image {
      font-size: 1rem;     
    }

    select {
      /* appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      background: url("../../assets/arrow.svg") no-repeat center right;
      border: 1px solid orange;     
      padding-right: 16px; */

      width: 100%;

      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      height: 3rem;
      padding: 0.75rem 0.875rem;
      border: none;
      border-radius: 0.5rem;     
      background-color: ${({ theme }) => theme.COLORS.DARK_900};  /* preenchimento */  
      color: ${({ theme }) => theme.COLORS.LIGHT_500};      
    }  
    
    select:invalid{
      border: 2px solid ${({ theme }) => theme.COLORS.TOMATO_200};
    }

    #description{
      display: flex;
      height: 10.75rem;
      padding: 0.875rem;
      align-items: flex-start;
      gap: 0.875rem;
      align-self: stretch;
      border: none;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_800}; 
    }

    #description:invalid{      
      border: 2px solid ${({ theme }) => theme.COLORS.TOMATO_200};
    }
  }

  .uploadImage{
    height: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1.5rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 0.5rem;

    .uploadIcon{
      margin: 0.75rem 0.5rem 0.75rem 2rem;
      width: 2.5rem;
      height: 2.5rem;
      transform: rotate(-90deg);
    }
  }

  .uploadText {
    ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem;
    white-space: nowrap;
  }

  #image{
    display: none;
  }

  .submitButton{
    margin: 1.5rem 3.2rem 8.13rem;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  .submitButton:hover{
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  }

  footer{
    position: absolute;
  }   
`;