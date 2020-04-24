import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '~/services/history';
import api from '~/services/api';

import { logInSuccess } from './actions';

export function* logIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const { token, dev } = response.data;

  yield put(logInSuccess(token, dev));

  history.push('/home');
}

export default all([takeLatest('@auth/LOG_IN_REQUEST', logIn)]);
