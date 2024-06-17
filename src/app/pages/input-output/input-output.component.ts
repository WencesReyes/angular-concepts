import { Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

import { City } from '../../models/cities/city';
import { ButtonComponent } from '../../components/button/button.component';
import { ButtonProps } from '../../components/button/button.props';
import { AddCityFormComponent } from '../../components/add-city-form/add-city-form.component';
import { CityItemComponent } from '../../components/city-item/city-item.component';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [
    NgClass,
    ButtonComponent,
    NgIf,
    AddCityFormComponent,
    CityItemComponent,
  ],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.scss',
})
export class InputOutputComponent {
  selectedCityId: number = 0;
  buttonProps: ButtonProps = {
    color: 'inherit',
    text: 'no city selected to cancel',
  };

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

    const selectedCity = this.cities.find((city) => city.id === cityId);

    if (!selectedCity) {
      return;
    }

    if (selectedCity.population < 10) {
      this.buttonProps = new ButtonProps(
        'red',
        `Cancel city with population ${selectedCity?.population}`
      );
    } else if (selectedCity.population < 20) {
      this.buttonProps = new ButtonProps(
        'blue',
        `Cancel city with population ${selectedCity?.population}`
      );
    } else {
      this.buttonProps = new ButtonProps(
        'magenta',
        `Cancel city with population ${selectedCity?.population}`
      );
    }
  }

  onCancelSelection() {
    this.selectedCityId = 0;
  }

  addCity(newCity: City) {
    this.cities.push(newCity);
  }
}
