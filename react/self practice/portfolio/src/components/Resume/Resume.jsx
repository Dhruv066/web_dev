import style from "./Resume.module.css";
import { RiProfileLine } from "@remixicon/react";
const Resume = () => {
  return (
    <div className={style.container}>
      <h1 className={style.heading}>
        <RiProfileLine size={28} />
        Resume
      </h1>
      <h6 className={style.h6}>Education</h6>
      <hr />
      <div className={style.boxcontainer}>
        <div className={style.box}>
          <span>2026 - Present</span>
          <h3>B.Tech in Computer Science & Artificial Intelligence</h3>
          <h5>Dr. A. P. J. Abdul Kalam Technical University, Lucknow</h5>
          <p>
            Focusing on core computer science fundamentals, machine learning
            algorithms, and intelligent systems. Active participant in coding
            clubs and hackathons.
          </p>
        </div>
        <div className={style.box}>
          <span>2024</span>
          <h3>Intermediate</h3>

          <h5>
            Doon International Sen. Sec. School, Palia Kalan <span>(CBSE)</span>
          </h5>
          <p>
            
          </p>
        </div>
        <div className={style.box}>
          <span>2022</span>
          <h3>High School</h3>

          <h5>
            Doon International Sen. Sec. School, Palia Kalan <span>(CBSE)</span>
          </h5>
          <p>
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
