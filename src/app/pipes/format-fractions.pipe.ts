import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatFractions'
})
export class FormatFractionsPipe implements PipeTransform {

  transform(value: number): string {
    return `${value}`.replace('.', ',');
  }

}
