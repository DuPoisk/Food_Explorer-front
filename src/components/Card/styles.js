import styled from "styled-components";

export const Container= styled.div`  
  width: fit-content;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align:center;
  border: solid red 2px;
  
  padding: 1.5rem;
  gap: 1rem;
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
    /* width:5.5rem;
    height:5.5rem; */
    zoom: 0.40;
    border-radius:50%;
    /* margin:56px 62px 16px; */
    /*background: url(<path-to-image>), lightgray 50% / cover no-repeat*/
  }

  h1{
    white-space: nowrap; 
    font-size: "clamp(0.875rem, 1rem, 1.5rem)";
    color: ${({theme})=>theme.COLORS.LIGHT_300};
    ${({theme})=>theme.FONTS.POPPINS};
  }

  p{
    font-size: 0.875rem;
    color: ${({theme})=>theme.COLORS.LIGHT_400};
  }

  h2{
    font-size: "(1rem, 1.5rem, 2rem)";
    font-weight: 400;
    line-height: 3.2rem; /* 160%*/
    color: ${({theme})=>theme.COLORS.CAKE_200};
  }

  .order{
    display: flex;
    flex-direction: row;
    gap: 1.6rem;
  }  
`;
  

 
