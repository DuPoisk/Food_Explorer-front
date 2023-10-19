import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;

  > footer {
    position: fixed;
    bottom: 0px;
    width: 100vw;
  }
`;

export const Content = styled.div`
  padding: 36px 28px 14px;
  height: 100vh;
  grid-area: content;
  overflow-y: auto; /* so aparece o scroll quando tem o overflow. se fosse scroll, apareceria sempre*/  
  background-color: ${({theme }) => theme.COLORS.DARK_400};
`;

