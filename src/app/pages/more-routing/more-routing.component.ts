import { Component } from '@angular/core';
import { HeroTableComponent } from '../../components/hero-table/hero-table.component';
import { Child1Component } from './pages/child-1/child-1.component';
import { Child2Component } from './pages/child-2/child-2.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-more-routing',
  standalone: true,
  imports: [
    HeroTableComponent,
    Child1Component,
    Child2Component,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './more-routing.component.html',
  styleUrl: './more-routing.component.scss',
})
export class MoreRoutingComponent {}
