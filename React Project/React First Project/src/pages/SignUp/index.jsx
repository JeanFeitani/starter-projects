import { Container, Form, Background } from "./styles";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { useState,  } from "react";

import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Input } from "./../../components/Input/index";
import { Button } from "./../../components/Button/index";

export function SignUp() {
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const navigate = useNavigate()

  function handleSignUp(){
    if(!name || !password || !email){
      alert("preencha todos os campos")
    }

    api.post('/users', { name, email, password})
    .then(() => {
      alert("Usuário cadastrado com sucesso")
      navigate("/")
    })
    .catch((error) => {
      if(error.response){
        alert(error.response.data.message)
      }
      else{
        alert("Não foi possível realizar o cadastro")
      }
    })

  }


  return (
    <Container>

      <Form>
        <h1>React Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input 
        placeholder="Nome"
        type="email"
        icon={FiUser} 
        onChange={e => setName(e.target.value)}
        />

        <Input 
        placeholder="E-mail"
        type="email"
        icon={FiMail} 
        onChange={e => setEmail(e.target.value)}
        />

        <Input 
        placeholder="Senha" 
        type="password" 
        icon={FiLock} 
        onChange={e => setPassword(e.target.value)}
        />
        <Button title="Cadastrar" onClick={handleSignUp}
        ></Button>

        <Link to="/">Voltar para o Login</Link>
      </Form>
      
      <Background/>

    </Container>
  );
}
