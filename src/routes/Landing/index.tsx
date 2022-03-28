import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../../pages/Home/Layout';
import Vagas from '../../pages/Vagas'

const Landing: React.FC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/vagas" component={Vagas} />
      </Switch>
    </>
  );
};

export default Landing;
