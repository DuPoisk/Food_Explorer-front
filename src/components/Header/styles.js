import styled from "styled-components";

export const Container = styled.header`
  position: relative;
  z-index:2;
  grid-area: header;
  width: 100%;
  padding: 1.5rem 7.60rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  background: ${({ theme }) => theme.COLORS.DARK_700};

  .menuIcon, .orderSummary{
    display: none;
  }

  .logoUser{
    display: flex;
    flex-direction: row;
    white-space: nowrap;

    ${({ theme }) => theme.FONTS.POPPINS};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.5rem;
    font-weight: 700;
    gap: 0.7rem;

    p:nth-child(3){
      display: none;
    }

    span {
      ${({ theme }) => theme.FONTS.ROBOTO};
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      font-size: 0.75rem;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    svg {
      width: 1.875rem;
      height: 1.875rem;
    }
  }

  .spanMobile{
    display: none;
  }


  input{
    width: 100%;
  }

  .inputWrapper {
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
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5rem;
    padding: 0.75rem 2rem;
    white-space: nowrap; /* para evitar quebra de linha*/

    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 0;
    gap: 0.5rem;

    &:disabled { /* quando o botão estiver desabilitado*/
      opacity: 0.5;
    }
  }

  .logoutIcon {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }


  @media (max-width: 767px){
    gap: 1.5rem;

    .inputWrapper{
      width: 65%;
    }

    .logoUser{
      margin-left: -9.0rem;
    }

    .logoutIcon{
      margin-right: -15.0rem;
      zoom: 0.65;
    }

    .buttonChart{
      zoom: 0.65;
    }
  }


  /*MOBILE */
  @media (max-width: 500px){
    padding: 3.5rem 2.75rem 1.5rem;
    justify-content: space-between;

    .inputWrapper, .buttonChart, .logoutIcon  {
      display: none;
    }

    .menuIcon {
      display: block;
      width: 2.5rem;
      height: 2.125rem;
    }

    .logoUser {
      padding-left: 6rem;
      font-size: 1.32269rem;
      gap: 0.5rem;

      span{
        display:none;
      }

      p:nth-child(3) {
        display: block;
        ${({ theme }) => theme.FONTS.ROBOTO};
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
      }
    }

    .orderSummary {
     display: block;

      .receiptIcon{
        position: absolute;
        top: 3rem;
        width: 2.75rem;
        height: 2.75rem;
      }

      p {
        font-size: 1.125rem;
        width: 2.65rem;
        height: 2.25rem;
        zoom: 60%;
        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;
        z-index: 1;
        border-radius: 50%;
        top: -1.75rem;
        right: -2.75rem;

        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        ${({ theme }) => theme.FONTS.POPPINS};
      }
    }
  }
`;

