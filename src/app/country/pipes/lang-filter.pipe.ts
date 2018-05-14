import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../country.interface';

@Pipe({
  name: 'langFilter'
})
export class LangFilterPipe implements PipeTransform {

  transform(list: Array<Country>, value: string): any {
    return list.filter(country => {
      return country.languages.find(lang => {
        const name = lang.name;
        const code = lang.code;
        return name && name.toLowerCase().includes(value.toLowerCase()) ||
               code && code.toLowerCase().includes(value.toLowerCase());
      });
    });
  }

}
