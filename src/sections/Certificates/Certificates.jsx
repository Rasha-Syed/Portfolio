import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import styles from "./CertificatesStyles.module.css";
import aws from "../../assets/aws.png";
import nptel from "../../assets/nptel.png";
import cisco from "../../assets/cisco.png";
import infosys from "../../assets/infosys.png";
import capgemini from "../../assets/Capgemini.webp";
import smart from "../../assets/smart.jpeg";


const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    imageSrc: aws,
    issuer: "Amazon Web Services (AWS)",
    link: "https://drive.google.com/file/d/1FjQoXBd_hD4SESxt3fqEn70Xba_3hoSV/view?usp=sharing"
  },
  {
    title: "Introduction to Internet of things",
    imageSrc: nptel,
    issuer: "NPTEL",
    link: "https://drive.google.com/file/d/1QfH19fGnlvzK_p_SF9gT51SEoxGTuJIY/view?usp=drive_link"
  },
  {
    title: "Programming Essentials in Python",
    imageSrc: cisco,
    issuer: "Cisco Networking Academy",
    link: "https://drive.google.com/file/d/1Rp-M9-mX5JhnggovKfvA52dNc1nn6D6k/view?usp=sharing"
  },
  {
    title: "TechA MERN Stack Developer Certification",
    imageSrc: infosys,
    issuer: "Infosys Springboard",
    link: "https://drive.google.com/file/d/1lEHGTZisiRuIDz6wWwdhVYAkEUsfrm2-/view?usp=sharing"
  },
  {
    title: "Cyber Security Certificate",
    imageSrc: capgemini,
    issuer: "Capgemini",
    link: "https://drive.google.com/file/d/1soCs_5pkhdf0reBY7HVhm9n0BRiYjEyl/view?usp=sharing"
  },
  {
    title: "DSA Certificate",
    imageSrc: smart,
    issuer: "Smart Interviews",
    link: "https://smartinterviews.in/certificate/d1aa4feb"
  }
];

function Certificates() {
  return (
    <section id="certifications" className={styles.container}>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="sectionTitle"
      >
        Certifications
      </motion.h1>
      <div className={styles.certificates}>
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className={styles.certCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <FaCertificate className={styles.icon} />
            <img src={cert.imageSrc} alt={cert.title} className={styles.certImage} />
            <h3 className={styles.certTitle}>{cert.title}</h3>
            <p className={styles.certIssuer}>{cert.issuer}</p>
            <a href={cert.link} className={styles.certLink}>
              View Certification
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;