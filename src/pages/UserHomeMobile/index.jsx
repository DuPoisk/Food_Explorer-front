import {Container, Content} from "./styles.js";
import {Footer} from "../../components/Footer/index.jsx";
import {HeaderMobileDishes} from "../../components/HeaderMobileDishes/index.jsx";


export function UserHomeMobile(){
  return(
    <Container>
      <HeaderMobileDishes/>
      <Content/>
      <Footer/>
    </Container>
  )
}