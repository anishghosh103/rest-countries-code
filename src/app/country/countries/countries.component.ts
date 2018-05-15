import { Component, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../app.service';
import { Country } from '../country.interface';
import { CountryService } from '../country.service';

import { trigger, state, style, animate, transition } from '@angular/animations';
import { log } from 'util';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  animations: [
    trigger('cardAnim', [
      state('shown', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('void => shown', [
        style({ opacity: 0 }),
        animate(200)
      ]),
      transition('shown => void', [
        animate(200, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class CountriesComponent implements OnInit, AfterViewChecked, OnDestroy {

  private type: string;
  private value: string;

  private coverImage: string;
  private searching: boolean;
  private countryList: Country[] = [];
  private list: Country[] = [];
  private pageNumber: number;

  private nameFilter: string;
  private regionFilter: string;
  private langFilter: string;
  private currencyFilter: string;

  private scrollWindow: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _appService: AppService,
    private _router: Router,
    private _countryService: CountryService
  ) {
    this.coverImage = '';
    this.searching = true;
    this.pageNumber = 1;
    this.nameFilter = '';
    this.regionFilter = '';
    this.langFilter = '';
    this.currencyFilter = '';
    this.scrollWindow = null;
  }

  ngOnInit() {
    this.value = this._activatedRoute.snapshot.params.value;
    this._activatedRoute.data.subscribe(data => {
      this.type = data.type;
      this.coverImage = data.type === 'region' ? this.value : data.type;
      this.pageNumber = this._countryService.getPageNumber();
      this._getCountries();
    });
  }

  ngAfterViewChecked() {
    if (this.scrollWindow !== null) {
      window.scrollTo(this.scrollWindow.x, this.scrollWindow.y);
      this.scrollWindow = null;
    }
  }

  ngOnDestroy() {
    this._countryService.setPageNumber(this.pageNumber);
  }

  private _getCountries() {
    this._appService.getCountriesByType(this.type, this.value)
    .then((response: any) => {
      response.forEach(country => {
        this.countryList.push(this._countryService.createObj(country));
      });
      this.countryList = this.countryList.sort((a, b) => a.name > b.name ? 1 : -1);
      this.list = this.countryList;
      this.searching = false;
    })
    .catch(err => {
      // console.log('countries.component.ts:82', err);
      this._router.navigate(['/']);
    });
  }

  private _pageChange(event) {
    this.pageNumber = event;
    this.scrollWindow = {x: 0, y: 0};
  }

  public showCountry(countryName: string) {
    this._router.navigate(['/country', countryName]);
  }

}
