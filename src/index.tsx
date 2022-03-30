import React from 'react';
import ReactDOM from 'react-dom';
import { UserProvider } from './contexts/UserContext';
import Routes from './routes/index.routes'

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Routes />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
