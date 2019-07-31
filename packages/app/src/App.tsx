import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { useSignIn } from './functionalities';

import Chat from './pages/Chat';
import SignIn from './pages/SignIn';

const App: React.FC = () => {
  return (
    <BrowserRouter
      basename={
        process.env.NODE_ENV === 'production'
          ? 'https://arantespp.github.io/cool-chat/'
          : ''
      }
    >
      <Switch>
        <Route path="/chat" component={Chat} />
        <Route path="/" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
