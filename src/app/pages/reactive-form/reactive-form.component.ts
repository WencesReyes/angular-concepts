import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe, NgClass } from '@angular/common';

import { Brand } from '../template-form/models/brand';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, JsonPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss',
})
export class ReactiveFormComponent implements OnInit {
  brands: Brand[] = [];

  heroForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();

    setTimeout(() => {
      this.brands = [new Brand(1, 'DC'), new Brand(2, 'Marvel')];
    }, 1000);
  }

  initForm() {
    this.heroForm = this.fb.group({
      id: [0],
      name: ['', [Validators.required, Validators.minLength(5)]],
      brandId: [0, [Validators.required, Validators.min(1)]],
      isElite: [false],
      description: [''],
    });
  }

  onSubmit() {
    console.log(this.heroForm.value);
  }

  get nameField() {
    return this.heroForm.get('name');
  }

  get brandIdField() {
    return this.heroForm.get('brandId');
  }

  getErrorMessage(controlName: string): string {
    const control = this.heroForm.get(controlName);

    if (!control?.touched) {
      return '';
    }

    if (control?.hasError('required')) {
      return 'This field is required';
    } else if (control?.hasError('minlength')) {
      return `Length must be at least ${
        control.getError('minlength').requiredLength
      }`;
    } else if (control?.hasError('min')) {
      if (control.getError('min').min === 1) {
        return 'This field is required';
      }

      return `Value must be at least ${control.getError('min').min}`;
    }

    return '';
  }
}
