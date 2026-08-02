import React from 'react'
import style from './Footer.module.css'
import SocialLinksUi from '../common/SocialLinksUi';

const Footer = () => {
  return (
    <div className={style.footer}>
      <hr />
      <div className={style.upperdiv}>
        <div className={style.nameDiv}>
          <h1>
            Dhruv<span>Maurya</span>
          </h1>
          <div>
            <div className={style.professiondiv}>
              <p>AI Engineer</p>
            </div>
            
              <p>Web Developer</p>
            
          </div>
        </div>
        <SocialLinksUi />
      </div>
      <hr />
      <p className={style.para}> &copy; 2026 Portfolio. All rights reserved.</p>
      <hr />
    </div>
  );
}

export default Footer
