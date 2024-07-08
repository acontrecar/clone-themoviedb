import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormatter',
  standalone: true,
})
export class CurrencyFormatterPipe implements PipeTransform {
  transform(
    value: number,
    locale: string = 'en-US',
    currency: string = 'USD'
  ): string {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    }).format(value);
  }
}
