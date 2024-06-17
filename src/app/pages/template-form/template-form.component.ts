import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { JsonPipe, NgClass } from '@angular/common';

import { Brand } from './models/brand';
import { Hero } from '../../models/hero/hero';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, JsonPipe, NgClass],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss',
})
export class TemplateFormComponent implements OnInit {
  brands: Brand[] = [];

  hero: Hero = {
    id: 0,
    name: '',
    brandId: 0,
    description: '',
    isElite: false,
  };

  ngOnInit(): void {
    setTimeout(() => {
      this.brands = [new Brand(1, 'DC'), new Brand(2, 'Marvel')];
    }, 1000);
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  checkBrand(brandId: number) {
    if (brandId > 0) {
      console.log(brandId, 'passed');
      return null;
    }

    console.log(brandId, 'no passed');
    return { invalidBrand: true };
  }
}
