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
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  ${({ theme }) => theme.FONTS.POPPINS};

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center; 
  gap: 74px;

  .menuIcon  {
    width: 24px;
    height: 24px; /* mudei de 18 para 24*/
  }

  >.logoUser{
    display: flex;
    flex-direction: row;

    ${({ theme }) => theme.FONTS.POPPINS};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 21.163px;
    font-weight: 700;
    gap: 10px;    

    span {
      ${({ theme }) => theme.FONTS.ROBOTO};
      color: ${({ theme }) => theme.COLORS.CAKE_200};
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      display: inline;
      align-items: end;
    }
  }

  .receiptIcon {
    width: 32px;
    height: 32px;
  }
`;

