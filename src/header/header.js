import React from "react";
import PropTypes from "prop-types";
import logo from "./logo.png";
import styles from "./header.css";

class Header extends React.Component {
  constructor() {
    super();
    this.clearWallet = this.clearWallet.bind(this);
  }

  clearWallet() {
    this.props.clearCookies();
  }

  render() {
    return (
      <header className="header">
        <div className="logoWrapper">
          <img src={logo} className="logo" alt="" />
        </div>
        <div className="center">Name of Game</div>
        <div className="walletWrapper">
          Your wallet is {this.props.counter}${" "}
          <span
            className={!!this.props.multiplier ? "sparks" : "sparks hidden"}
          >
            {this.props.multiplier}
          </span>
        </div>
        <div className="clearWrapper">
          {this.props.counter > 0 && (
            <button className="clearButton" onClick={this.clearWallet}>
              Clear
            </button>
          )}
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  counter: PropTypes.number,
  multiplier: PropTypes.number,
  clearCookies: PropTypes.func,
};

export default Header;
