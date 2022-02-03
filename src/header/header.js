import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.png';
// eslint-disable-next-line no-unused-vars
import styles from './header.css';

function Header(props) {
  function clearWallet() {
    props.clearCookies();
  }
  return (
    <header className="header">
      <div className="logoWrapper">
        <img src={logo} className="logo" alt="" />
      </div>
      <div className="center">Boring game</div>
      <div className="walletWrapper">
        <div className="wallet">Your wallet is {props.counter}$</div>
        <div className="speed">Speed: {props.speed}</div>
        <div className="speed">Multiplier: {props.multiplier}</div>
        {/* <span
          className={props.multiplier ? "sparks" : "sparks hidden"}
        >
          {props.multiplier}
        </span> */}
      </div>
      <div className="clearWrapper">
        {props.counter > 0 && (
          <button className="clearButton" onClick={clearWallet}>
            Clear
          </button>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  counter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  multiplier: PropTypes.number,
  speed: PropTypes.number,
  clearCookies: PropTypes.func,
};

export default Header;
