import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Logo, Form } from "./styles";

import {useState} from "react";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";

export function SignIn(){
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const {signIn} = useAuth(); // um hook que me devolve um conteúdo na variável data
  

  function handleSignIn(){
    signIn({email, password});
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
          <h2>Faça login</h2>

          {/* <label id="newAccount_name">Seu nome
            <Input
              placeholder="Exemplo: Maria da Silva"
              type="text"
            />
          </label> */}
                        
          <label>E-mail
            <Input
              placeholder="Exemplo: exemplo@exemplo.com.br"
              type="text"
              required
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
            

          <Button title="Entrar" onClick={handleSignIn}/>
          <Link to="/register">
            Criar uma conta
          </Link>  
        </div>
      </Form>

    </Container>
  );
}