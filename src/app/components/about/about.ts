import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll';

interface SkillCard {
  icon: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit {
  constructor(private scroll: ScrollService) {}

  ngOnInit() {
    setTimeout(() => this.scroll.observe(), 100);
  }

  bio = `Étudiant en L2 Informatique, je m'intéresse au développement web, à la conception d'interfaces et à la résolution de problèmes techniques. Curieux et rigoureux, j'aime apprendre de nouveaux outils et les mettre en pratique sur des projets concrets.`;

  cards: SkillCard[] = [
    { icon: '', title: 'Développement', desc: 'HTML, CSS, JavaScript, Python,Angular, PHP' },
    { icon: '', title: 'Bases de données', desc: 'MySQL, MongoDB' },
    { icon: '', title: 'Design', desc: 'Canva,WordPress ' },
    { icon: '', title: 'Soft skills', desc: 'Travail d\'équipe, autonomie, rigueur' }
  ];
}