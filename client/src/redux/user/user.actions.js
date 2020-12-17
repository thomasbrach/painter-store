import {
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from "./user.types";

export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (credentials) => ({
  type: EMAIL_SIGN_IN_START,
  payload: credentials,
});

export const SignInSuccess = (user) => ({
  type: SIGN_IN_SUCCESS,
  payload: user,
});

export const SignInFailure = (error) => ({
  type: SIGN_IN_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION,
});

export const SignOutStart = () => ({
  type: SIGN_OUT_START,
});

export const SignOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
});

export const SignOutFailure = (error) => ({
  type: SIGN_OUT_FAILURE,
  payload: error,
});

export const signUpStart = (form) => ({
  type: SIGN_UP_START,
  payload: form,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: SIGN_UP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: SIGN_UP_FAILURE,
  payload: error,
});
