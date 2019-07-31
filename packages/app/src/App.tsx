import React from 'react';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { useSignIn } from './functionalities';

import Chat from './pages/Chat';
import SignIn from './pages/SignIn';

const App: React.FC = () => {
  const { signedIn } = useSignIn();

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/sign-in"
          render={() => (signedIn ? <Redirect to="/" /> : <SignIn />)}
        />
        <Route
          path="/"
          render={() => (!signedIn ? <Redirect to="/sign-in" /> : <Chat />)}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
