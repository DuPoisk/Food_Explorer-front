import styled from "styled-components";

export const Container = styled.button `
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  ${({ theme }) => theme.FONTS.POPPINS};

  padding: 0.75rem 1.5rem; /*0.75rem 1.5rem; 12px 24px*/
  justify-content: center;
  align-items: center;
  border: 0px;
  border-radius: 0.5rem;

  text-align: center;
  
  font-size: 0.875rem;;
  font-weight: 500;
  line-height: 2.4rem;

  &:disabled { /* quando o botão estiver desabilitado*/
    opacity: 0.5;
  }  
`;