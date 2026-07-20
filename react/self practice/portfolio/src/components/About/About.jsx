import SocialLinksUi from "../common/socialLinksUi";
import styles from "./About.module.css";
// import pic from "../../assets/professional2.png";



const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.middiv}>
        <div className={styles.leftContainer}>
          <p className={styles.intro}>Hello, I am,</p>
          <br />
          <h1 className={styles.name}>Dhruv Maurya</h1>
          <br />
          <div className={styles.animatedTxt}>
            <span></span>
          </div>
          <p className={styles.aboutPara}>
            Hi, I'm Dhruv Maurya, a Computer Science & Artificial Intelligence
            student passionate about building modern web applications. I enjoy
            turning ideas into responsive, user-friendly websites while
            continuously improving my skills in full-stack development and
            problem-solving.
          </p>

          <div className={styles.btns}>
            <button className={`${styles.viewProjectBtn} ${styles.btn}`}>
              View Projects
            </button>
            <button className={styles.btn}>Contact</button>
          </div>
          <SocialLinksUi />
        </div>
      </div>
    </div>
  );
};

export default About;
