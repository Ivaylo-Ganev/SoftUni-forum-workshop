import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(value: string, maxChar = 5): unknown {
    return `${value.substring(0, maxChar)}${value.length > 25 ? '...' : ''}`;
  }

}
