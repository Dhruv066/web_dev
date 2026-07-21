// import SocialLinksUi from "../common/socialLinksUi";
import styles from "./Home.module.css";
import {
  RiArrowRightLine,
  RiMailSendLine,
  RiCodeBoxLine,
} from "@remixicon/react";
// import pic from "../../assets/professional2.png";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.middiv}>
        <div className={styles.leftContainer}>
          <p className={styles.intro}>
            <RiCodeBoxLine size={20} /> Hello, I am,
          </p>
          <br />
          <h1 className={styles.name}>Dhruv Maurya</h1>
          <br />
          {/* <div className={styles.animatedTxt}>
            <span></span>
          </div> */}
          <p className={styles.HomePara}>
            Hi, I'm Dhruv Maurya, a Computer Science & Artificial Intelligence
            student passionate Home building modern web applications. I enjoy
            turning ideas into responsive, user-friendly websites while
            continuously improving my skills in full-stack development and
            problem-solving.
          </p>

          <div className={styles.btns}>
            <button className={`${styles.viewProjectBtn} ${styles.btn}`}>
              <RiArrowRightLine size={18} /> View Projects
            </button>
            <button className={styles.btn}>
              <RiMailSendLine size={18} /> Contact
            </button>
          </div>
          {/* <SocialLinksUi /> */}
        </div>
        {/* <div className={styles.rightContainer}><img src={pic}></img></div> */}
      </div>
    </div>
  );
};

export default Home;
