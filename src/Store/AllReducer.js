import {combineReducers} from 'redux';
import {GlobalReducer} from './GlobalReducer';
import {Register} from '../Featurs/Register/reducer';

export const AllReducer = combineReducers({
  GlobalReducer,
  Register,
});
