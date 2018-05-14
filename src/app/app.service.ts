import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

  private baseUrl = 'https://restcountries.eu/rest/v2';

  constructor(private _http: HttpClient) { }

  getCountriesByType(type: string, value: string) {
    return new Promise((resolve, reject) => {
      this._http.get(`${this.baseUrl}/${type}/${value}?${type === 'name' ? 'fullText=true&' : ''}fields=name;capital;region;subregion;population;latlng;demonym;area;timezones;borders;currencies;languages;flag;regionalBlocs;nativeName;altSpellings`)
        .subscribe(
          (response: any) => resolve(response),
          err => reject(err)
        );
    });
  }

}
