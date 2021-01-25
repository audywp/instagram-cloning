export const CHANGE_THEME = 'CHANGE_THEME';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';
export const LOGIN_ANONYMOUS = 'LOGIN_ANONYMOUS';
export const SET_UID = 'SET_UID';

export const ChangeTheme = () => {
  return {
    type: CHANGE_THEME,
  };
};

export const ChangeLanguage = (payload) => {
  return {
    type: ChangeLanguage,
    payload,
  };
};

export const setLoading = (payload) => {
  return {
    type: payload ? START_LOADING : STOP_LOADING,
    payload,
  };
};

export const LoginAsAnonymous = () => {
  return {
    type: LOGIN_ANONYMOUS,
  };
};

export const setUidToReducer = (payload) => {
  return {
    type: SET_UID,
    payload,
  };
};
