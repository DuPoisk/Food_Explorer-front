import styled from "styled-components";

export const Container = styled.header`
  position: relative;
  grid-area: header;
  width: 100%;
  height: 11.4rem;
  padding: 2.4rem auto;

  /*border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.LIGHT_100};*/

  /* padding: 0 80px; */
  background: ${({ theme }) => theme.COLORS.DARK_700};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  ${({ theme }) => theme.FONTS.POPPINS};

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center; 
  gap: 7.4rem;

  .menuIcon, .receiptIcon  {
    width: 2.5rem;
    height: 2.5rem;/* mudei de 18 para 24*/
  }

  >.logoUser {
    display: flex;
    flex-direction: row;
    align-items: center;

    ${({ theme }) => theme.FONTS.POPPINS};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 1.32269rem;
    font-weight: 700;
    gap: 0.5rem;    

    span {
      ${({ theme }) => theme.FONTS.ROBOTO};
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      visibility: hidden;
    }
  }

  .orderSummary {
    .receiptIcon{
      position: relative;
      border: solid green 2px;
    }

    .buttonSummary{
      position: absolute;
      font-size: 2rem; /* 0875rem*/
      /* width:1.25rem;      
      height:1.25rem;       */
      padding: 0.75rem 2rem;
      /* zoom: 0.5;
      width: 1.5rem;
      height: 3rem; */
      
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      /* border: solid pink 2px; */
      right: -20px;
      top: -10px;
      
    }
  }


`;

