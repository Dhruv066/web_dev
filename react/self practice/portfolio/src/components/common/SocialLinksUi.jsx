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
    <div className={style.container}>
      <a href="/">
        <RiGithubLine size={30} className={style.sociobtn} />
      </a>
      <a href="/">
        <RiLinkedinFill size={30} className={style.sociobtn} />
      </a>
      <a href="/">
        <RiTwitterXLine size={30} className={style.sociobtn} />
      </a>
      <a href="/">
        <RiMailLine size={30} className={style.sociobtn} />
      </a>
      <a href="/">
        <RiDiscordLine size={30} className={style.sociobtn} />
      </a>
      <a href="/">
        <RiWhatsappLine size={30} className={style.sociobtn} />
      </a>
    </div>
  );
};

export default SocialLinksUi;
