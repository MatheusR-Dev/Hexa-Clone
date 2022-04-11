import React from 'react';
import HelpButton from '../../../components/HelpButton';
import Main from '../Main';
import Soluctions from '../Soluctions';

import { Container } from './styles';

interface MainProps {
  active?: string;
}

const Layout: React.FC<MainProps> = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Container>

        <Main/>

        <Soluctions/>

        <HelpButton/>

      </Container>
    </>
  )
}

export default Layout;