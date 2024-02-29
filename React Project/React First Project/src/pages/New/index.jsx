import { Container, Form } from "./styles";
import { Header } from './../../components/Header/index';
import { Input } from './../../components/Input/index';
import { Textarea } from '../../components/Textarea/index';
import { NotesItem } from './../../components/NotesItem/index';
import { Section } from './../../components/Section/index';

export function New(){
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <a href="#">Voltar</a>
                    </header>
                    <Input placeholder="Título"/>
                    <Textarea placeholder="Observações"/>
                    <Section title="Links úteis">
                        <NotesItem value="https://youtube.com" />
                        <NotesItem value="https://jeanfeitani.com" />
                        <NotesItem isNew placeholder="Novo link"/>
                    </Section >
                </Form>
            </main>
        </Container>
    )
}