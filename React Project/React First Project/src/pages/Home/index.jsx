import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, NewNote, Content } from "./styles";

import { useState, useEffect } from "react";

import { Header } from "./../../components/Header/index";
import { ButtonText } from "./../../components/ButtonText/index";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);
  
  const navigate = useNavigate()

  function handleTagSelected(tagName) {
    if(tagName === "all"){
      return setTagsSelected([])
    }

    const alredySelected = tagsSelected.includes(tagName);
    if (alredySelected) {
      const filteredTags = tagsSelected.filter((tag) => tag !== tagName);
      setTagsSelected(filteredTags);
    } else {
      setTagsSelected((prevState) => [...prevState, tagName]);
    }
  }
  
  function handleDetails(id){
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }
    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const respone = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
      setNotes(respone.data);
    }

    fetchNotes();
  }, [tagsSelected, search]);

  return (
    <Container>
      <Header></Header>

      <Brand>
        <h1>React Notes</h1>
      </Brand>

      <Menu>
        <li>
          <ButtonText
            $isactive={tagsSelected.length === 0}
            title="Todos"
            onClick={() => handleTagSelected("all")}
          ></ButtonText>
        </li>

        {tags &&
          tags.map((tag) => (
            <li>
              <ButtonText
                $isactive={tagsSelected.includes(tag.name)}
                title={tag.name}
                key={String(tag.id)}
                
                onClick={() => handleTagSelected(tag.name)}
              ></ButtonText>
            </li>
          ))}
      </Menu>

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="My notes">
          {notes.map((note) => (
            <Note 
            key={String(note.id)}
            data={note}
            onClick={() => handleDetails(note.id)}
            />
          ))
          }
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus></FiPlus>Criar Nota
      </NewNote>
    </Container>
  );
}
