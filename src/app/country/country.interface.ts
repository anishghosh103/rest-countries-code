
interface Currency {
  code: string;
  name: string;
  symbol: string;
}

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

interface RegionalBloc {
  acronym: string;
  name: string;
}

export interface Country {
  name: string;
  nativeName: string;
  altNames: string[];
  capital: string;
  region: string;
  subregion: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  timezones: string[];
  borders: string[];
  currencies: Currency[];
  languages: Language[];
  flag: string;
  regionalBlocs: RegionalBloc[];
}
