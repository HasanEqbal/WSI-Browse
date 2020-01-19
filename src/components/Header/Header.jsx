import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = ({ auth }) => {
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
      <a href="/api/auth/google">Login</a>
    );

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React SSR
        </Link>
        <ul className="right">
          <li>
            <Link to="/browse">Users</Link>
          </li>
          <li>
            <Link to="/admins">Admins</Link>
          </li>
          <li>{authButton}</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;