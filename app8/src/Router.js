import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';

export default props => (
  <Router>
    <Scene key="root">
      <Scene key="login" component={FormLogin} title="Login"/>
      <Scene key="register" component={FormCadastro} title="Register"/>
      <Scene key="home" component={FormCadastro}/>
    </Scene>
  </Router>
);