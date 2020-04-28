/* * Log in with Sign Up data * */

export function logInRequest(email, password) {
  return {
    type: '@auth/LOG_IN_REQUEST',
    payload: { email, password },
  };
}

export function logInSuccess(token, dev) {
  return {
    type: '@auth/LOG_IN_SUCCESS',
    payload: { token, dev },
  };
}

/* *  Log in with Github account * */

export function githubOAuthRequest(requestToken) {
  return {
    type: '@auth/GITHUB_OAUTH_REQUEST',
    payload: { requestToken },
  };
}

export function githubOAuthSuccess(token, dev) {
  return {
    type: '@auth/GITHUB_OAUTH_SUCCESS',
    payload: { token, dev },
  };
}

export function signUpRequest(name, email, password, techs) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password, techs },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function forgotPasswordRequest(email) {
  return {
    type: '@auth/FORGOT_PASSWORD_REQUEST',
    payload: { email },
  };
}

export function resetPasswordRequest(newPassword, confirmPassword) {
  return {
    type: '@auth/RESET_PASSWORD_REQUEST',
    payload: { newPassword, confirmPassword },
  };
}
