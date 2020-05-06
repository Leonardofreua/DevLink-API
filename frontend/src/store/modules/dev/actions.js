export function setUserLocationRequest(longitude, latitude) {
  return {
    type: '@dev/SET_USER_LOCATION_REQUEST',
    payload: { longitude, latitude },
  };
}

export function setUserLocationSuccess(location) {
  return {
    type: '@dev/SET_USER_LOCATION_SUCCESS',
    payload: { location },
  };
}

export function setUserLocationFailure() {
  return {
    type: '@dev/SET_USER_LOCATION_FAILURE',
  };
}

export function updateProfileRequest(data) {
  return {
    type: '@dev/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@dev/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: '@dev/UPDATE_PROFILE_FAILURE',
  };
}
