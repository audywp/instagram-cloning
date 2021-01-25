import {all, put, takeLatest} from 'redux-saga/effects';
import database from '@react-native-firebase/database';

function* Register({payload}) {
  const {phoneNumber} = payload;
  console.log('atas');
  yield database().ref(`/users/${phoneNumber}/data`).set({
    phoneNumber,
  });
  console.log('bawah');
}

export const SagaRegister = function* () {
  yield all([yield takeLatest('REGISTER', Register)]);
};
