import { Pipe, PipeTransform } from '@angular/core';
import { FirstLastWord } from './models/first-last-word.type';
import { FirstLastWordOptions } from './enum/first-last-word.enum';

@Pipe({
  name: 'fisrtLastWord',
  standalone: true,
})
export class FisrtLastWordPipe implements PipeTransform {
  transform(value: string, firstOrLast: FirstLastWord): string {
    if (!value) {
      return value;
    }

    const words = value.split(' ');

    if (firstOrLast === FirstLastWordOptions.FIRST) {
      return words[0];
    }

    return words[words.length - 1];
  }
}
