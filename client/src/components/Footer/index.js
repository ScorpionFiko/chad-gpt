import React from "react";
import "./style.css";
import { FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Footer() {
  return (
    <div className="footer">
      <a
        className="footer-link"
        href="mailto:virtualtrainer247@gmail.com"
        rel="noopener noreferrer" 
        target="_blank"
      >
        <SiGmail size={50} />
      </a>
      <a
        className="footer-link"
        href="https://twitter.com/247trainers"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaTwitter size={50} />
      </a>
    </div>
  );
}

export default Footer;