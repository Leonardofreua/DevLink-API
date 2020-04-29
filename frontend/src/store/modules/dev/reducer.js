import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function dev(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/LOG_IN_SUCCESS': {
        draft.profile = action.payload.dev;
        break;
      }
      case '@auth/GITHUB_OAUTH_SUCCESS': {
        draft.profile = action.payload.dev;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }
      default:
    }
  });
}
