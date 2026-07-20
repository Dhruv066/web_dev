import style from './Section2.module.css'

const Section2 = () => {
  return (
    <div id="Section2" className={style.container}>
      <h1 className={style.heading}>
        About <span>Me</span>
      </h1>
      <div className={style.parentContain}>
        <div className={style.leftContainer}>
          <p>
            My journey into Computer Science and Artificial Intelligence started
            with a simple curiosity about how things work on the internet. What
            began as tinkering with basic HTML layouts quickly evolved into a
            deep passion for building full-scale, interactive web applications.
          </p>
          <p>
            Currently pursuing my B.Tech in CS & AI, I find myself sitting at
            the fascinating intersection of modern software engineering and
            intelligent systems. I believe that the best products don't just
            function perfectly—they feel right to use.
          </p>
          <p>
            {" "}
            When I'm not writing code, I'm usually exploring new frontend
            frameworks, reading about advancements in AI, or designing user
            interfaces that prioritize both form and function. I thrive in
            environments where I can be both analytical and creative.
          </p>
        </div>
        <div className={style.rightContainer}>
          <div className={style.topParent}>
            <div className={style.topChild}>
              <h3>2+</h3>
              <p>Years Coding</p>
            </div>
            <div className={style.topChild}>
              <h3>15+</h3>
              <p>Projects Built </p>
            </div>
          </div>
          <div className={`${style.bottomDiv} `}>
            <h4>My Aproach</h4>
            <p>
              I focus on writing clean, maintainable code while delivering
              exceptional user experiences. Every pixel matters, and every line
              of code should serve a purpose.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2
