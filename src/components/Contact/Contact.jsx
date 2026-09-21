import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <p className={styles.eyebrow}>GET IN TOUCH</p>
        <h2>Let&apos;s build something useful.</h2>
        <p className={styles.description}>
          Have an idea, a project, or an opportunity to discuss? I&apos;d love
          to hear from you.
        </p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:anup56.ab@gmail.com">anup56.ab@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="linkedin icon"
          />
          <a
            href="https://www.linkedin.com/in/anoop-b-22326a20a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/Anoop Bahuguna
          </a>
        </li>
      </ul>
      <a className={styles.contactCta} href="mailto:anup56.ab@gmail.com">
        Start a conversation <span aria-hidden="true">-&gt;</span>
      </a>
    </footer>
  );
};

export default Contact;
