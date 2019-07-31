import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Chat from './pages/Chat';
import SignIn from './pages/SignIn';

const App: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact={true} path="/chat" component={Chat} />
        <Route exact={true} path="/" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
