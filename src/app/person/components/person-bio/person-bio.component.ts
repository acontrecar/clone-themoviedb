import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'person-bio',
  standalone: true,
  imports: [],
  templateUrl: './person-bio.component.html',
  styleUrl: './person-bio.component.scss',
})
export class PersonBioComponent {
  @Input()
  public biography: string = '';

  @Input()
  public name: string = '';
}
