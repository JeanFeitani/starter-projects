import { Container, Links, Content } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";


export function Details() {
  return (
    <>
      <Container>
        <Header />

        <main>
          <Content>
        <ButtonText title={"Excluir nota"}></ButtonText>
        <h1>Introdução</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates veritatis doloribus ducimus doloremque quisquam ea? Asperiores alias, voluptas sapiente sequi, nemo, reiciendis quasi voluptate inventore qui rerum delectus doloribus quisquam.</p>

        <Section title="Links úteis">
          <Links>
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
          </Links>
        </Section>
        <Section title="Marcadores">
          <Tag title="express"></Tag>
          <Tag title="node"></Tag>
        </Section>
        <Button title="Voltar" />

        </Content>
        </main>

      </Container>
    </>
  );
}
