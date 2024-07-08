import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage',
  standalone: true,
})
export class PercentagePipe implements PipeTransform {
  transform(value: number): string {
    const percentage = Math.round(value * 10);
    return `${percentage}%`;
  }
}
