import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { City } from '../../models/cities/city';

@Component({
  selector: 'app-city-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './city-item.component.html',
  styleUrl: './city-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // Change detection, if Input changes or events happend.
})
export class CityItemComponent {
  @Input() classNames: string[] = [];
  @Input() city: City = {
    id: 0,
    name: '',
    population: 0,
  };

  render() {
    console.log('render CityItem');
  }
}
