import styled from "styled-components";

export const Container = styled.div `

  font-size: 2.0rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 32px */
  /* text-align: center; */
  
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.4rem;  

  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};  
  
  h3{    
   color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`;