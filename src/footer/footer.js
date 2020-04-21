import React from "react";
import "./footer.css";
const { format } = require('rdate') 

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        Created by Raqu { format(new Date(),'YYYY')}
      </footer>
    );
  }
}


export default Footer;
