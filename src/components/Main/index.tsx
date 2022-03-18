import React from "react";
import {
  About,
  Box,
  Cup,
  Container,
  Header,
  Icon,
  Join,
  Message,
  Redirect,
  Soluctions,
  CupImage,
  Help,
  Grid,
  Hamburguer,
  Tesen,
  Items,
  Links,
  Animations,
  Content,
} from "./styles";
import Logo from "../../assets/logo.svg";
import ImgCup from "../../assets/cup.svg";
import { useState } from "react";

interface MainProps {
  active?: boolean;
  mostrar?: boolean;
}

const Main: React.FC<MainProps> = () => {
  const [playAnimation, setPlayAnimation] = useState(false);
  const [hiddenList, setHiddenList] = useState(true);
  const [anime, setAnime] = useState(false);
  const [mudar, setMudar] = useState(false);

  function handleAnimation() {
    if (playAnimation === false && hiddenList === true) {
      setPlayAnimation(true);
      setHiddenList(false);
      setAnime(true);
      setMudar(true);
    } else {
      setPlayAnimation(false);
      setHiddenList(true);
      setAnime(false);
      setMudar(false);
    }
  }

  return (
    <Container>
      <Hamburguer>
        <Tesen active={playAnimation} onClick={handleAnimation}>
          <Animations anime={anime} mudar={mudar}></Animations>
        </Tesen>
        <Items mostrar={hiddenList}>
          <Links>Home</Links>
          <Links>Sobre Nós</Links>
          <Links>Contato</Links>
          <Links>Vagas</Links>
        </Items>
      </Hamburguer>

      <Header>
        <Icon src={Logo} alt="Logo" />

        <About>
          <Redirect>Soluções</Redirect>
          <Redirect>Sobre Nós</Redirect>
          <Redirect>Contato </Redirect>
          <Redirect>Vagas</Redirect>
        </About>
      </Header>

      <Grid>
        <Box>
          <Message>FOR YOUR DISRUPTIVE IDEAS.</Message>
          <Content>
            <Soluctions>Nossas soluções</Soluctions>
            <Join>Entre para o time!</Join>
          </Content>
        </Box>

        <Cup>
          <Help>Precisa de Ajuda?</Help>
          <CupImage src={ImgCup} alt="Cup Image" />
        </Cup>
      </Grid>
    </Container>
  );
};

export default Main;
