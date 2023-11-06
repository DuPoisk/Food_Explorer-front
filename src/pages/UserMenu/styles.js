import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  padding: 36px 28px 14px;
  height: 100vh;
  grid-area: content;
  overflow-y: auto; /* so aparece o scroll quando tem o overflow. se fosse scroll, apareceria sempre*/  
  

  div{
    display:flex;
    align-items: center;
    background-color: ${({theme }) => theme.COLORS.DARK_900};
    border-radius: 5px;     

    .searchIcon{ /* também poderia chamar de svg*/
      zoom: 1.3;
      margin-left: 14px;
    }

    input{
      width: 100%
    }
  }

  section{
    margin-top: 36px;
  }
 
`;

