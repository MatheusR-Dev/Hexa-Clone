import React from 'react';
import Main from '../Main';
import Soluctions from '../Soluctions';

import { Container } from './styles';

interface MainProps {
  active?: string;
}

const Layout: React.FC<MainProps> = () => {
  return (
    <>
      <Container>

        <Main/>

        <Soluctions/>

      </Container>
    </>
  )
}

export default Layout;