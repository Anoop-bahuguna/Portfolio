import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <section id="skills" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <p className={styles.intro}>
        The tools I use and the work I&apos;ve done to turn ideas into useful,
        polished web experiences.
      </p>
      <div className={styles.content}>
        <div className={styles.skillsSection}>
          <h3 className={styles.sectionLabel}>Toolkit</h3>
          <div className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImgContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <ul className={styles.history} id="experience">
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <span className={styles.timelineDot} aria-hidden="true" />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role} ${historyItem.organisation}`}</h3>
                  <p
                    className={styles.date}
                  >{`${historyItem.startDate} ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
