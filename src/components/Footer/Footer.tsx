import React from "react";
import style from "./style.module.scss";

const Footer = () => {
  return (
    <div>
      <div className={style.container__footer}>
        <div className={style.wrapper__footer}>
          <a
            className={style.footer__text}
            href="https://github.com/roman847"
            target="_blank"
            rel="noreferrer"
          >
            @roman847
          </a>
          <span className={style.footer__text}>2022</span>
          <a
            className={style.footer__logo}
            href="https://rs.school/js-stage0/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="https://rs.school/images/rs_school_js.svg" alt="logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
