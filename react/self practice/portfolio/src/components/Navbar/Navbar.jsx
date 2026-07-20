// import { useState } from "react";
import styles from "./Navbar.module.css";
import "remixicon/fonts/remixicon.css";
// import { Lightbulb, Contact, House, Menu, FolderKanban } from "lucide-react";

const Navbar = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
        <h4 className={styles.logo}>Dhruv <span>Maurya</span></h4>

        <div className={styles.btnContainer}>
          <ul className={styles.ul}>
            <li><a href="/" className={styles.btn}>Home</a></li>
            <li><a href="#Section2" className={styles.btn}>About</a></li>
            <li><a href="/" className={styles.btn}>Skills</a></li>
            <li><a href="/" className={styles.btn}>Projects</a></li>
            <li><a href="/" className={styles.btn}>Resume</a></li>
            <li><a href="/" className={styles.btn}>Contact</a></li>
          </ul>
        </div>
    </div>
  );
};

export default Navbar;
