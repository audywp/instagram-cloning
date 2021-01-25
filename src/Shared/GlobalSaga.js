import {all, put, takeLatest} from 'redux-saga/effects';
// type
import {LOGIN_ANONYMOUS, SET_UID} from '../Store/globalAction';
// action
import {setUidToReducer} from '../Store/globalAction';
import auth from '@react-native-firebase/auth';

const anonymousLogin = function* () {
  try {
    console.log('Atas');
    const res = yield auth().signInAnonymously();

    yield put(setUidToReducer(res.user.uid));
    console.log(res.user.uid);

    console.log('bawah');
  } catch (error) {
    console.log(error);
  }
};

export const GlobalSaga = function* () {
  yield all([yield takeLatest(LOGIN_ANONYMOUS, anonymousLogin)]);
};
