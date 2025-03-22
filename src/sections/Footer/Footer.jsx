import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.content}
      >
        <p>&copy; 2024 Syed Rasha. All rights reserved.</p>
        <div className={styles.socialLinks}>
          <a href="https://github.com/Rasha-Syed" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/rasha-syed-8a2929316/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} />
          </a>
          <a href="mailto:rashanishath@gmail.com">
            <FaEnvelope className={styles.icon} />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
