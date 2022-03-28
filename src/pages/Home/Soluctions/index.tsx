import React from "react";
import Carousel from "../Soluctions/components/Carousel";
import {
  Container,
  SubTextBox,
  TextBox,
} from "./styles";
import Footer from "../../../components/Footer";

const Soluctions: React.FC = () => {
  return (
    <Container>
      <TextBox>Nossas soluções.</TextBox>
      <SubTextBox>Conheça o que a Hexalab já desenvolveu.</SubTextBox>

      <Carousel />
      <Footer />
    </Container>
  );
};

export default Soluctions;
