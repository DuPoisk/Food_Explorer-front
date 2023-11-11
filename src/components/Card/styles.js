import styled from "styled-components";

export const Container= styled.div`
  height: 46.2rem;
  width: 31.6rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align:center;
  
  padding: 2.4rem;
  gap:1.5rem;
  position: relative;

  background-color: ${({theme})=>theme.COLORS.DARK_200};

  .interactionIcon{
    color: ${({theme})=>theme.COLORS.LIGHT_300};
    position: absolute;
    z-index: 1;
    top: 1.6rem;
    right: 1.8rem;
  }

  .image{
    /* width:16.5rem;
    height:16.5rem; */
    zoom: 0.40;
    border-radius:50%;
    /* margin:56px 62px 16px; */
    /*background: url(<path-to-image>), lightgray 50% / cover no-repeat*/
  }

  h1{
    white-space: nowrap; 
    color: ${({theme})=>theme.COLORS.LIGHT_300};
  }

  p{
    color: ${({theme})=>theme.COLORS.LIGHT_400};
  }

  h2{
    font-size: 3.2rem;
    font-weight: 400;
    line-height: 160%; /* 51.2px */
    color: ${({theme})=>theme.COLORS.CAKE_200};
  }

  .order{
    display: flex;
    flex-direction: row;
    gap: 1.6rem;
  }  
`;
  

 
