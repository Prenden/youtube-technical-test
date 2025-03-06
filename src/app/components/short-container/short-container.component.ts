import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortComponent } from './components/short.component';
import { ShortInterface } from './interfaces';
import { SHORTS } from './consts';

@Component({
  selector: 'app-short-container',
  imports: [CommonModule, ShortComponent],
  templateUrl: './short-container.component.html',
  styleUrl: './short-container.component.scss',
})
export class ShortContainerComponent {
  protected shorts: ShortInterface[] = SHORTS;
}
