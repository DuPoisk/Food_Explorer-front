import styled from "styled-components";

export const Container= styled.div`
  .card{    
    height: 462px;
    width: 316px;
    
    display: flex;
    flex:none; /*para que fiquem todos do mesmo tamanho e não diminua os cards */
    flex-direction: column;
    align-items: center;
    text-align:center;
    
    padding: 24px;
    gap:15px;
    position: relative;

    background-color: ${({theme})=>theme.COLORS.DARK_200};


    .interactionIcon{
      color: ${({theme})=>theme.COLORS.LIGHT_300};
      position: absolute;
      z-index: 1;
      top: 16px;
      right: 18px;
    }

    .image{
      width:176px;
      height:176px;
      border-radius:50%;
      /* margin:56px 62px 16px; */
      /*background: url(<path-to-image>), lightgray 50% / cover no-repeat*/
    }

    .dishInfos{
      h1{
        white-space: nowrap; 
        color: ${({theme})=>theme.COLORS.LIGHT_300};
      }
  
      p{
        color: ${({theme})=>theme.COLORS.LIGHT_400};
      }
  
      h2{
        font-size: 32px;
        font-weight: 400;
        line-height: 160%; /* 51.2px */
        color: ${({theme})=>theme.COLORS.CAKE_200};
      }
    }

    .order{
      display: flex;
      flex-direction: row;
      gap: 16px;
      cursor: pointer;
    }  

    .moveButtons{
      cursor: pointer;
    }
  }
`;
  

 


 
