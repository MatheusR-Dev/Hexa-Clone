import React from "react";
import {
  Box,
  Cup,
  Container,
  Join,
  Message,
  Soluctions,
  CupImage,
  Grid,
  Content,
} from "./styles";
import ImgCup from "../../../assets/cup.svg";
import Header from "../../../components/Header";
import HelpButton from "../../../components/HelpButton";
import { Link } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <Container>
      <Header />

      <Grid>
        <Box>
          <Message>FOR YOUR DISRUPTIVE IDEAS.</Message>
          <Content>
            <Soluctions>Nossas soluções</Soluctions>
            <Link to="/vagas" style={{textDecoration: "none"}}>
              <Join>Entre para o time!</Join>
            </Link>
          </Content>
        </Box>

        <Cup>
          <HelpButton />
          <CupImage src={ImgCup} alt="Cup Image" />
        </Cup>
      </Grid>
    </Container>
  );
};

export default Main;
