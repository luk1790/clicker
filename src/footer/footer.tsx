import React from 'react';
import './footer.css';
// @ts-ignore
import { format } from 'rdate';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        Created by Raqu {format(new Date(), 'YYYY')} v.1
      </footer>
    );
  }
}

export default Footer;
