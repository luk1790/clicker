import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.png';
// eslint-disable-next-line no-unused-vars
import styles from './header.css';
import { MyContext } from './../Context';

function Header(props) {
  function clearWallet() {
    props.clearCookies();
  }
  return (
    <MyContext.Consumer>
      {({status, counter}) => {
        console.log(status);
        return (
          <header className="header">
            <div className="logoWrapper">
              <img src={logo} className="logo" alt="" />
              <button className="clearButton" onClick={props.login}>
                login
              </button>
            </div>
            <div className="center">Name of Game</div>
            <div className="walletWrapper">
              {status.page === 'game' && (
                <div>
                  <div className="wallet">Your wallet is {counter}$</div>
                  <div className="speed">Speed: {props.speed}</div>
                  <div className="speed">Multiplier: {props.multiplier}</div>
                </div>
              )}

              {/* <span
          className={props.multiplier ? "sparks" : "sparks hidden"}
        >
          {props.multiplier}
        </span> */}
            </div>
            <div className="clearWrapper">
              {counter > 0 && (
                <button className="clearButton" onClick={clearWallet}>
                  Clear
                </button>
              )}
            </div>
          </header>
        );
      }}
    </MyContext.Consumer>
  );
}

Header.propTypes = {
  multiplier: PropTypes.number,
  speed: PropTypes.number,
  clearCookies: PropTypes.func,
  login: PropTypes.func,
};

export default Header;
