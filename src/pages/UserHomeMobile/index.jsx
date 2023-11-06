import {Container} from "./styles.js";
import {Footer} from "../../components/Footer/index.jsx";
import {HeaderMobileDishes} from "../../components/HeaderMobileDishes/index.jsx";


export function UserHomeMobile(){
  return(
    <Container>
      <HeaderMobileDishes/>
      
      <Footer/>
    </Container>
  )
}