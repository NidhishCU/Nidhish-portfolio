import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
    <footer className={styles.footer}>
        <div>Copyright © {new Date().getFullYear()} All rights reserved</div>
        <div>Made with ❤️ by <a className={styles.nameLink} href="https://www.linkedin.com/in/nidhish-gupta-5a1575223/" target="_blank" rel="noopener noreferrer">
            Nidhish Kumar Gupta
        </a></div>
    </footer>
);

export default Footer;




