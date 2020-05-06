import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignUp from '~/pages/SignUp';
import LogIn from '~/pages/LogIn';
import GithubSession from '~/pages/GithubSession';
import ForgotPassword from '~/pages/ForgotPassword';
import ResetPassword from '~/pages/ResetPassword';

import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import DevProfile from '~/pages/DevProfile';

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
      <Route path="/githubSessions" component={GithubSession} />
      <Route path="/forgotPassword" component={ForgotPassword} />
      <Route path="/resetPassword" component={ResetPassword} />

      <Route path="/home" component={Home} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/:id" component={DevProfile} isPrivate />
    </Switch>
  );
}
