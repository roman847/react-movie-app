import React from "react";
import { identifyColorRate } from "../../services";
import { ICardProps } from "../../constants/interfaces/interfacesProps";
import Modal from "../Modal";
import style from "./style.module.scss";

const Card = ({
  image,
  title,
  overview,
  rate,
  handlerOpenModal,
}: ICardProps) => {
  return (
    <div className={style.container__card} onClick={handlerOpenModal}>
      <img src={image} alt="poster" className={style.card__poster} />
      <h3>{title}</h3>
      <div className={style.card__rate}>
        <img
          src="images/rating-svgrepo-com.svg"
          alt="rate-icon"
          className={style.card__rateImg}
        />
        <span style={{ color: identifyColorRate(rate as number) }}>{rate}</span>
      </div>
      <p className={style.card__overview}>Overview: {overview}</p>
    </div>
  );
};

export default Card;
