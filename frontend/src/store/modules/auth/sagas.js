import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import axios from 'axios';
import history from '~/services/history';
import api from '~/services/api';
// import { githubOAuth } from '~/services/githubOAuth';

import { logInSuccess, githubOAuthSuccess, signFailure } from './actions';

export function* logIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, dev } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(logInSuccess(token, dev));

    history.push('/home');
  } catch (err) {
    toast.error('Authentication failed, check your Email and Password');
    yield put(signFailure());
  }
}

export function* githubLogin({ payload }) {
  try {
    const { requestToken } = payload;

    const response = yield call(api.post, 'githubSessions', { requestToken });

    const { token, dev } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(githubOAuthSuccess(token, dev));

    history.push('/home');
  } catch (err) {
    toast.error('Authentication failed, check your data');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password, techs } = payload;

    yield call(api.post, 'devs', {
      name,
      email,
      password,
      techs,
    });

    history.push('/logIn');
  } catch (err) {
    toast.error('Sign up failed, check you data');

    yield put(signFailure());
  }
}

export function* forgotPassowrd({ payload }) {
  try {
    const { email } = payload;

    yield call(api.post, 'forgotPassword', { email });

    history.push('/logIn');
  } catch (err) {
    toast.error('There was a problem, check the typed email');

    yield put(signFailure());
  }
}

export function* resetPassword({ payload }) {
  try {
    const { newPassword, confirmPassword } = payload;

    const passwd_token = new URL(document.location).searchParams.get(
      'passwd_token'
    );

    yield call(api.put, 'resetPassword', {
      newPassword,
      confirmPassword,
      passwd_token,
    });

    history.push('/logIn');
  } catch (err) {
    toast.error('There was a problem, check your data');

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/LOG_IN_REQUEST', logIn),
  takeLatest('@auth/GITHUB_OAUTH_REQUEST', githubLogin),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/FORGOT_PASSWORD_REQUEST', forgotPassowrd),
  takeLatest('@auth/RESET_PASSWORD_REQUEST', resetPassword),
]);
