import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Header from "../../../components/Header";
import CardPerson from "../../../components/CardPerson/CardPerson";
import {
  IFormCard,
  ICardPerson,
  Inputs,
} from "../../../constants/interfaces/interfacesProps";

import style from "./style.module.scss";

const Form = () => {
  const [isMale, setMale] = useState(true);
  const [file, setFile] = useState("");
  const [cards, setCards] = useState([] as ICardPerson[]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const card = { ...data, file };
    setCards([...cards, card]);
    reset();
  };

  const genderHandler = () => {
    setMale(!isMale);
  };

  const fileReader = new FileReader();
  fileReader.onload = () => {
    setFile(fileReader.result as string);
  };

  const handlerFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];

    fileReader.readAsDataURL(file as File);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className={style.container__form}>
          <div className={style.wrapper__form}>
            <form
              className={style.formMain}
              action="#"
              onSubmit={handleSubmit(onSubmit)}
            >
              {errors.name?.type === "required" && (
                <span className={style.errorText}>
                  {"This field is required"}
                </span>
              )}
              {errors.name?.type === "minLength" && (
                <span className={style.errorText}>{"Min length is 2 "}</span>
              )}
              {errors.name?.type === "maxLength" && (
                <span className={style.errorText}>{"Max length is 20 "}</span>
              )}

              <input
                type="text"
                {...register("name", {
                  required: true,
                  minLength: 2,
                  maxLength: 20,
                })}
                placeholder={"name"}
                className={style.formInput}
              />

              {errors.firstName?.type === "required" && (
                <span className={style.errorText}>
                  {"This field is required"}
                </span>
              )}
              {errors.firstName?.type === "minLength" && (
                <span className={style.errorText}>{"Min length is 2 "}</span>
              )}
              {errors.firstName?.type === "maxLength" && (
                <div className={style.errorText}>{"Max length is 20 "}</div>
              )}
              <input
                type="text"
                {...register("firstName", {
                  required: true,
                  minLength: 2,
                  maxLength: 20,
                })}
                placeholder={"firstName"}
                className={style.formInput}
              />

              {errors.email?.type === "required" && (
                <span className={style.errorText}>
                  {"This field is required"}
                </span>
              )}

              {errors.email?.type === "pattern" && (
                <span className={style.errorText}>Invalid email</span>
              )}

              <input
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^[\w.]+@([\w-]+\.)+[\w-]{2,4}$/,
                })}
                placeholder={"email"}
                className={style.formInput}
              />
              <select
                {...register("country")}
                className={style.formInput}
                name="country"
                id="country"
                defaultValue={"belarus"}
              >
                <option value="belarus">belarus</option>
                <option value="russia">russia</option>
                <option value="ukraine">ukraine</option>
              </select>

              <h4 className={style.form__title}>Choose your gender</h4>
              <div className={style.formRadio}>
                <label htmlFor="male-gender" className={style.radio__label}>
                  Male
                </label>
                <input
                  id="male-gender"
                  {...register("gender")}
                  value="male"
                  type="radio"
                  checked={isMale}
                  onChange={genderHandler}
                  className={style.radio__input}
                />
                <label htmlFor="female-gender" className={style.radio__label}>
                  Female
                </label>
                <input
                  id="female-gender"
                  {...register("gender")}
                  value="femail"
                  type="radio"
                  checked={!isMale}
                  onChange={genderHandler}
                  className={style.radio__input}
                />
              </div>
              <div className={style.container__checkbox}>
                <label htmlFor="age" className={style.radio__label}>
                  I am 18 years old
                </label>
                <input
                  id="age"
                  type="checkbox"
                  {...register("isAdult")}
                  className={style.checkbox}
                />
              </div>
              <h4 className={style.form__title}>Download your avatar</h4>
              <label htmlFor="input__file" className={style.label__file}>
                <img
                  src="images/download.svg"
                  alt="download-icon"
                  className={style.file__icon}
                />
              </label>
              <input
                id="input__file"
                name="file"
                type="file"
                onChange={(e) => handlerFile(e)}
                accept="image/*,.png,.jpg.gif,..web,.svg"
                className={style.input__file}
              />

              <button type="submit" className={style.form__button}>
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className={style.cards__container}>
          {cards.map((item: IFormCard, index: number) => {
            return (
              <CardPerson
                key={index}
                name={item.name}
                firstName={item.firstName}
                file={item.file}
                email={item.email}
                country={item.country}
                gender={item.gender}
                isAdult={item.isAdult}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Form;
