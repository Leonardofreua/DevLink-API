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
      case '@dev/SET_USER_LOCATION_SUCCESS': {
        Object.assign(draft.profile, { location: action.payload.location });
        break;
      }
      case '@dev/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      default:
    }
  });
}
