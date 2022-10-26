import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";

const Header = () => {
  return (
    <div className={style.container__header}>
      <div className={style.container__wrapper}>
        <img
          src="images/tv-movie.svg"
          alt="logo"
          className={style.header__logo}
        />
        <ul className={style.header__nav}>
          <Link to={"/"} className={style.nav__item}>
            Home
          </Link>
          <Link to={"/about"} className={style.nav__item}>
            About us
          </Link>
          <Link to={"/form"} className={style.nav__item}>
            Form
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
