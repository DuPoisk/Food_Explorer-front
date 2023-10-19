import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 77px;
  background-color: ${({theme}) => theme.COLORS.DARK_600};

  padding: 24px 28px;
  
  gap: 8px;
 
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > p {
    font-size: 12px;
    color: ${({theme}) => theme.COLORS.LIGHT_200};
    ${({theme}) => theme.FONTS.DMSANS};
  }

  @media (min-width: 820px ){
    padding: 24px 123px;
  }
`;

export const Logo = styled.header`  
  display:flex;
  align-items: center;
  text-align: center; 
  gap: 6.47px;

  > h1 {
    /* display:flex;
    align-items: center; */
    font-size: 15.262px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${({ theme }) => theme.COLORS.LIGHT_700};
    ${({ theme }) => theme.FONTS.ROBOTO};
  }

  @media (min-width: 820px ){
    margin-left: 9%; /*153*/    
  }
`;