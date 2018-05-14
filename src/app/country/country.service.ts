import { Injectable } from '@angular/core';
import { Country } from './country.interface';

@Injectable()
export class CountryService {

  private _pageNumber: number;

  constructor() {
    this._pageNumber = 0;
  }

  createObj(country): Country {
    return {
      altNames: country.altSpellings,
      area: country.area,
      borders: country.borders,
      capital: country.capital,
      currencies: country.currencies,
      demonym: country.demonym,
      flag: country.flag,
      languages: country.languages.map(language => {
        return {
          code: language.iso639_1,
          name: language.name,
          nativeName: language.nativeName
        };
      }),
      latlng: country.latlng,
      name: country.name,
      nativeName: country.nativeName,
      population: country.population,
      region: country.region,
      subregion: country.subregion,
      timezones: country.timezones,
      regionalBlocs: country.regionalBlocs.map(bloc => {
        return {
          acronym: bloc.acronym,
          name: bloc.name
        };
      })
    };
  }

  getPageNumber(): number {
    return this._pageNumber;
  }

  setPageNumber(pageNumber: number): void {
    this._pageNumber = pageNumber;
  }

}
