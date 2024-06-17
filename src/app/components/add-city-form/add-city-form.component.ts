import { Component, EventEmitter, Output } from '@angular/core';

import { City } from '../../models/cities/city';

@Component({
  selector: 'app-add-city-form',
  standalone: true,
  imports: [],
  templateUrl: './add-city-form.component.html',
  styleUrl: './add-city-form.component.scss',
})
export class AddCityFormComponent {
  @Output() addCityEvent = new EventEmitter<City>();

  AddCity(name: string, population: number) {
    const city = new City(Date.now(), name, population);

    this.addCityEvent.emit(city);
  }
}
