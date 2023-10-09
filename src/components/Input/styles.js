import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center; 
  color: ${({ theme }) => theme.COLORS.DARK_900};

  /* margin-bottom: 32px;   */

  > input {
    height: 48px;
    width: 100%;
    padding: 12px 14px;
    background: ${({ theme }) => theme.COLORS.DARK_900};
    border: none;
    border-radius: 8px;
    

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }

  > svg {
      margin-left: 16px;
    }
`;