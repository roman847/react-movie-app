import React from "react";
import { ICardItemProps } from "../../constants/interfaces/interfacesProps";
import style from "./style.module.scss";

const CardItem = ({ itemTitle, itemValue }: ICardItemProps) => {
  return (
    <div>
      <span className={style.card__title}>{itemTitle}:</span>
      <span className={style.card__value}> {itemValue}</span>
    </div>
  );
};
export default CardItem;
