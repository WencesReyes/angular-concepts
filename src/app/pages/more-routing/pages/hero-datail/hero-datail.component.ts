import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-datail',
  standalone: true,
  imports: [],
  templateUrl: './hero-datail.component.html',
  styleUrl: './hero-datail.component.scss',
})
export class HeroDatailComponent implements OnInit, OnDestroy {
  id: number = 0;
  name: string = '';
  private queryParams!: Subscription;
  private routeValues!: Subscription;

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.queryParams = this.route.queryParams.subscribe((params) => {
      this.name = params['name'];
    });

    this.routeValues = this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
  }

  ngOnDestroy(): void {
    this.queryParams?.unsubscribe();
    this.routeValues?.unsubscribe();
  }
}
