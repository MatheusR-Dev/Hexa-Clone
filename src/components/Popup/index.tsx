import React, { useState } from "react";
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
import { useEffect } from "react";
import { api } from "../../services/api";
import { VagasProps } from "./types";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

interface Props {
  Hidden?: boolean;
  Open?: () => void;
  TVaga?: string;
  Description?: string;
}

const Popupe = ({ Hidden, Open, TVaga, Description }: Props) => {
  const [itemsVaga, setItemsVaga] = useState<VagasProps[]>([]);
  const { selectedId } = useContext(UserContext);

  useEffect(() => {
    api.get<VagasProps[]>(`vagas/?id=${selectedId}`).then((response) => {
      setItemsVaga(response.data);
    });
  }, [selectedId]);


  return (
    <Container Hidden={Hidden}>
      <PopDiv>
        <div>
          <img src={LogoHexa} alt="Logo" />
          <PopBtn onClick={Open}>
            <img src={Close} alt="Close img" />
          </PopBtn>

          <TitleVaga>Vaga Aberta</TitleVaga>
          <Vaga>{TVaga}</Vaga>
          <p>{Description}</p>
        </div>

        {itemsVaga.map((data) => (
          <About key={data.id}>
            <SubT>Atividades</SubT>
            <Require>
              {data.atividades.map((atividades) => 
              <ReqItems>{atividades}</ReqItems>)}
            </Require>
            <SubT>Requisitos</SubT>
            <Require>{data.requisitos.map((requisitos) =>
            <ReqItems>{requisitos}</ReqItems>
            )}
            </Require>

            <SendButton>Enviar meu perfil</SendButton>
          </About>
        ))}
      </PopDiv>
    </Container>
  );
};

export default Popupe;
