export class Employee {
  constructor(
    public id: number,
    public name: string,
    public salary: number,
    public hireDate: Date | string
  ) {}
}
