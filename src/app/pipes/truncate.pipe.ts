import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  max = 149;

  transform(value: string): string {
    let truncated = value.slice(0, this.max).trim();
    if (value[truncated.length] !== ' ') {
      for(let i = truncated.length - 1; i >= 0; i--) {
        if (truncated[i] === ' ') break;
        truncated = truncated.slice(0, i);
      }
      truncated = truncated.trim();
    }

    return `${truncated.replace(/[-–.,]{1,3}$/, '')}...`;
  }

}
