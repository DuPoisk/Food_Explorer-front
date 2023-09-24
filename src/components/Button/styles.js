import styled from "styled-components";

export const Container = styled.button `
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  padding: 0.75rem 1.5rem; /* 12px 24px*/
  justify-content: center;
  align-items: center;
  border: 0px;
  border-radius: 5px;
  margin-top: 5px; /* apenas para visualizar por enquanto. apagar*/

  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  &:disabled { /* quando o botão estiver desabilitado*/
    opacity: 0.5;
  }
`;