import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

import { Hero } from '../../models/hero/hero';

@Component({
  selector: 'app-hero-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './hero-table.component.html',
  styleUrl: './hero-table.component.scss'
})
export class HeroTableComponent {
   heroes: Hero[] = [
    new Hero(1, 'Superman', 101, true, 'The Man of Steel'),
    new Hero(2, 'Batman', 101, true, 'The Dark Knight'),
    new Hero(3, 'Wonder Woman', 101, true, 'Amazonian Princess'),
    new Hero(4, 'Spider-Man', 102, true, 'The Friendly Neighborhood Spider'),
    new Hero(5, 'Iron Man', 102, true, 'The Armored Avenger'),
    new Hero(6, 'Thor', 102, true, 'God of Thunder'),
    new Hero(7, 'Captain America', 102, true, 'The First Avenger'),
    new Hero(8, 'Hulk', 102, false, 'The Strongest There Is'),
    new Hero(9, 'Black Panther', 102, true, 'King of Wakanda'),
    new Hero(10, 'Flash', 101, true, 'The Fastest Man Alive')
  ];

  constructor(private readonly router: Router)
  {

  }

  goToDetails(id: number)
  {
    const heroName = this.heroes.find(h => h.id === id)?.name ?? '';

    this.router.navigate(['hero-detail', id], { queryParams: { name: heroName } });
  }
}
