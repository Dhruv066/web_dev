import { useState } from "react";
import styles from "./Navbar.module.css";
import "remixicon/fonts/remixicon.css";
import {
  RiHome4Line,
  RiUser3Line,
  RiToolsFill,
  RiFolderOpenLine,
  RiFilePaper2Line,
  RiMailSendLine,
} from "@remixicon/react";
// import { Lightbulb, Contact, House, Menu, FolderKanban } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <h4 className={styles.logo}>
        Dhruv <span>Maurya</span>
      </h4>

      <button
        className={styles.hamburger}
        onClick={() => setOpen((s) => !s)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={styles.btnContainer}>
        <ul className={`${styles.ul} ${open ? styles.open : ""}`}>
          <li>
            <a href="/" className={styles.btn}>
              <RiHome4Line size={18} /> Home
            </a>
          </li>
          <li>
            <a href="#About" className={styles.btn}>
              <RiUser3Line size={18} /> About
            </a>
          </li>
          <li>
            <a href="#Skills" className={styles.btn}>
              <RiToolsFill size={18} /> Skills
            </a>
          </li>
          <li>
            <a href="#Projects" className={styles.btn}>
              <RiFolderOpenLine size={18} /> Projects
            </a>
          </li>
          <li>
            <a href="#Resume" className={styles.btn}>
              <RiFilePaper2Line size={18} /> Resume
            </a>
          </li>
          <li>
            <a href="#Contact" className={styles.btn}>
              <RiMailSendLine size={18} /> Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
