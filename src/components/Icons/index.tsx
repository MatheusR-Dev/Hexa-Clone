import React from 'react';
import { Container, ScreenIcon } from './styles';

interface Props {
  hidden?: string | undefined | any
  src?: string | undefined
}

const Icons = ({hidden, src} : Props) => {
  return(
    <Container>
        <ScreenIcon src={src} hidden={hidden}/>
    </Container>
  )
}

export default Icons;