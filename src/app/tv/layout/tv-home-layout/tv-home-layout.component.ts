import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../../common/components/navbar/navbar.component';

@Component({
  selector: 'app-tv-home-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './tv-home-layout.component.html',
  styleUrl: './tv-home-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TvHomeLayoutComponent {}
