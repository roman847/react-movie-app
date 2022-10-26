import React from "react";
import { IFormCard } from "../../constants/interfaces/interfacesProps";
import CardItem from "../CardItem";
import style from "./style.module.scss";

const CardPerson = ({
  name = "",
  firstName = "",
  email = "",
  country = "",
  gender = "",
  isAdult,
  file,
}: IFormCard) => {
  return (
    <div className={style.container__card}>
      <img
        className={style.card__img}
        src={file ? file : "images/avatar.jpg"}
        alt=""
      />
      <CardItem itemTitle="Name" itemValue={name} />
      <CardItem itemTitle="Firstname" itemValue={firstName} />
      <CardItem itemTitle="Email" itemValue={email} />
      <CardItem itemTitle="Country" itemValue={country} />
      <CardItem itemTitle="Gender" itemValue={gender} />
      <CardItem itemTitle="Adult" itemValue={isAdult ? "yes" : "no"} />
    </div>
  );
};
export default CardPerson;
