import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { useState } from "react";

import { useAuth } from '../../hooks/auth'

import { Input } from "./../../components/Input/index";
import { Button } from "./../../components/Button/index";
import { Link } from "react-router-dom";

export function SignIn(){
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const { signIn } = useAuth()

  function handleSignIn(){
    signIn({ email, password })
  }

  return (
    <Container>
      <Background/>

      <Form>

        <h1>React Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>

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
        <Button title="Entrar" onClick={handleSignIn}></Button>

        <Link to="/register">Criar Conta</Link>
      </Form>

    </Container>
  );
}
