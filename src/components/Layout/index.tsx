import React from 'react';
import Main from '../Main';
import Soluctions from '../Soluctions';

import { Container } from './styles';

const Layout: React.FC = () => {
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