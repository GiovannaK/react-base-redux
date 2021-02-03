import styled, { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import * as colors from '../config/colors';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    text-decoration: none;
  }

  body{
    font-family: sans-serif;
    background: ${colors.primaryDarkColor};
    color: ${colors.primaryColor};
  }

  html, body, #root{
    height: 100vh;
  }

  button{
    cursor: pointer;
    background: ${colors.primaryColor};
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    border: none;
  }

  a{
    color: ${colors.primaryColor};
  }

  ul{
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: ${colors.successColor}
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: ${colors.errorColor}
  }
`;

export const Container = styled.main`
  max-width: 360px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
