import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortComponent } from './components/short.component';

@Component({
  selector: 'app-short-container',
  imports: [CommonModule, ShortComponent],
  templateUrl: './short-container.component.html',
  styleUrl: './short-container.component.scss',
})
export class ShortContainerComponent {}
