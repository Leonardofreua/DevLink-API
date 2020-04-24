import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function dev(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/LOG_IN_SUCCESS':
      return produce(state, (draft) => {
        draft.profile = action.payload.dev;
      });
    default:
      return state;
  }
}
