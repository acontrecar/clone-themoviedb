import { Component, Input } from '@angular/core';
import { DateFormatPipe } from '../../../core/pipe/date-format.pipe';

@Component({
  selector: 'person-info-details',
  standalone: true,
  imports: [DateFormatPipe],
  templateUrl: './person-info-details.component.html',
  styleUrl: './person-info-details.component.scss',
})
export class PersonInfoDetailsComponent {
  @Input()
  public profile_path: string = '';

  @Input()
  public known_for_department: string = '';

  @Input()
  public gender: number = 0;

  @Input()
  public birthday: Date = new Date();

  @Input()
  public deathday: Date | null = null;

  @Input()
  public place_of_birth: string = '';

  @Input()
  public also_known_as: string[] = [];

  @Input()
  public name: string = '';
}
