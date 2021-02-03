/* eslint-disable no-console */
/* eslint-disable func-names */
import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_SUCCESS: {
      console.log('Sucesso');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    case types.BOTAO_FAILURE: {
      console.log('Error');
      return state;
    }

    case types.BOTAO_REQUEST: {
      console.log('Request ->');
      return state;
    }

    default: {
      return state;
    }
  }
}
