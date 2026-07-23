import style from './Resume.module.css';
import { RiProfileLine } from "@remixicon/react";
const Resume = () => {
  return (
    <div className={style.container}>
      <h1 className={style.heading}>
        <RiProfileLine size={28} /> 
         Resume
      </h1>
    </div>
  );
}

export default Resume
