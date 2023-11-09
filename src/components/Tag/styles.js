import styled from "styled-components";

export const Container = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px; /* 171.429% */
  height: 32px;
  padding: 4px 8px;
  border-radius: 5px;  

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  background-color: ${({theme}) => theme.COLORS.DARK_1000};
  ${({theme}) => theme.FONTS.POPPINS};
`;