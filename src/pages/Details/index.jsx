//import { Fragment } from "react"
import {Container } from "./styles.js";

import {HeaderDesktop} from "../../components/HeaderDesktop/index.jsx";
import {Button} from "../../components/Button/index.jsx";
 
export function Details (){
  return(
    <Container>
      <HeaderDesktop/>

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

/*
<Button title={12345}/>
se for número, uso chaves e o numero
*/