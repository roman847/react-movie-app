import React from "react";
import { getLocalStorageValue } from "../../services";
import style from "./style.module.scss";

interface IInputProps {
  action: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
  value: string;
}

const Input = ({ action, placeHolder, value }: IInputProps) => {
  return (
    <div className={style.container__input}>
      <input
        value={value}
        type="text"
        className={style.input__field}
        onChange={(e) => {
          action(e);
        }}
        placeholder={placeHolder}
      />
      <img
        src="images/search.svg"
        alt="search-icon"
        className={style.input__icon}
      />
    </div>
  );
};

export default Input;
