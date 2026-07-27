import style from './Contact.module.css'
import { RiContactsFill } from "@remixicon/react";
const Contact = () => {
  return (
    <div className={style.container}>
      <h1 className={style.heading}>
        <RiContactsFill size={28} className={style.logo}/>
        Contact us
      </h1>
      <div style>
        <div></div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default Contact
