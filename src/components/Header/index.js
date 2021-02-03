/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Nav } from './styled';

export default function Header() {
  const botaoClicado = useSelector((state) => state.example.botaoClicado);
  return (
    <Nav>
      <ul>
        <Link to="/">
          Home
          <FaHome size={24} />
        </Link>
        <Link to="/login">
          Login
          <FaSignInAlt size={24} />
        </Link>
        <Link to="/uygt">
          Sair
          <FaUserAlt size={24} />
        </Link>
        {botaoClicado ? 'clicado' : 'não clicado'}
      </ul>
    </Nav>
  );
}
