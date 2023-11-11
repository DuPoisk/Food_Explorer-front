import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem; /* 171.429% */
  height: 3.2rem;
  padding: 0.4rem 8rem;
  border-radius: 5px;  

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  background-color: ${({theme}) => theme.COLORS.DARK_1000};
  ${({theme}) => theme.FONTS.POPPINS};

  /* button{    
    background: none;
    border: none;
    color:${({theme,isNew})=>isNew? theme.COLORS.MINT : theme.COLORS.TOMATO_100};
  }  para quando for adicionar um prato e escrever os ingredientes*/ 
`;