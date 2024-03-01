import { Container, Form } from "./styles";
import { Header } from './../../components/Header/index';
import { Input } from './../../components/Input/index';
import { Textarea } from '../../components/Textarea/index';
import { NotesItem } from './../../components/NotesItem/index';
import { Section } from './../../components/Section/index';
import { Button } from './../../components/Button/index';

import { Link } from "react-router-dom";


export function New(){
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>
                    <Input placeholder="Título"/>
                    <Textarea placeholder="Observações"/>
                    <Section title="Links úteis">
                        <NotesItem value="https://youtube.com" />
                        <NotesItem value="https://jeanfeitani.com" />
                        <NotesItem isNew placeholder="Novo link"/>
                    </Section >

                    <Section title="Marcadores">
                        <div className="tags">
                            <NotesItem value="React" />
                            <NotesItem isNew placeholder="Nova Tag"/>
                        </div>
                    </Section>

                    <Button title="Salvar"></Button>

                </Form>
            </main>
        </Container>
    )
}