// type
import {
  CHANGE_LANGUAGE,
  CHANGE_THEME,
  START_LOADING,
  STOP_LOADING,
  SET_UID,
} from './globalAction';

const initialState = {
  theme: false,
  language: 'indonesia',
  loading: false,
  uid: '',
};

export const GlobalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: !state.theme,
      };

    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };

    case START_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case STOP_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case SET_UID:
      return {
        ...state,
        uid: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
