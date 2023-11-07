import styled from "styled-components";

export const Container = styled.div `
  width: 100%;

  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 32px */
  /* text-align: center; */
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 14px;  

  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};  
  
  h3{    
   color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`;