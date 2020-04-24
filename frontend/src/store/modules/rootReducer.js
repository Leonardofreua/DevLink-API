import { combineReducers } from 'redux';

import auth from './auth/reducer';
import dev from './dev/reducer';

export default combineReducers({
  auth,
  dev,
});
