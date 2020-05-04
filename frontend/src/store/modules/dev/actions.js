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
