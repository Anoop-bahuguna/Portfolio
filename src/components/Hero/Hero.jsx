import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>FULL-STACK DEVELOPER</p>
        <h1 className={styles.title}>
          Building digital experiences that feel simple.
        </h1>
        <p className={styles.description}>
          Hi, I&apos;m Anoop. I build responsive web applications with
          thoughtful interfaces, reliable backend systems, and a focus on the
          people who use them.
        </p>
        <div className={styles.actions}>
          <a className={styles.contactBtn} href="mailto:anup56.ab@gmail.com">
            Let&apos;s work together
          </a>
          <a className={styles.projectsLink} href="#projects">
            View my work <span aria-hidden="true">-&gt;</span>
          </a>
        </div>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/hero.png")}
        alt="Anoop working on a laptop"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
