import { NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { ButtonProps } from './button.props';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnChanges, OnInit {
  @Input() props!: ButtonProps;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges', changes);
  }
  ngOnInit(): void {
    console.log('onInit');
  }
}
