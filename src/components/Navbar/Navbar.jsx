import styles from "./Navbar.module.css";
import { useState } from "react";
import { getImageUrl } from "../../utils.js";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Anoop <span className={styles.brandRole}>/ software developer</span>
      </a>
      <div className={styles.menu}>
        <button
          className={styles.menuBtn}
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <img
            src={
              menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }
            alt=""
          />
        </button>
        <ul
          id="primary-navigation"
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
