import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  locationStatus: false,
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
        draft.locationStatus = false;
        break;
      }
      case '@dev/SET_USER_LOCATION_SUCCESS': {
        Object.assign(draft.profile, { location: action.payload.location });
        draft.locationStatus = action.payload.locationStatus;
        if (draft.locationStatus) {
          Object.assign(draft.profile.location, {
            maxDistance: action.payload.maxDistance,
          });
        }
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
