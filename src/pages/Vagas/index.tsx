import React, { useState } from "react";
import Header from "../../components/Header";
import Cards from "../../components/Cards"
import Footer from "../../components/Footer"
import { VagasData } from "./VagasData";

import {
  Container,
  Content,
  Dive,
  Main,
  Message,
  Title,
} from "./styles";
import Popupe from "../../components/Popup";
import HelpButton from "../../components/HelpButton";

const Vagas: React.FC = () => {
  window.scrollTo(0, 0);
  const [ openVagas, setOpenVagas ] = useState(false);

  return (
    <Container>
      <Header />
      <Popupe Hidden={openVagas} Open={() => setOpenVagas(false)}/>
      <Main>
        <Content>
          <Title>ENTRE PARA O TIME!</Title>
          <Message>
            Confira as vagas que estão abertas e nos envie seu perfil.
          </Message>
          <Dive>
          {VagasData.map((vagas) => (
            <Cards src={vagas.Icon} Texto={vagas.Text} onClick={() => setOpenVagas(!false)}/>
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
