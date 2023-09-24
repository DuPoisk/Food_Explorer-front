import { Fragment } from "react"
import {Container } from "./styles.js"

import {Button} from "../../components/Button/index.jsx"
 
export function Details (){
  return(
    <Container>
      <h1>Hello explorer</h1>

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