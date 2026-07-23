import style from "./Project.module.css";
import { RiArrowRightUpLine } from "@remixicon/react";

const Project = () => {
  const projects = [
    {
      name: "The Royal Thali",
      link: "https://dhruv066.github.io/theroyalthali/index.html",
      image:
        "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=1189&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lang: ["Javascript", "CSS", "HTML"],
      about:
        "A polished restaurant landing page focused on food ordering and user experience.",
    },
    {
      name: "Portfolio Website",
      link: "https://dhruv066.github.io/dhruvmaurya/",
      image:
        "https://images.unsplash.com/photo-1545665277-5937489579f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGZvbGlvfGVufDB8fDB8fHww",
      lang: ["Vite", "React"],
      about:
        "A personal portfolio built to showcase projects, skills, and contact information.",
    },
    {
      name: "Task Manager",
      link: "#",
      image:
        "https://images.unsplash.com/photo-1782397150139-bc40471f07c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
      lang: ["JavaScript", "HTML"],
      about:
        "A simple productivity app for organizing daily tasks and keeping progress visible.",
    },
    {
      name: "UI Showcase",
      link: "#",
      image:
        "https://plus.unsplash.com/premium_photo-1676478746561-8feeaa7a307a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
      lang: ["CSS", "React"],
      about:
        "A visually rich interface concept highlighting modern layout and responsive design.",
    },
  ];

  return (
    <div id="Projects" className={style.container}>
      <h1 className={style.heading}>
        <RiArrowRightUpLine size={28} /> Projects
      </h1>

      <div className={style.cardcontainer}>
        {projects.map((elem, idx) => (
          <div className={style.card} key={idx}>
            <a href={elem.link} className={style.imageLink}>
              <img className={style.image} src={elem.image} alt={elem.name} />
            </a>

            <div className={style.cardContent}>
              <h3>{elem.name}</h3>
              <p>{elem.about}</p>

              <div className={style.tags}>
                {elem.lang.map((tag) => (
                  <span className={style.tag} key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <a className={style.link} href={elem.link}>
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
