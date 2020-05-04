import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { setUserLocationSuccess, setUserLocationFailure } from './actions';

export function* setUserLocation({ payload }) {
  try {
    const { longitude, latitude } = payload;

    const response = yield call(api.put, '/devs', {
      longitude,
      latitude,
    });

    const { location } = response.data;

    yield put(setUserLocationSuccess(location));
  } catch (err) {
    yield put(setUserLocationFailure());
  }
}

export default all([
  takeLatest('@dev/SET_USER_LOCATION_REQUEST', setUserLocation),
]);
