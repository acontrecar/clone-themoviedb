import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeConvert',
  standalone: true,
})
export class TimeConvertPipe implements PipeTransform {
  transform(value: number): string {
    if (!value) return '0 m';

    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    let hoursString = hours > 0 ? `${hours} h${hours > 1 ? 's' : ''}` : '';
    let minutesString =
      minutes > 0 ? `${minutes} m${minutes > 1 ? 's' : ''}` : '';

    return [hoursString, minutesString].filter(Boolean).join(' y ');
  }
}
