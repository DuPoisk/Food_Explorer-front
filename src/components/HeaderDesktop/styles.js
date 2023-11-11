import styled from "styled-components";

export const Container = styled.header`
  /* position: relative; */
  grid-area: header;
  width: 100%;
  height: 11.4rem;
  padding: 2.4rem auto;

  /*border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.LIGHT_100};*/

  /* padding: 0 80px; */
  background: ${({ theme }) => theme.COLORS.DARK_700};

  display: flex;
  /* flex-direction: row; */
  /* justify-content: space-around; */
  align-items: center;
  gap: 3.2rem;

  .logoUser{
    display: flex;
    flex-direction: row;
    margin-left: 10.0rem;  
    white-space: nowrap;  

    ${({ theme }) => theme.FONTS.POPPINS};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 2.4rem;
    font-weight: 700;
    gap: 1.0rem;
    
    span {
      ${({ theme }) => theme.FONTS.ROBOTO};
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      font-size: 1.2rem;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }

  input{
    width: 100%;    
  }

  .inputWrapper {   
    /* width: clamp(40%, 65%, 70%);  */
    width: 50%; 
    display:flex;
    align-items: center;
    background-color: ${({theme }) => theme.COLORS.DARK_900};
    border-radius: 0.5rem; 
    
    .searchIcon {/* também poderia chamar de svg*/
      zoom: 1.3;
      margin-left: 1.4rem;
    }
  }
  
  .buttonChart {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem;    
    padding: 1.2rem 3.2rem;
    white-space: nowrap; /* para evitar quebra de linha*/

    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 0;
    gap: 0.8rem;  
    
    &:disabled { /* quando o botão estiver desabilitado*/
      opacity: 0.5;
    }    
  }
  
  .logoutIcon {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};    
  }  

  @media (max-width: 1085px){
    .logoUser{
      margin-left: 5.0rem;
    }

    .logoutIcon {
      margin-right: -9.0rem;
      zoom: 0.85;
    }
  }

  @media (max-width: 955px){
    gap: 2.8rem;

    .logoUser{
      font-size: 95%;
      margin-left: 5.0rem;
    }

    .inputWrapper, .buttonChart{
      zoom: 0.75;
    }

    .logoutIcon {
      margin-right: -8.0rem;
      zoom: 0.75;
    }
  }

  @media (max-width: 767px){
    gap: 2.5rem;
    .logoUser{
      margin-left: 3.0rem;
    }

    .logoutIcon{
      margin-right: -15.0rem;
    }

    .buttonChart{
      zoom: 0.65;
    }
  }

  /* colocando menu de mobile aqui. ideia REJEITADA

  .HeaderMobileMenu{
    visibility: hidden;
  }

   @media (max-width: 746px){ 
    border: solid blue 2px;
    .logoUser, .inputWrapper, .buttonChart, .logoutIcon  {
      display: none;
    }

    .HeaderMobileMenu{
      visibility: visible;
      ${({ theme }) => theme.FONTS.ROBOTO};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 21.163px;
      font-weight: 400;
      
      display: flex;     
      align-items: center;
      gap: 16px;
      position: fixed;
      left: 28px;      
    }
  }  */
`;

