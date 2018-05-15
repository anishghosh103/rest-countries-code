import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../country.interface';

@Pipe({
  name: 'regionFilter'
})
export class RegionFilterPipe implements PipeTransform {

  transform(list: Array<Country>, value: string): any {
    if (!list) { return null; }
    if (!value) { return list; }
    value = value.toLowerCase();
    return list.filter(country => country.region.toLowerCase().includes(value));
  }

}
