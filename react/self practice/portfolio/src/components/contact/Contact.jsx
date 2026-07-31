import SocialLinksUi from '../common/SocialLinksUi';
import style from './Contact.module.css'
import { RiContactsFill, RiMapPinLine, RiMailLine } from "@remixicon/react";
const Contact = () => {
  return (
    <div className={style.container} id="Contact">
      <h1 className={style.heading}>
        <RiContactsFill size={28} className={style.logo} />
        Contact us
      </h1>
      <div className={style.parentContentDiv}>
        <div className={style.leftDiv}>
          <h3 className={style.subheadings}>Contact Info</h3>

          <div className={style.contactInfoBlocks}>
            <div className={style.location}>
              <RiMapPinLine size={38} color="red" className={style.icon} />

              <div className={style.contactInfoText}>
                <h6>Location</h6>
                <h5>India </h5>
              </div>
            </div>
            <div className={style.location}>
              <RiMailLine size={38} color="red" className={style.icon} />

              <div className={style.contactInfoText}>
                <h6>Email</h6>
                <h5>dhruvmaurya6388@gmail.com</h5>
              </div>
            </div>
          </div>
          <div className={style.contactInfoBlocks}>
            <h3 className={style.subheadings}>Follow me</h3>
            <SocialLinksUi />
          </div>
        </div>

        <div className={style.rightDiv}>
          <h3 className={style.subheadings}>Send a Message</h3>
          <form action="https://formspree.io/f/xeeywbeg" className={style.form} method='POST'>
            <label>Your Name</label>
            <input
              for="name"
              type="text"
              placeholder="John Doe"
              required
              className={style.input}
            ></input>
            <label>Your Email</label>
            <input
              form="email"
              type="email"
              placeholder="john@gmail.com"
              reqired
              className={style.input}
            ></input>
            <label>Subject</label>
            <input
              for="subject"
              type="text"
              placeholder="Project inquiry"
              required
              className={style.input}
            ></input>
            <label>Message</label>
            <textarea
              for="Message"
              type="textarea"
              placeholder="Hello, I would like to talk about"
              required
              className={style.input}
            ></textarea>
            <button type='submit'className={style.sendbtn}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact
