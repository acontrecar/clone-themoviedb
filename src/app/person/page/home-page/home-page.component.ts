import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { ThemoviedbService } from '../../../core/services/common/themoviedb.service';
import { AutoDestroyService } from '../../../core/services/utils/auto-destroy.service';
import { takeUntil } from 'rxjs';
import { Person } from '../../../core/interfaces';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  public persons: WritableSignal<Person[]> = signal([]);
  public currentPage: number = 1;
  public totalPages: number = 1;

  constructor(
    private theMovieDbService: ThemoviedbService,
    private autoDestroyService: AutoDestroyService
  ) {}
  ngOnInit(): void {
    this.loadPersons();
  }

  loadPersons(page: number = 1) {
    this.theMovieDbService
      .getPopularPersonList(page)
      .pipe(takeUntil(this.autoDestroyService))
      .subscribe((response) => {
        this.persons.set(response.results);
        this.currentPage = response.page;
        this.totalPages = response.total_pages;

        console.table(this.persons());
      });
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.loadPersons(page);
    }
  }
}
