import {
  ChangeDetectionStrategy,
  Component,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
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
