export interface ICardProps {
  image?: string;
  title?: string;
  lang?: string;
  rate?: number;
  overview?: string;
  handlerOpenModal?: () => void;
}

export interface IModalProps extends ICardProps {
  adult?: boolean;
  originalLang?: string;
  originalTitle?: string;
  releaseDate?: string;
  voteCount?: number;
  isActive?: boolean;
  handlerCloseModal?: () => void;
}
export interface IValidations {
  isEmpty?: boolean;
  minLength: number;
  maxLength: number;
  isEmail?: boolean;
  isValid?: boolean;
}

export enum Gender {
  male = "male",
  feMale = "femail",
}

export interface IFormCard {
  name: string;
  firstName: string;
  email?: string;
  country?: string;
  gender?: string;
  isAdult?: boolean;
  isValid?: boolean;
  file?: string;
}
export interface IFormCardProps {
  name?: string;
  firstName?: string;
  email?: string;
  country?: string;
  gender?: string;
  adult?: string;
  file?: string;
}
export interface ICardItemProps {
  itemTitle: string;
  itemValue: string;
}
export interface ICardPerson {
  country: string;
  email: string;
  firstName: string;
  gender: string;
  isAdult: boolean;
  name: string;
}
export interface Inputs {
  name: string;
  firstName: string;
  email: string;
  country: string;
  gender: string;
  type: string;
  isAdult: boolean;
  file: string;
}
