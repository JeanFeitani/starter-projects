import { Container, Form } from "./styles";
import { Header } from "./../../components/Header/index";
import { Input } from "./../../components/Input/index";
import { Textarea } from "../../components/Textarea/index";
import { NotesItem } from "./../../components/NotesItem/index";
import { Section } from "./../../components/Section/index";
import { Button } from "./../../components/Button/index";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export function New() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate()


    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink])
        setNewLink("")
    }

    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link => link !== deleted))

    }
    
    function handleAddTag(){
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }
    
    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewNote(){
        const aop = await api.post("/notes", {
            title,
            description,
            tags,
            links
        })
        // console.log(aop)
        // console.log({
        //         title,
        //         description,
        //         tags,
        //         links
        //  })
        alert("sua nota foi criada com sucesso")
        navigate("/")
    }


  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Título" onChange={e => setTitle(e.target.value)}/>
          <Textarea placeholder="Observações" onChange={e => setDescription(e.target.value)} />

          <Section title="Links úteis">
            {
                links.map((link, index) => (
                    <NotesItem
                    key={String(index)}
                    value={link}
                    onClick={() => handleRemoveLink(link) }
                    />
                ))
            }
            <NotesItem
            isNew 
            placeholder="Novo link"
            value={newLink}
            onChange={e => setNewLink(e.target.value)}
            onClick={handleAddLink}
            
            />
            
          </Section>

          <Section title="Marcadores">
            <div className="tags">
                {
                    tags.map((tag, index) => (
                        <NotesItem
                        value={tag}
                        key={index}
                        onClick={() => {handleRemoveTag(tag)}}
                        />
                    ))
                }
              <NotesItem isNew
              placeholder="Nova Tag"
              onChange={e => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button title="Salvar" onClick={handleNewNote}></Button>
        </Form>
      </main>
    </Container>
  );
}
