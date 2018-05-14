import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makeBolder'
})
export class MakeBolderPipe implements PipeTransform {

  transform(value: string, text: string): any {
    if (!value) { return ''; }
    if (!text) { return value; }
    text = text.toLowerCase();
    if (!value.toLowerCase().includes(text)) { return value; }
    const index = value.toLowerCase().indexOf(text);
    const length = text.length;
    return `${value.substr(0, index)}<b>${value.substr(index, length)}</b>${value.substr(index + length)}`;
  }

}
