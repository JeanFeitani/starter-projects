import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, NewNote, Content } from "./styles";

import { Header } from "./../../components/Header/index";
import { ButtonText } from "./../../components/ButtonText/index";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";


export function Home() {
  return (
    <Container>
      <Header></Header>

      <Brand>
        <h1>React Notes</h1>
      </Brand>

      <Menu>
        <li>
          <ButtonText title="All" $isactive></ButtonText>
        </li>
        <li>
          <ButtonText title="Example"></ButtonText>
        </li>
        <li>
          <ButtonText title="React"></ButtonText>
        </li>

      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="My notes">
          <Note
            data={{
              title: "React",
              tags: [
                { id: "1", name: "typescript" },
                { id: "2", name: "node" }
            ]
            }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus></FiPlus>Criar Nota
      </NewNote>
    </Container>
  );
}
