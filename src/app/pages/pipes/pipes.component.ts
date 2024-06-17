import { Component } from '@angular/core';
import { Employee } from '../../models/employees/employee';
import {
  DatePipe,
  NgFor,
  TitleCasePipe,
  UpperCasePipe,
  CurrencyPipe,
  LowerCasePipe,
} from '@angular/common';
import { FisrtLastWordPipe } from './custom-pipes/first-last-word.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [
    NgFor,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    FisrtLastWordPipe,
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss',
})
export class PipesComponent {
  employees: Employee[] = [
    new Employee(1, 'John Doe', 50000, new Date('2020-01-15')),
    new Employee(2, 'Jane Smith', 60000, '2019-03-23'),
    new Employee(3, 'Alice Johnson', 55000, new Date('221-07-10')),
    new Employee(4, 'Bob Brown', 48000, '2018-06-01'),
    new Employee(5, 'Charlie Davis', 53000, new Date('2022-02-17')),
    new Employee(6, 'Diana Evans', 62000, '2020-11-30'),
    new Employee(7, 'Frank Green', 47000, new Date('2019-09-19')),
    new Employee(8, 'Grace Harris', 58000, '2021-04-22'),
    new Employee(9, 'Hank Ivory', 51000, new Date('2020-08-08')),
    new Employee(10, 'Ivy Jackson', 59000, '2018-12-12'),
  ];

  trackByEmployees(index: number, employee: Employee) {
    return employee.id;
  }
}
