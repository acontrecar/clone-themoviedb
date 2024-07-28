import {
  ChangeDetectionStrategy,
  Component,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  public isOpenMenu: WritableSignal<boolean> = signal(false);

  public openMenu(): void {
    this.isOpenMenu.set(!this.isOpenMenu());
    // console.log(this.isOpenMenu());
  }
}
