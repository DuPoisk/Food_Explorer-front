import styled from "styled-components";

export const Container = styled.header`
  /* position: relative; */
  grid-area: header;
  width: 100%;
  height: 114px;
  padding: 24px auto;

  /*border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.LIGHT_100};*/

  /* padding: 0 80px; */
  background: ${({ theme }) => theme.COLORS.DARK_700};

  display: flex;
  /* flex-direction: row; */
  /* justify-content: space-around; */
  align-items: center;
  gap: 32px;

  .logoUser{
    display: flex;
    flex-direction: row;
    margin-left: 100px;  
    white-space: nowrap;  

    ${({ theme }) => theme.FONTS.POPPINS};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 24px;
    font-weight: 700;
    gap: 10px;
    
    span {
      ${({ theme }) => theme.FONTS.ROBOTO};
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      font-size: 12px;
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
    border-radius: 5px; 
    
    .searchIcon {/* também poderia chamar de svg*/
      zoom: 1.3;
      margin-left: 14px;
    }
  }
  
  .buttonChart {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;    
    padding: 12px 32px;
    white-space: nowrap; /* para evitar quebra de linha*/

    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 0;
    gap: 8px;  
    
    &:disabled { /* quando o botão estiver desabilitado*/
      opacity: 0.5;
    }    
  }
  
  .logoutIcon {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};    
  }  

  @media (max-width: 1085px){
    .logoUser{
      margin-left: 50px;
    }

    .logoutIcon {
      margin-right: -90px;
      zoom: 0.85;
    }
  }

  @media (max-width: 955px){
    gap: 28px;

    .logoUser{
      font-size: 95%;
      margin-left: 50px;
    }

    .inputWrapper, .buttonChart{
      zoom: 0.75;
    }

    .logoutIcon {
      margin-right: -80px;
      zoom: 0.75;
    }
  }

  @media (max-width: 767px){
    gap: 25px;
    .logoUser{
      margin-left: 30px;
    }

    .logoutIcon{
      margin-right: -150px;
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

