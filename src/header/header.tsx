import React from 'react';
import logo from './logo.png';
// @ts-ignore
import './header.css';

class Header extends React.Component<any, any> {
  render() {
    return (
      <header className="header">
        <div className="logoWrapper">
          <img src={logo} className="logo" alt="" />
        </div>
        <div className="center">Boring game</div>
        <div className="walletWrapper">
          <div className="wallet">Your wallet is {this.props.counter}$</div>
          <div className="speed">Speed: {this.props.speed}</div>
          <div className="speed">Multiplier: {this.props.multiplier}</div>
          {/* <span
                className={this.props.multiplier ? "sparks" : "sparks hidden"}
              >
                {this.props.multiplier}
              </span> */}
        </div>
        <div className="clearWrapper">
          {this.props.counter > 0 && (
            <button className="clearButton" onClick={this.props.clearCookies}>
              Clear
            </button>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
