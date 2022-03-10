import React from 'react';
import { About, Box, Cup, Container, Header, Icon, Join, Message, Redirect, Soluctions, CupImage, Help, Grid } from './styles';
import Logo from '../../assets/logo.svg'
import ImgCup from '../../assets/cup.svg'

const Main: React.FC = () => {
  return(
    <Container>
      
      <Header>
        <Icon src={Logo} alt='Logo'/>

        <About>
          <Redirect>Soluções</Redirect>
          <Redirect>Sobre Nós</Redirect>
          <Redirect>Contato</Redirect>
          <Redirect>Vagas</Redirect>
        </About>
      </Header>

      <Grid>
        <Box>
          <Message>FOR YOUR DISRUPTIVE IDEAS.</Message>
          <Soluctions>Nossas soluções</Soluctions>
          <Join>Entre para o time!</Join>
          
        </Box>

        <Cup>
          <Help>Precisa de Ajuda?</Help>
          <CupImage src={ImgCup} alt='Cup Image'/>
        </Cup>
      </Grid>

    </Container>
  )
}

export default Main;