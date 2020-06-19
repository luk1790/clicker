import React from "react";
import "./footer.css";
import { format } from "rdate";

function Footer() {
  return (
    <footer className="footer">
      Created by Raqu {format(new Date(), "YYYY")}
    </footer>
  );
}

export default Footer;
