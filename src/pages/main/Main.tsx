import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Card from "../../components/Card/Card";
import Input from "../../components/Input";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getLocalStorageValue } from "../../services";
import {
  fetchCards,
  setLanguage,
  setYear,
  IStore,
  setPrimaryReleaseYear,
  setPageNumber,
} from "../../features/cards-redux/cards";
import { IDataItem } from "../../constants/interfaces/dataModalInterfaces";
import { IModalProps } from "../../constants/interfaces/interfacesProps";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Footer from "../../components/Footer";
import style from "./style.module.scss";

const Main = () => {
  const cards = useAppSelector((state: IStore) => state.cards.cards);
  const { lang } = useAppSelector((state: IStore) => state.cards.lang);
  const { year } = useAppSelector((state: IStore) => state.cards.year);
  const { pageNumber } = useAppSelector((state: IStore) => state.cards.page);
  const { primaryReleaseYear } = useSelector(
    (state: IStore) => state.cards.primaryReleaseYear
  );

  const dispatch = useAppDispatch();

  const [searchValue, setSearchValue] = useState(
    (getLocalStorageValue("inputValue") as string)
      ? (getLocalStorageValue("inputValue") as string)
      : ""
  );

  const [isOpenModal, setOpenModal] = useState(false);
  const [currentCard, setCurrentCard] = useState({
    title: "",
    lang: "",
    overview: "",
    rate: 0,
    voteCount: 0,
    adult: false,
    originalLang: "",
    releaseDate: "",
  } as IModalProps);

  useEffect(() => {
    dispatch(
      fetchCards({
        page: pageNumber.toString(),
        value: "star",
        year: year,
        primaryReleaseYear: primaryReleaseYear,
        lang: lang,
      })
    );
  }, []);

  useEffect(() => {
    dispatch(
      fetchCards({
        page: pageNumber.toString(),
        value: searchValue ? searchValue : "star",
        year: year,
        primaryReleaseYear: primaryReleaseYear,
        lang: lang,
      })
    );
  }, [searchValue, lang, year, primaryReleaseYear, pageNumber]);

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    localStorage.setItem("inputValue", e.target.value);
  };

  const handlerOpenModal = (card: IModalProps) => {
    setCurrentCard(card);
    setOpenModal(!isOpenModal);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const langHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLanguage({ lang: e.target.value }));
  };
  const yearHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setYear({ year: e.target.value }));
  };
  const primaryReleaseYearHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setPrimaryReleaseYear({ primaryReleaseYear: e.target.value }));
  };
  return (
    <div>
      <Modal
        isActive={isOpenModal}
        handlerCloseModal={handleCloseModal}
        image={currentCard.image}
        title={currentCard.title}
        lang={currentCard.originalLang}
        overview={currentCard.overview}
        rate={currentCard.rate}
        voteCount={currentCard.voteCount}
        adult={currentCard.adult}
        originalLang={currentCard.originalLang}
        releaseDate={currentCard.releaseDate}
      />
      <Header />

      <div className="container">
        <div className={style.container__filters}>
          <div className={style.box__field}>
            <label htmlFor="lang" className={style.field__title}>
              Language
            </label>
            <select
              name="lang"
              id="lang"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                langHandler(e);
              }}
              className={style.filters__field}
            >
              <option value="ru">russian</option>
              <option value="en">english</option>
              <option value="ja">japan</option>
            </select>
          </div>
          <div className={style.box__field}>
            <label htmlFor="year-input" className={style.field__title}>
              Year
            </label>
            <input
              id="year-input"
              className={style.filters__field}
              type="number"
              min="2000"
              max="2022"
              step="1"
              defaultValue={""}
              onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
                yearHandler(e)
              }
            />
          </div>
          <div className={style.box__field}>
            <label htmlFor="release-input" className={style.field__title}>
              Release year
            </label>
            <input
              className={style.filters__field}
              type="number"
              min="2000"
              max="2022"
              step="1"
              defaultValue={""}
              onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
                primaryReleaseYearHandler(e)
              }
            />
          </div>
        </div>

        <Input
          action={(e: React.ChangeEvent<HTMLInputElement>) => handlerChange(e)}
          placeHolder={"Search"}
          value={searchValue}
        />
        <div className={style.container__main}>
          {cards.length > 0 &&
            cards.map((item: IDataItem, index) => {
              return (
                <Card
                  key={index}
                  image={`${process.env.REACT_APP_BASE_IMAGE}${item.poster_path}`}
                  title={item.title}
                  overview={item.overview}
                  rate={item.vote_average}
                  handlerOpenModal={() => {
                    handlerOpenModal({
                      image: `${process.env.REACT_APP_BASE_IMAGE}${item.poster_path}`,
                      title: item.title as string,
                      lang: item.original_language,
                      overview: item.overview,
                      rate: item.vote_average,
                      voteCount: item.vote_count,
                      adult: item.adult,
                      originalLang: item.original_language,
                      releaseDate: item.release_date,
                    });
                  }}
                />
              );
            })}
        </div>
        <div className={style.container__filters}>
          <Pagination
            size="large"
            color="primary"
            count={10}
            variant="outlined"
            page={pageNumber}
            showFirstButton
            showLastButton
            onChange={(_, num) => {
              dispatch(setPageNumber({ pageNumber: num }));
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Main;
