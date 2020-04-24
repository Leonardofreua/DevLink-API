import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'devlink',
      storage,
      whitelist: ['auth', 'dev'],
    },
    reducers
  );

  return persistedReducer;
};
