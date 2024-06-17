import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

import { City } from '../../models/cities/city';

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.scss',
})
export class StructuralDirectivesComponent {
  cities: City[] = [
    new City(1, 'Tokyo', 37.43),
    new City(2, 'Delhi', 31.18),
    new City(3, 'Shanghai', 27.51),
    new City(4, 'São Paulo', 12.2),
    new City(5, 'Mexico City', 21.86),
    new City(6, 'New York City', 8.8),
    new City(7, 'London', 8.98),
    new City(8, 'Buenos Aires', 15.09),
    new City(9, 'Cairo', 20.49),
    new City(10, 'Rio de Janeiro', 6.75),
  ];
}
