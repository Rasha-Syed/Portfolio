import { motion } from 'framer-motion';
import styles from './ProjectsStyles.module.css';
import x from '../../assets/x.avif';
import img3 from '../../assets/img3.avif';
import img2 from '../../assets/img2.png';
import bookstore from '../../assets/book-store.webp';

const projects = [
  {
    src: img3,
    title: "Online Book Store Application",
    description: "Developed a responsive interface with HTML, CSS, and JavaScript, allowing users to browse and select books. Enabled users to add books to a shopping cart, with actions restricted to logged-in users. Integrated an Oracle database using JDBC to securely process and store transaction histories, ensuring data integrity and security.",
    /*demoLink: "https://viberr-dem",*/
    codeLink: "https://github.com/Rasha-Syed/Book-Store.git",
    technologies: ["HTML", "CSS", "JavaScript", "Oracle DB", "JDBC"]
  },
  {
    src: bookstore,
    title: "E-Book Store Application",
    description: "Developed a Book Store Application using React.js, Node.js, Express, and MongoDB, incorporating role-based access control for both admin and user roles. Implemented features like user registration/login, book browsing, adding books to favorites or cart, and a secure checkout process. Enabled admin-specific functionalities like adding, updating, and deleting books. (Admin credentials)-> Username:Admin Password:Admin123",
    demoLink: "https://67d67a602c666b92623a7538--curious-gumption-5dea5f.netlify.app/",
    codeLink: "https://github.com/Rasha-Syed/E-Book-MERN.git",
    technologies: ["React.js", "Node.js", "Express", "MongoDB"]
  },
  {
    src: x,
    title: "Social Media Application (X Clone)",
    description: "Developed a Twitter-like Social Media Application using the MERN stack with user authentication, followers, and real-time notifications. Built the backend for a Social Media Application with secure user authentication, post creation, likes, and comments. Developed the frontend to enable user interactions, posts, and notifications.",
    /*demoLink: "https://hipsster-demo.com",*/
    codeLink: "https://github.com/Rasha-Syed/X-Clone.git",
    technologies: ["MongoDB", "Express", "React.js", "Node.js"]
  }
];

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles.projectCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <img src={project.src} alt={project.title} className={styles.projectImage} />
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
            <div className={styles.technologies}>
              {project.technologies.map((tech, idx) => (
                <span key={idx} className={styles.techTag}>{tech}</span>
              ))}
            </div>
            <div className={styles.buttons}>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={styles.demoButton}>
                Live Demo
              </a>
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className={styles.codeButton}>
                View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;