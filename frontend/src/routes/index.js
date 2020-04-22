import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignUp from '../pages/SignUp';
import LogIn from '../pages/LogIn';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignUp} />
      <Route path="/logIn" component={LogIn} />
      <Route path="/forgotPassowrd" component={ForgotPassword} />
      <Route path="/resetPassword" component={ResetPassword} />
    </Switch>
  );
}
