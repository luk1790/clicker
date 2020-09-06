import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import styles from './login.css';

import { MyContext } from './../Context';

class Login extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <MyContext.Consumer>
        {({status}) => { return (<div className="login">dupa {status.page}</div>);}}
      </MyContext.Consumer>
    );
  }
}
Login.propTypes = {
  counter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  elements: PropTypes.array,
  updateState: PropTypes.func,
};

export default Login;
