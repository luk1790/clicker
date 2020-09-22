import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import styles from './login.css';
import axios from 'axios';

import { MyContext } from './../Context';

class Login extends React.Component {
  constructor() {
    super();
    this.sendData = this.sendData.bind(this);
    this.state = { login: '', password: '' };
  }

  handleLoginChange = (e) => {
    this.setState({ login: e.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  // email: 'test10@sd.pl', pass: 'dsd1'
  sendData = () => {
    let {changePage, cookies} = this.props; 
    axios.post('http://localhost:8017/login', {email: this.state.login, pass: this.state.password}).then(function (response) {
      console.log(response);
      changePage('game');
      cookies.set('accessToken', response.data.accessToken, { path: '/' });
      cookies.set('refreshToken', response.data.refreshToken, { path: '/' });
    });
    console.log(this.state);
  };

  renderlogin() {
    return (
      <div>
        <div>
          <div>Login</div>
          <input
            value={this.state.login}
            onChange={this.handleLoginChange}
          ></input>
        </div>
        <div>
          <div>Password</div>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          ></input>
        </div>
        <button onClick={this.sendData}>send</button>
      </div>
    );
  }

  render() {
    return (
      <MyContext.Consumer>
        {({ status }) => {
          return (
            <div className="login">
              statup Page:  {status.page} {this.renderlogin()}
            </div>
          );
        }}
      </MyContext.Consumer>
    );
  }
}
Login.propTypes = {
  counter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  elements: PropTypes.array,
  updateState: PropTypes.func,
  changePage: PropTypes.func,
  cookies: PropTypes.func,
};

export default Login;
