import {all} from 'redux-saga/effects';
import {SagaRegister} from '../Featurs/Register/saga';
import {GlobalSaga} from '../Shared/GlobalSaga';

export const MainSaga = function* () {
  yield all([SagaRegister(), GlobalSaga()]);
};
