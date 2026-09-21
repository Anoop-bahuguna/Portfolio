import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, status },
}) => {
  return (
    <article className={styles.container}>
      <div className={styles.imageFrame}>
        <img
          className={styles.image}
          src={getImageUrl(imageSrc)}
          alt={`Preview of ${title}`}
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        {status && (
          <span className={styles.notice} role="status">
            {status}
          </span>
        )}
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          View live demo <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
