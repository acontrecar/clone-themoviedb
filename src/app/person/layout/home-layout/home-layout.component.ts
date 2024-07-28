import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss',
})
export class PersonHomeLayoutComponent {}
