import { Component, Input } from '@angular/core';
import { Keyword, Network } from '../../../core/interfaces';

@Component({
  selector: 'tv-tv-info',
  standalone: true,
  imports: [],
  templateUrl: './tv-info.component.html',
  styleUrl: './tv-info.component.scss',
})
export class TvInfoComponent {
  @Input({ required: true })
  public original_name: string = '';

  @Input({ required: true })
  public status: string = '';

  @Input({ required: true })
  public production_companies: Network[] = [];

  @Input({ required: true })
  public type: string = '';

  @Input({ required: true })
  public original_language: string = '';

  @Input({ required: true })
  public keywords: Keyword[] = [];
}
