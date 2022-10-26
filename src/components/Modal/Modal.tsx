import React from "react";
import { IModalProps } from "../../constants/interfaces/interfacesProps";
import style from "./modal.module.scss";

const Modal = ({
  isActive,
  handlerCloseModal,
  image,
  title,
  lang,
  rate,
  overview,
  adult,
  originalLang,
  originalTitle,
  releaseDate,
  voteCount,
}: IModalProps) => {
  return (
    <div
      className={
        isActive
          ? style.modal__containerActive
          : style.modal__containerNonActive
      }
    >
      Modal
      <div className={style.modal__content}>
        <button className={style.modal__close} onClick={handlerCloseModal}>
          &times;
        </button>
        <figure className={style.modal__imageBlock}>
          <img src={image} alt="poster" className={style.modal__img} />
          <figcaption className={style.poster__description}>{title}</figcaption>
        </figure>
        <h3>
          Adult <span>{adult ? "yes" : "no"}</span>
        </h3>
        <h3>
          Lang: <span>{lang}</span>
        </h3>
        <h3>
          Original lang: <span>{originalLang}</span>
        </h3>
        <h3>
          Original title: <span>{originalTitle}</span>
        </h3>
        <h3>
          Release date: <span>{releaseDate}</span>
        </h3>
        <h3>
          Rate: <span>{rate}</span>
        </h3>
        <h3>
          Vote count: <span>{voteCount}</span>
        </h3>
        <h3>
          Overview: <span>{overview}</span>
        </h3>
      </div>
    </div>
  );
};
export default Modal;
