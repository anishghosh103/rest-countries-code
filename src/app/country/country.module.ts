import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { CountryComponent } from './country/country.component';
import { CountryService } from './country.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NameFilterPipe } from './pipes/name-filter.pipe';
import { LangFilterPipe } from './pipes/lang-filter.pipe';
import { CurrencyFilterPipe } from './pipes/currency-filter.pipe';
import { MakeBolderPipe } from './pipes/make-bolder.pipe';
import { SharedModule } from '../shared/shared.module';
import { RegionFilterPipe } from './pipes/region-filter.pipe';

@NgModule({
  declarations: [
    CountriesComponent,
    CountryComponent,
    NameFilterPipe,
    LangFilterPipe,
    CurrencyFilterPipe,
    MakeBolderPipe,
    RegionFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NgxPaginationModule,
    RouterModule.forChild([
      {
        path: 'countries',
        children: [
          {
            path: 'region/:value',
            component: CountriesComponent,
            data: { type: 'region' }
          },
          {
            path: 'currency/:value',
            component: CountriesComponent,
            data: { type: 'currency' }
          },
          {
            path: 'lang/:value',
            component: CountriesComponent,
            data: { type: 'lang' }
          }
        ]
      },
      {
        path: 'country/:name',
        component: CountryComponent
      }
    ])
  ],
  providers: [CountryService, NgxPaginationModule]
})
export class CountryModule { }
