import * as types from '../types';

export function clicabotaoRequest() {
  return {
    type: types.BOTAO_REQUEST,
  };
}

export function clicabotaoSuccess() {
  return {
    type: types.BOTAO_SUCCESS,
  };
}

export function clicabotaoFailure() {
  return {
    type: types.BOTAO_FAILURE,
  };
}
