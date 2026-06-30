import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll';

interface Skill {
  name: string;
  level: number;
  color: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills implements OnInit {
  constructor(private scroll: ScrollService) {}

  ngOnInit() {
    setTimeout(() => this.scroll.observe(), 100);
  }

  skills: Skill[] = [
    { name: 'HTML / CSS', level: 85, color: 'var(--accent)' },
    { name: 'JavaScript', level: 60, color: 'var(--accent-2)' },
    { name: 'TypeScript', level: 55, color: 'var(--accent)' },
    { name: 'Angular', level: 55, color: 'var(--accent-2)' },
    { name: 'PHP', level: 60, color: 'var(--accent)' },
    { name: 'MySQL', level: 80, color: 'var(--accent-2)' },
    { name: 'MongoDB', level: 25, color: 'var(--accent)' },
    { name: 'Git', level: 60, color: 'var(--accent-2)' }
  ];
}