import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center; 
  color: ${({ theme }) => theme.COLORS.LIGHT_400}; /*texto escrito */
  border-radius: 5px;

  > input {
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;  /* 100%*/

    height: 3rem;
    padding: 0.75rem 0.875rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};  /* preenchimento */  
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    border: 0;    
    outline: unset;
    border-radius: 0.5rem; 
    

    ::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }  
  }

  input:invalid{
    border: 2px solid ${({ theme }) => theme.COLORS.TOMATO_200};
  }
  
  > svg {
    margin-left: 1.6rem;   
  }
`;