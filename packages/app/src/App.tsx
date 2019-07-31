import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { useSignIn } from './functionalities';

import Chat from './pages/Chat';
import SignIn from './pages/SignIn';

const App: React.FC = () => {
  console.log(process.env.NODE_ENV);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/chat" component={Chat} />
        <Route path="/sign-in" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
