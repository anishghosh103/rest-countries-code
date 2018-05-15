import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { Country } from '../country.interface';
import { AppService } from '../../app.service';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../country.service';
import Vibrant = require('node-vibrant');

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  private country: Country;

  private valid: boolean;
  private showHeader: boolean;
  private titleBackgroundColor: string;

  constructor(
    private _appService: AppService,
    private _countryService: CountryService,
    private _activatedRoute: ActivatedRoute,
    private _el: ElementRef
  ) {
    this.valid = false;
    this.showHeader = false;
  }

  ngOnInit() {
    const countryName = this._activatedRoute.snapshot.params.name;
    this._appService.getCountriesByType('name', countryName)
      .then((response) => {
        this.country = this._countryService.createObj(response[0]);
        Vibrant.from(this.country.flag).getPalette()
          .then(palette => {
            const swatch = palette.DarkVibrant;
            this.titleBackgroundColor = `
              rgba(${swatch.r}, ${swatch.g}, ${swatch.b}, 0.9)
            `;
          });
        this.valid = true;
      })
      .catch(err => console.log(err));
  }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const position = this._el.nativeElement.scrollTop;
      this.showHeader = window.pageYOffset >= window.innerHeight;
    }

}
