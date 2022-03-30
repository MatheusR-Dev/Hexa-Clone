import React, { useContext, useState } from "react";
import Header from "../../components/Header";
import Cards from "../../components/Cards";
import Footer from "../../components/Footer";
import Popupe from "../../components/Popup";
import HelpButton from "../../components/HelpButton";
import { VagasData } from "./VagasData";
import { UserContext } from "../../contexts/UserContext";

import {
  Container,
  Content,
  Dive,
  Main,
  Message,
  Title,
} from "./styles";
import { useEffect } from "react";
import { api } from "../../services/api";

interface Props {
  id?: number
  vaga?: string
  description?: string
}

const Vagas = ( ) => {
  window.scrollTo(0, 0);
  const { isOpenModal, setIsOpenModal } = useContext(UserContext)
  const { selectedId, setSelectedId } = useContext(UserContext)
  const [ newVaga, setNewVaga ] = useState<Props[]>([])

  useEffect(() => {
  api.get<Props[]>(`vagas/?id=${selectedId}`).then(response => {
  setNewVaga(response.data)
  })
  }, [selectedId])

  return (
    <Container>
      <Header/>
      {newVaga.map((data) => (
      <Popupe 
      key={data.id}
      Hidden={isOpenModal} 
      TVaga={data.vaga}
      Description={data.description}
      Open={() =>  {
        setIsOpenModal(false)
        console.log(selectedId)}}
      />
      ))}
      

      <Main>
        <Content>
          <Title>ENTRE PARA O TIME!</Title>
          <Message>
            Confira as vagas que estão abertas e nos envie seu perfil.
          </Message>
          <Dive>
          {VagasData.map((vagas) => (
            <Cards 
            src={vagas.Icon} 
            Texto={vagas.Text} 
            onClick={() => {
          setIsOpenModal(!false)
          setSelectedId(vagas.IdVagas)
          console.log(selectedId)
          }}/>
          ))}
          </Dive>
        </Content>
      </Main>
      <HelpButton/>

      <Footer/>
    </Container>
  );
};

export default Vagas;
