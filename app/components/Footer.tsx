import React from "react";
import styles from "../page.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    Created with <span className={styles.heart}>❤️</span> by{" "}
    <a
      className={styles.link}
      href="https://www.linkedin.com/in/bogdanstanescu/"
      target="_blank"
    >
      Stănescu Bogdan
    </a>
  </footer>
);

export default Footer;
