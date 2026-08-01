import {
  RiGithubLine,
  RiLinkedinFill,
  RiTwitterXLine,
  RiMailLine,
  RiDiscordLine,
  RiWhatsappLine,
} from "@remixicon/react";
import style from './SocialLinksUi.module.css' 

const SocialLinksUi = () => {

  return (
    <div className={style.linkscontainer}>
      <a href="https://github.com/Dhruv066">
        <RiGithubLine size={30} className={style.sociobtn} />
      </a>
      <a
        href="https://www.linkedin.com/in/dhruv-maurya9125/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiLinkedinFill size={30} className={style.sociobtn} />
      </a>
      <a
        href="https://x.com/dhruvmaurya066"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiTwitterXLine size={30} className={style.sociobtn} />
      </a>
      <a href="mailto:dhruvmaurya6388@gmail.com">
        <RiMailLine size={30} className={style.sociobtn} />
      </a>
      <a
        href="https://discordapp.com/users/dhruvmaurya0588"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiDiscordLine size={30} className={style.sociobtn} />
      </a>
      <a
        href="https://wa.me/9125833056"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiWhatsappLine size={30} className={style.sociobtn} />
      </a>
    </div>
  );
};

export default SocialLinksUi;
