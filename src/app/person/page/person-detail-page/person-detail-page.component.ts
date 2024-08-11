import {
  Component,
  Input,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { ThemoviedbService } from '../../../core/services/common/themoviedb.service';
import { AutoDestroyService } from '../../../core/services/utils/auto-destroy.service';
import { takeUntil } from 'rxjs';
import { PersonDetailResponse } from '../../../core/interfaces';
import { ActivatedRoute } from '@angular/router';
import { PersonInfoDetailsComponent } from '../../components/person-info-details/person-info-details.component';

@Component({
  selector: 'app-person-detail-page',
  standalone: true,
  imports: [PersonDetailPageComponent, PersonInfoDetailsComponent],
  templateUrl: './person-detail-page.component.html',
  styleUrl: './person-detail-page.component.scss',
})
export class PersonDetailPageComponent implements OnInit {
  @Input('id')
  personId!: string;

  public person: WritableSignal<PersonDetailResponse> =
    signal<PersonDetailResponse>({} as PersonDetailResponse);

  constructor(
    private themoviedbService: ThemoviedbService,
    private autoDestroyService: AutoDestroyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.personId = param['id'];
      this.loadData();
    });
  }

  public loadData(): void {
    this.themoviedbService
      .getPersonDetails(this.personId)
      .pipe(takeUntil(this.autoDestroyService))
      .subscribe((person) => this.person.set(person));
  }
}
