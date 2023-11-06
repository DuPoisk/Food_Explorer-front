import {Container} from "./styles.js";
import {Footer} from "../../components/Footer/index.jsx";
import {HeaderDesktop} from "../../components/HeaderDesktop";
import {HeaderMobileDishes} from "../../components/HeaderMobileDishes";
import {HeaderMobileMenu} from "../../components/HeaderMobileMenu";



export function UserHomeDesktop(){
  return(
    <Container>     
      <HeaderDesktop/>
      <Footer/>
    </Container>
  );
}