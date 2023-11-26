import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2.4rem 2.8rem;  
  gap: 0.8rem;
  /* position: absolute; */
  bottom: 0px;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.COLORS.DARK_600};  

  > p {
    font-size: 1.2rem;
    color: ${({theme}) => theme.COLORS.LIGHT_200};
    ${({theme}) => theme.FONTS.DMSANS};
  }

  @media (min-width: 820px ){
    padding: 2.4rem 12.3rem;
  }
`;

export const Logo = styled.header`  
  display:flex;
  align-items: center;
  text-align: center; 
  gap: 0.647rem;

  > h1 {
    /* display:flex;
    align-items: center; */
    font-size: 1.5262rem;
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