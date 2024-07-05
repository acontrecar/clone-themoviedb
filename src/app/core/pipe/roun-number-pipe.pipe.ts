import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundNumber',
  standalone: true,
})
export class RounNumberPipe implements PipeTransform {
  transform(value: number, decimalPlaces: number = 1): number | null {
    if (isNaN(value)) return null; // Manejo de valor no numérico

    return (
      Math.round(value * Math.pow(10, decimalPlaces)) /
      Math.pow(10, decimalPlaces)
    );
  }
}
