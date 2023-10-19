
import {FiSearch} from "react-icons/fi";
import {Footer} from "../../components/Footer";
import {Header} from "../../components/Header";
import {Input} from "../../components/Input";
import {Section} from "../../components/Section";

import {Container, Content} from "./styles.js";

export function UserMenu(){
  return(
    <Container>
      <Header/>  
     
      <Content>
        <Input
          placeholder="Busque por pratos ou ingredientes"
          type="text"
          icon={FiSearch}
        />
        <Section title="Sair"></Section>
      </Content>

      <footer>
        <Footer/>
      </footer>
    </Container>
  )
}