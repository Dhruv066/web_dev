import style from "./Skill.module.css";
import {
  RiHtml5Line,
  RiCss3Fill,
  RiJavascriptLine,
  RiReactjsFill,
  RiTailwindCssFill,
  RiBootstrapLine,
  RiNodejsFill,
  RiDatabase2Fill,
  RiGitBranchLine,
  RiGithubFill,
  RiCodeBoxLine,
  RiServerLine,
  RiTerminalBoxLine,
} from "@remixicon/react";

const Skill = () => {
  const frontendSkills = [
    { name: "HTML", icon: RiHtml5Line },
    { name: "CSS", icon: RiCss3Fill },
    { name: "Javascript", icon: RiJavascriptLine },
    { name: "React", icon: RiReactjsFill },
    { name: "TailwindCSS", icon: RiTailwindCssFill },
    { name: "Bootstrap", icon: RiBootstrapLine },
  ];
  const backendSkills = [
    { name: "Node.Js", icon: RiNodejsFill },
    { name: "Express", icon: RiServerLine },
    { name: "Python", icon: RiTerminalBoxLine },
  ];
  const databaseSkills = [
    { name: "MySQL", icon: RiDatabase2Fill },
    { name: "MongoDB", icon: RiDatabase2Fill },
  ];
  const toolSkills = [
    { name: "Git", icon: RiGitBranchLine },
    { name: "GitHub", icon: RiGithubFill },
    { name: "VS Code", icon: RiCodeBoxLine },
    { name: "IntelliJ IDEA", icon: RiCodeBoxLine },
    { name: "PyCharm", icon: RiCodeBoxLine },
  ];

  return (
    <div id="Skills" className={style.container}>
      <h1 className={style.heading}>Skills</h1>
      <p className={style.para}>
        A comprehensive overview of the technologies and tools I use to bring
        ideas to life.
      </p>
      <h6>Frontend</h6>
      <hr />

      <div className={style.parentBlock}>
        {frontendSkills.map(function (skill, idx) {
          const IconComponent = skill.icon;
          return (
            <div className={style.blocks} key={idx}>
              <IconComponent size={50} color="red" />
              {skill.name}
            </div>
          );
        })}
      </div>

      <h6>Backend</h6>
      <hr />

      <div className={style.parentBlock}>
        {backendSkills.map(function (skill, idx) {
          const IconComponent = skill.icon;
          return (
            <div className={style.blocks} key={idx}>
              <IconComponent size={44} color="red" />
              {skill.name}
            </div>
          );
        })}
      </div>

      <h6>Database</h6>
      <hr />

      <div className={style.parentBlock}>
        {databaseSkills.map(function (skill, idx) {
          const IconComponent = skill.icon;
          return (
            <div className={style.blocks} key={idx}>
              <IconComponent size={44} color="red" />
              {skill.name}
            </div>
          );
        })}
      </div>

      <h6>Tool</h6>
      <hr />

      <div className={style.parentBlock}>
        {toolSkills.map(function (skill, idx) {
          const IconComponent = skill.icon;
          return (
            <div className={style.blocks} key={idx}>
              <IconComponent size={44} color="red" />
              {skill.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
