import axios from "axios";
import { IDataItem } from "../constants/interfaces/dataModalInterfaces";

export interface IOptionsGetCards {
  page: string;
  value: string;
  year: string;
  primaryReleaseYear: string;
  lang: string;
}

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCards = async ({
  page,
  value,
  year,
  primaryReleaseYear,
  lang,
}: IOptionsGetCards): Promise<Array<IDataItem>> => {
  const response = await axiosInstance.get(
    `&query=${value}&page=${page}&language=${lang}&year=${year}&primary_release_year=${primaryReleaseYear}`
  );
  const data = await response.data;
  const results = await data.results;
  return results;
};

export const identifyColorRate = (rate: number) => {
  if (rate < 6) {
    return "red";
  } else if (rate > 6 && rate < 8) {
    return "blue";
  } else if (rate >= 8) {
    return "green";
  }
};

export const getLocalStorageValue = (value: string) => {
  return localStorage.getItem(value);
};
