import { CardComponent } from './../../card/card.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.css',
})
export class MainSectionComponent {}
