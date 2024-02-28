import { Container, Brand, Menu, Search, NewNote, Content } from "./styles";

import { Header } from "./../../components/Header/index";

export function Home() {
  return (
    <Container>
        <Header></Header>
      <Brand>
        <h1>React Notes</h1>
      </Brand>
      <Menu></Menu>

      <Search></Search>

      <Content></Content>

      <NewNote></NewNote>
    </Container>
  );
}
