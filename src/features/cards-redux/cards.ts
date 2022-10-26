import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCards, IOptionsGetCards } from "../../services";
import { IDataItem } from "../../constants/interfaces/dataModalInterfaces";

export interface IStore {
  cards: IReducer;
}
export interface ILang {
  lang: string;
}
export interface IYear {
  year: string;
}
export interface IPage {
  pageNumber: number;
}
export interface IPrimaryReleaseYear {
  primaryReleaseYear: string;
}

export interface IValue {
  value: string;
}
export interface IReducer {
  cards: IDataItem[];
  page: IPage;
  lang: ILang;
  year: IYear;
  primaryReleaseYear: IPrimaryReleaseYear;
}

export interface ICardsState extends IReducer {
  value: IValue;
  status: string | null;
}

export const fetchCards = createAsyncThunk<IDataItem[], IOptionsGetCards>(
  "cards/fetchCards",
  async function ({
    page,
    value,
    year,
    primaryReleaseYear,
    lang,
  }: IOptionsGetCards) {
    const response = getCards({
      page: page,
      value: value,
      year: year,
      primaryReleaseYear: primaryReleaseYear,
      lang: lang,
    });
    return response;
  }
);

const initialState: ICardsState = {
  cards: [],
  page: {
    pageNumber: 1,
  },
  value: {
    value: "star",
  },
  lang: {
    lang: "ru",
  },
  year: {
    year: "",
  },
  primaryReleaseYear: {
    primaryReleaseYear: "",
  },
  status: null,
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setLanguage(state, action) {
      state.lang = action.payload;
    },
    setYear(state, action) {
      state.year = action.payload;
    },
    setPrimaryReleaseYear(state, action) {
      state.primaryReleaseYear = action.payload;
    },
    setPageNumber(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.cards = action.payload;
        state.status = "resolved";
      })
      .addCase(fetchCards.rejected, (state) => {
        state.status = "rejected";
        throw new Error("Error");
      });
  },
});

export const { setLanguage, setYear, setPrimaryReleaseYear, setPageNumber } =
  cardsSlice.actions;
export default cardsSlice.reducer;
