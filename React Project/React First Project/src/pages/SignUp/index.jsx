import { Container, Form, Background } from "./styles";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { Link } from "react-router-dom";

import { Input } from "./../../components/Input/index";
import { Button } from "./../../components/Button/index";

export function SignUp() {
  return (
    <Container>

      <Form>
        <h1>React Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input 
        placeholder="Nome"
        type="email"
        icon={FiUser} />

        <Input 
        placeholder="E-mail"
        type="email"
        icon={FiMail} />

        <Input 
        placeholder="Senha" 
        type="password" 
        icon={FiLock} />
        <Button title="Cadastrar"></Button>

        <Link to="/">Voltar para o Login</Link>
      </Form>
      
      <Background/>

    </Container>
  );
}
