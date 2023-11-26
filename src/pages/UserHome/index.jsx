import {Container, Content} from "./styles.js";
import {Footer} from "../../components/Footer/index.jsx";
import {Header} from "../../components/Header";
import {NewCarousel} from "../../components/NewCarousel";


export function UserHome(){
  return(
    <Container>
      <Header/>
      <Content>
        <main>
          <div className="coverText">
            <div className="Imagem">
              <img src="../../../public/homeImg.svg" alt="Imagem de frutas e doces coloridos"/>
            </div>
            <div>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>         
            </div>
          </div>

          {/* <Carousel/> */}
          <p>Refeições</p>
            <NewCarousel>
            </NewCarousel>

          

        </main>
      </Content>
      <Footer/>
    </Container>
  )
}

