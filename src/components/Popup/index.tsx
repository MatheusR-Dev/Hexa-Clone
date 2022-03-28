import React from "react";
import {
  About,
  Container,
  PopBtn,
  PopDiv,
  ReqItems,
  Require,
  SendButton,
  SubT,
  TitleVaga,
  Vaga,
} from "./styles";
import Close from "../../assets/close.svg";
import LogoHexa from "../../assets/logo.svg";

interface Props {
  Hidden?: boolean;
  Open?: () => void;
}

const Popupe = ({ Hidden, Open }: Props) => {
  return (
    <Container esconder={Hidden}>
      <PopDiv>
        <div>
          <img src={LogoHexa} alt="Logo" />
          <PopBtn onClick={Open}>
            <img src={Close} alt="Close img" />
          </PopBtn>

          <TitleVaga>Vaga Aberta</TitleVaga>
          <Vaga>Desenvolvedor Back-End Júnior</Vaga>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text.
          </p>
        </div>
        <About>
          <SubT>Lorem Ipsum</SubT>
          <Require>
            <ReqItems>Mapear processos, riscos e controles de processos de negócios e sistemas;</ReqItems>
            <ReqItems>Apoiar as áreas de negócios com a construção e manutenção de documentos normativos;</ReqItems>
            <ReqItems>Avaliar o ambiente de controles em sintonia com as iniciativas de prevenção a fraudes;</ReqItems>
            <ReqItems>Apoiar na execução de risk assessment corporativo;</ReqItems>
            <ReqItems>Formalizar relatórios para os projetos desenvolvidos.</ReqItems>
          </Require>

          <SubT>Requisitos</SubT>
          <Require>
            <ReqItems>React Native;</ReqItems>
            <ReqItems>Node.JS;</ReqItems>
            <ReqItems>FireBase;</ReqItems>
            <ReqItems>Inglês básico.</ReqItems>
          </Require>
          <SendButton>Enviar meu perfil</SendButton>
        </About>
      </PopDiv>
    </Container>
  );
};

export default Popupe;
