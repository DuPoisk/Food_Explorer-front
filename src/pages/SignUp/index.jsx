import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Logo, Form } from "./styles";

import {useState} from "react";// hook para criar estados
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function SignUp(){
  const [name, setName] = useState(""); //useState é o hook que cria o estado. Dentro dos parênteses vai o valor inicial. name é o estado e setName é a função que vai mudar o estado
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(){
    if(!name || !email || !password){ // verificar se todos os campos estão preenchidos
      return alert("Preencha todos os campos!") // return serve para parar a aplicação caso algum dos campos não tenha sido preenchido
    }

    api.post("/users", {name, email, password})
    .then(() => {  //then para caso tenha dado tudo certo
      alert("Usuário cadastrado com sucesso!");
      navigate("/"); // levará para a tela inicial de login após o usuário ser cadastrado com sucesso
    })
    .catch( error => {// catch para caso tenha dado algum problema no processo de cadastro
      if(error.response){
        alert(error.response.data.message); // pego a msg de erro que criei em UsersController.js, dentro da função create
      }else{// se não for nenhuma msg específica, então mando uma msg mais genérica como mostrado a seguir
        alert("Não foi possível cadastrar.");
      } 
    }); 
  }

  return (
    <Container>
      <Logo>
        <svg width="39" height="44" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.6574 0L38.4133 10.8287V32.4862L19.6574 43.3149L0.901548 32.4862V10.8287L19.6574 0Z" fill="#065E7C"/>
        </svg>
        <h1>food explorer</h1>
      </Logo>    
            
      <Form>
        <div>
          <h2>Crie sua conta</h2>

          <label id="newAccount_name">Seu nome
            <Input
              placeholder="Exemplo: Maria da Silva"
              type="text"
              onChange={event => setName(event.target.value)} // pode-se usar event ou somente a letra e
            />
          </label> 
                        
          <label>E-mail
            <Input
              placeholder="Exemplo: maria@email.com.br"
              type="text"
              onChange={event => setEmail(event.target.value)} 
            />
          </label>
          
          <label> Senha
            <Input
              placeholder="No mínimo 6 caracteres"
              type="password"  
              minLength ="6"
              required               
              onChange={event => setPassword(event.target.value)}           
            />
          </label>            

          <Button title="Criar conta" onClick={handleSignUp}/>
          <Link to="/">
            Já tenho uma conta
          </Link>
          {/* <a href="#">Já tenho uma conta</a> */}
        </div>
      </Form>
    </Container>
  );
}