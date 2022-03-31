import React from 'react';
import Header from '../../components/Header'
import { Register } from '../../components/RegisterField';



import { Container } from './styles';

const SendProfiles: React.FC = () => {
  return(
    <Container>
      <Header/>
      
      <Register/>
    </Container>
  )
}

export default SendProfiles;