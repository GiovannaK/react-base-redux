import styled from 'styled-components';
import { primaryColor, primaryDarkColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  height: 7vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;

  .menu {
    color: #fff;
    cursor: pointer;
  }

  .logo {
    font-size: 1.5rem;
    color: #fff;
  }

  ul a {
    margin-left: 20px;
    padding: 10px;
    font-size: 1.1rem;
    color: #fff;
    transition: ease-in 0.5s;

    svg {
      margin-left: 0.5rem;
    }
  }

  ul a:hover {
    background: ${primaryDarkColor};
    border-radius: 30px;
  }
`;
