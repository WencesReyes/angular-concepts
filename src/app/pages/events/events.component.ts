import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

import { City } from '../../models/cities/city';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [NgClass],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent {
  selectedCityId: number = 0;

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

  onSelectCity(cityId: number) {
    this.selectedCityId = cityId;
  }

  onCancelSelection() {
    this.selectedCityId = 0;
  }
}
