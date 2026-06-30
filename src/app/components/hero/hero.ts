import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent {
  name = 'Omar Sarr';
  title = 'Étudiant en Informatique de gestion';
  description = 'Développeur en devenir, j\'aime traduire des idées concrètes en lignes de code et concevoir des applications web fluides, structurées et performantes.';
}