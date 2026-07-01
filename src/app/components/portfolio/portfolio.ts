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
      desc: 'Au Sénégal, la gestion sur "cahier papier" cause des erreurs de calcul, des ruptures de stock et des dettes clients oubliées.Une application web intuitive qui digitalise les ventes, les stocks et les créances pour sécuriser la trésorerie en temps réel.',
      tags: ['React' , 'TypeScript' ,'FastAPI', 'SQLite', 'Vercel', 'Render'],
      link: 'https://gestoo.vercel.app/'
    },
    {
      title: 'Tableau météo',
      desc: 'Application météo en temps réel avec recherche de ville et géolocalisation, affichant les conditions actuelles et les prévisions sur 5 jours.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://omar-sr-1.github.io/weather-dashboard/'
    },
    {
      title: 'Dashboard d\'Analytique Commerciale & Social Media',
      desc: 'Conception et développement d\'un tableau de bord décisionnel (Dashboard) complet destiné à piloter l\'activité e-commerce et les performances marketing d\'une marque de mode (OmarExclusive). Ce projet simule l\'interconnexion entre des indicateurs de gestion commerciale et l\'impact des campagnes sur les réseaux sociaux.',
      tags: ['Angular','TypeScript','Tailwind CSS' ,'Chart.js'],
      link: 'https://omar-sr-1.github.io/marketing-dashboard/'
    },
    
  ];

  stack: string[] = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'PHP', 'MySQL', 'MongoDB', 'Canva', 'Git'];
}