import React from 'react';
import { CardBtn, CardIcon, Container, CardText } from './styles';

interface CardsProps {
  Text?: string | undefined
  src?: string | undefined
  onClick?: () => void
}

const Cards = ({Text, src, onClick} : CardsProps) => {
  return (
    <Container>
      <CardText>{Text}</CardText>
      <CardIcon src={src}></CardIcon>
      <CardBtn onClick={onClick}>Ver Vaga</CardBtn>
    </Container>
  )
}

export default Cards;