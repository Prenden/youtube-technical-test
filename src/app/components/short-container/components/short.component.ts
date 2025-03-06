import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortInterface } from '../interfaces';

@Component({
  selector: 'app-short',
  imports: [CommonModule],
  templateUrl: './short.component.html',
  styleUrl: './short.component.scss',
})
export class ShortComponent {
  @Input() short: ShortInterface | undefined;
}
