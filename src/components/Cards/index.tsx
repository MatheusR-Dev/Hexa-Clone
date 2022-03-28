import React from 'react';
import { CardBtn, CardIcon, Container, Vaga } from './styles';

interface CardsProps {
  Texto?: string | undefined
  src?: string | undefined
  onClick?: () => void
}

const Cards = ({Texto, src, onClick} : CardsProps) => {
  return (
    <Container>
      <Vaga>{Texto}</Vaga>
      <CardIcon src={src}></CardIcon>
      <CardBtn onClick={onClick}>Ver Vaga</CardBtn>
    </Container>
  )
}

export default Cards;