import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './common/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'clone-themoviedb';

  constructor() {
    console.log(
      '%cHola, gracias por visitar esta página!\n\nSi quieres continuar investigando no dudes en hacerlo en:\n\nwww.linkedin.com/in/antoniocontrerascárdenas',
      'font-weight: bold; font-style: italic; font-size: 1.2rem'
    );
  }
}
