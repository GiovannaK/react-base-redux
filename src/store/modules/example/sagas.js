import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';

const requisicao = () =>
  // eslint-disable-next-line no-unused-vars
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });

function* exampleRequest() {
  try {
    yield call(requisicao);
    yield put(actions.clicabotaoSuccess());
  } catch {
    yield put(actions.clicabotaoFailure());
  }
}

export default all([takeLatest(types.BOTAO_REQUEST, exampleRequest)]);
