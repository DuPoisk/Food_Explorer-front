import styled from "styled-components";

export const Container = styled.div`
  /* font-size: 1rem; */
  padding: 0.21rem 0.5rem;
  margin: 0.25rem 0.5rem;  
  width: 30%;
  display: flex;
  flex-direction: row;
  background-color: ${({theme, $isNew}) => $isNew ? 'transparent' : theme.COLORS.LIGHT_600};  
  border: ${({theme, $isNew}) => $isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : 'none'};
  border-radius: 0.5rem;
  gap: 0.5rem;
  /* border: solid orange 2px; */
  
  input{
    color: ${({theme, $isNew}) => $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
    background: transparent;
    border: none;
    outline: unset;
    font-size: 1rem;
    /* gap: 0.5rem; */
    /* border: solid red 2px; */
  }  

  &::placeholder{
    color: ${({ theme }) => theme.COLORS.LIGHT_500}; 
  }

  button{    
    border: none;
    background: none;   
  }

  .button-delete{
    color: ${({ theme }) => theme.COLORS.TOMATO_300}; 
  }

  .button-add{
    color: green; 
  }
  
  
/*
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;  //171.429% 
  height: 3.2rem;
  padding: 0.4rem 8rem;
  border-radius: 0.5rem;  

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  background-color: ${({theme}) => theme.COLORS.DARK_1000};
  ${({theme}) => theme.FONTS.POPPINS};

*/

  /* button{    
    background: none;
    border: none;
    color:${({theme,$isNew})=>$isNew? theme.COLORS.MINT : theme.COLORS.TOMATO_100};
  }  para quando for adicionar um prato e escrever os ingredientes*/ 
`;