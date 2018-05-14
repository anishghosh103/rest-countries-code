import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../country.interface';

@Pipe({
  name: 'currencyFilter'
})
export class CurrencyFilterPipe implements PipeTransform {

  transform(list: Array<Country>, value: string): any {
    return list.filter(country => {
      return country.currencies.find(currency => {
        const name = currency.name;
        const code = currency.code;
        return name && name.toLowerCase().includes(value.toLowerCase()) ||
               code && code.toLowerCase().includes(value.toLowerCase());
      });
    });
  }

}
