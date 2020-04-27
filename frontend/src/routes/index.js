import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignUp from '~/pages/SignUp';
import LogIn from '~/pages/LogIn';
import ForgotPassword from '~/pages/ForgotPassword';
import ResetPassword from '~/pages/ResetPassword';

import Home from '~/pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignUp} />
      <Route path="/logIn" component={LogIn} />
      <Route
        path="/oauth/github"
        component={() => {
          window.location.href = `https://github.com/login/oauth/authorize?client_id=a04968e35e9d44eeb8f8`;
        }}
      />

      <Route path="/forgotPassword" component={ForgotPassword} />
      <Route path="/resetPassword" component={ResetPassword} />

      <Route path="/home" component={Home} isPrivate />
    </Switch>
  );
}
