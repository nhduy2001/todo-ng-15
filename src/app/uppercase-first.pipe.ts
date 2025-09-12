import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercaseFirst',
})
export class UppercaseFirstPipe implements PipeTransform {
  transform(value: string): string {
    return value ? value[0].toUpperCase() + value.slice(1) : '';
  }
}
