import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  max = 150;

  transform(value: string): string {
    let stringArr = value.split(' ');
    let sum = 0;
    let i = 0;
    while (i < stringArr.length) {
      sum += stringArr[i].length + 1;
      if (sum >= this.max) break;
      i++;
    }

    return `${ stringArr.slice(0, i + 1).join(' ').trim().replace('...', '') }...`;
  }

}
