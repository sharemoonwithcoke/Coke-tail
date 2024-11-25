import PropTypes from 'prop-types';
import GlobalNav from './GlobalNav';
import './Header.css';


function Header({ setPage }) {
  return (
    <header className="header">
      <a href="homepage" className="header__logo-link">
        <img
          src="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Dog logo"
          className="header__logo"
        />
      </a>
      <h1 className="header__title">
      Coke vet in your neighborhood
      </h1>
      <GlobalNav className="header__nav" setPage={setPage} />
    </header>
  );
}

Header.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Header;

