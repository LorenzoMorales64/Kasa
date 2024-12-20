import React from "react";
import logo from "../../assets/images/LOGO.png"; // Ajustez le chemin selon l'emplacement de votre logo
import "./Footer.scss"

const Footer: React.FC = () => {
  return (
    <footer>
      <img src={logo} alt="logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;