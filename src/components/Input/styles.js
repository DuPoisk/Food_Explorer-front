import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center; 
  color: ${({ theme }) => theme.COLORS.LIGHT_400}; /*texto escrito */
  border-radius: 5px;

  > input {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;  /* 100%*/
    height: 48px;
    padding: 12px 14px;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};  /* preenchimento */  
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    border: 0;
    border-radius: 5px; 
    

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }  
  }
  
  > svg {
    margin-left: 16px;   
  }
`;