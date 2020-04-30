import React from "react";
import PropTypes from "prop-types";
import logo from "./logo.png";
import styles from "./header.css";

function Header(props){
  function clearWallet() {
    props.clearCookies();
  }
  return (
    <header className="header">
      <div className="logoWrapper">
        <img src={logo} className="logo" alt="" />
      </div>
      <div className="center">Name of Game</div>
      <div className="walletWrapper">
        Your wallet is {props.counter}${" "}
        <span
          className={props.multiplier ? "sparks" : "sparks hidden"}
        >
          {props.multiplier}
        </span>
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
  counter: PropTypes.number,
  multiplier: PropTypes.number,
  clearCookies: PropTypes.func,
};

export default Header;
