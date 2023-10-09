//import { Fragment } from "react"
import {Container } from "./styles.js";

import {Header} from "../../components/Header/index.jsx";
import {Button} from "../../components/Button/index.jsx";
 
export function Details (){
  return(
    <Container>
      <Header/>

      <Button title="Entrar"/>
      <Button title="Criar conta"/>
      <Button title="Incluir"/>
      <Button title="Editar prato"/>
      <Button title="Novo prato"/>
      <Button title="Pedidos"/>
      <Button title="Incluir R$"/>
      <Button title="Teste" loading/>
    </Container>
  )
}