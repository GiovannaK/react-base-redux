import React from 'react';
import { useDispatch } from 'react-redux';
import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicabotaoRequest());
  }
  return (
    <Container>
      <Title>
        login
        <small>Olá</small>
      </Title>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
