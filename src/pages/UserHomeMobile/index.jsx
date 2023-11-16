import {Container, Content} from "./styles.js";
import {Footer} from "../../components/Footer/index.jsx";
import {HeaderDesktop} from "../../components/HeaderDesktop/index.jsx";


export function UserHomeMobile(){
  return(
    <Container>
      <HeaderDesktop/>
      <Content/>
      <Footer/>
    </Container>
  )
}