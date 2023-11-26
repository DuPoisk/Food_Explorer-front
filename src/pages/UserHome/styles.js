import styled from "styled-components";

export const Container = styled.div`
  
`;

export const Content = styled.div`
    ${({theme }) => theme.FONTS.POPPINS};
    color: ${({theme }) => theme.COLORS.LIGHT_300};

  .coverText{    
    width: 100%;

    div:nth-child(1){
      position: absolute;
      z-index: 1;
      top: 6.3rem;      
    }
    
    div:nth-child(2){      
      height: 11.3rem;
      font-style: normal;
      line-height: 1.05rem; /*140%*/
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      padding-right: 2rem;
      gap: 0.3rem;

      
      margin: 2.75rem 2rem 6.94rem 2.25rem;      
      border-radius: 0.18231rem;
      background: var(--gradients-200, linear-gradient(180deg, #091E26 0%, #00131C 100%));

      h1{   
        font-size: 1.125rem;
        font-weight: 600;
        margin-left: 52%;
      }

      p{
        font-size: 0.75rem;
        font-weight: 400;
        width: 12.625rem;
        margin-left: 52%;
      }
    }
  }  
`;