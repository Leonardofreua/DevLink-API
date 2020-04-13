import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignUp} />
      <Route path="/logIn" component={LogIn} />
    </Switch>
  );
}
