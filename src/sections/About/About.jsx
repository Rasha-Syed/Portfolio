import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';
import styles from './AboutStyles.module.css';

function About() {
  return (
    <section id="about" className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.content}
      >
        <FaUser className={styles.icon} />
        <h1 className="sectionTitle">About Me</h1>
        <p>
        I'm a Computer Science student passionate about web development, machine learning and data Science. 
        I have hands-on experience with HTML, CSS, and JavaScript and I’ve built full-stack projects using the MERN stack (MongoDB, Express.js, React, Node.js). 
        I’m excited to gain more experience, learn from real-world challenges, and grow as a developer.
        </p>
      </motion.div>
    </section>
  );
}

export default About;
