import styled from "styled-components";

export const Container = styled.header`
  position: relative;
  grid-area: header;
  width: 100%;
  height: 104px;
  padding: 24px auto;

  /*border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.LIGHT_100};*/

  /* padding: 0 80px; */
  background: ${({ theme }) => theme.COLORS.DARK_700};

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center; 
  gap: 32px;
  border: pink solid 2px;

  > .mobileHeader{
    display: none;
  }

  > .logoUser{
    display: flex;
    flex-direction: row;

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

  .userInput {
    width: 581px;

    >svg {
      margin: -10px;
    }
  }
  
  > a {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    ${({ theme }) => theme.FONTS.POPPINS};
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;    
    padding: 12px 32px;

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
    width: 33px;
    height: 32px;  
    margin-right: 28px;
  }  

  @media (max-width: 820px){
    .logoUser, .userInput, .buttonChart, .logoutIcon  {
      display: none;
    }

    .mobileHeader {
      ${({ theme }) => theme.FONTS.ROBOTO};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      visibility: visible;
      font-size: 21.163px;
      font-weight: 400;
      
      display: flex;     
      align-items: center;
      gap: 16px;
      position: fixed;
      left: 28px;      
    }
  }
`;

