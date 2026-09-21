import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImg}
          src={getImageUrl("about/about.png")}
          alt="sitting with a laptop"
        />

        <div className={styles.details}>
          <p className={styles.intro}>
            I&apos;m Anoop, a full-stack developer who turns ideas into
            practical, engaging web experiences. I enjoy solving problems across
            the stack, from creating responsive and accessible interfaces to
            building reliable APIs behind them. My goal is to make products that
            look good, work smoothly, and make life easier for the people using
            them.
          </p>
          <div className={styles.highlights}>
            <span>
              <strong>01</strong> Curious by nature
            </span>
            <span>
              <strong>02</strong> Detail-oriented builder
            </span>
            <span>
              <strong>03</strong> Always learning
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
