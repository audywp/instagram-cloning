import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
// middleware
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// reducer
import {AllReducer} from './AllReducer';
import {MainSaga} from './MainSaga';

const persistConfig = {
  key: 'igClone',
  storage: AsyncStorage,
};

const PersistedReducer = persistReducer(persistConfig, AllReducer);

const SagaMiddleware = createSagaMiddleware();

// create Store
export const Store = createStore(
  PersistedReducer,
  applyMiddleware(SagaMiddleware, logger),
);

export const Persistor = persistStore(Store);
// run saga middleware
SagaMiddleware.run(MainSaga);
