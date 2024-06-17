import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-life-cicle',
  standalone: true,
  imports: [],
  templateUrl: './life-cicle.component.html',
  styleUrl: './life-cicle.component.scss',
})
export class LifeCicleComponent implements OnInit, OnChanges, OnDestroy {
  ngOnInit(): void {
    console.log('onInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({ event: 'onChanges', changes });
  }
  ngOnDestroy(): void {
    console.log('onDestroyed');
  }
}
