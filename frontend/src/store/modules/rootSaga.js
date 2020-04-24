import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import dev from './dev/sagas';

export default function* rootSaga() {
  return yield all([auth, dev]);
}
