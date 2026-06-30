import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  desc: string;
  tags: string[];
  link?: string;
}

interface Certificate {
  title: string;
  org: string;
  year: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
  activeTab: 'projects' | 'certificates' | 'stack' = 'projects';

  setTab(tab: 'projects' | 'certificates' | 'stack') {
    this.activeTab = tab;
  }

  projects: Project[] = [
    {
      title: 'Gëstoo',
      desc: 'Application de gestion d\'emprunts et de livres avec base de données MySQL.',
      tags: ['PHP', 'MySQL', 'HTML/CSS'],
      link: 'https://gestoo.vercel.app/'
    },
    {
      title: 'Weather Dashboard',
      desc: 'Application météo en temps réel avec recherche de ville et géolocalisation, affichant les conditions actuelles et les prévisions sur 5 jours.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://omar-sr-1.github.io/weather-dashboard/'
    },
    {
      title: 'Portfolio personnel',
      desc: 'Ce site, conçu et développé avec Angular.',
      tags: ['Angular', 'TypeScript', 'SCSS'],
      link: '#'
    },
    {
      title: 'Portfolio personnel',
      desc: 'Ce site, conçu et développé avec Angular.',
      tags: ['Angular', 'TypeScript', 'SCSS'],
      link: '#'
    }
  ];

  certificates: Certificate[] = [
    { title: 'Introduction au développement web', org: 'OpenClassrooms', year: '2025' },
    { title: 'Bases de données relationnelles', org: 'Coursera', year: '2025' }
  ];

  stack: string[] = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'PHP', 'MySQL', 'MongoDB', 'Canva', 'Git'];
}