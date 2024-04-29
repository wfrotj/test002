import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputSectionComponent } from './input-section/input-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'viewChild';
}
