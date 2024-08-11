import {
  Component,
  Input,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { ThemoviedbService } from '../../../core/services/common/themoviedb.service';
import { AutoDestroyService } from '../../../core/services/utils/auto-destroy.service';
import { forkJoin, takeUntil } from 'rxjs';
import { Credits, PersonDetailResponse } from '../../../core/interfaces';
import { ActivatedRoute } from '@angular/router';
import { PersonInfoDetailsComponent } from '../../components/person-info-details/person-info-details.component';
import { PersonBioComponent } from '../../components/person-bio/person-bio.component';
import { PersonKnowCarouselComponent } from '../../components/person-know-carousel/person-know-carousel.component';

@Component({
  selector: 'app-person-detail-page',
  standalone: true,
  imports: [
    PersonDetailPageComponent,
    PersonInfoDetailsComponent,
    PersonBioComponent,
    PersonKnowCarouselComponent,
  ],
  templateUrl: './person-detail-page.component.html',
  styleUrl: './person-detail-page.component.scss',
})
export class PersonDetailPageComponent implements OnInit {
  @Input('id')
  personId!: string;

  public person: WritableSignal<PersonDetailResponse> =
    signal<PersonDetailResponse>({} as PersonDetailResponse);
  public credits: Credits[] = [];

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
    forkJoin([
      this.themoviedbService.getPersonDetails(this.personId),
      this.themoviedbService.getPersonCredits(this.personId),
    ])
      .pipe(takeUntil(this.autoDestroyService))
      .subscribe(([person, credits]) => {
        this.person.set(person);
        this.credits = credits.length > 12 ? credits.slice(0, 12) : credits;
      });
  }
}
