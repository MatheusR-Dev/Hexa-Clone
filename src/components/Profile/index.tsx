import React from "react";

import {
  ConfirmButton,
  Container,
  Content,
  ProfileSubText,
  ProfileText,
  BtnDiv,
} from "./styles";

interface Props {
  hidden: boolean;
  onClick: () => void;
}

const Profile = ({ hidden, onClick }: Props) => {
  return (
    <Container hidden={hidden}>
      <Content>
        <ProfileText>Seu perfil foi enviado para Hexalab!</ProfileText>
        <ProfileSubText>
          Em caso de aprovação retornaremos em contato.
        </ProfileSubText>
        <BtnDiv>
          <ConfirmButton onClick={onClick}>OK</ConfirmButton>
        </BtnDiv>
      </Content>
    </Container>
  );
};

export default Profile;
