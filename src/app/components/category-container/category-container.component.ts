import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { CATEGORIES } from './consts';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-category-container',
  imports: [CommonModule, MatChipsModule, MatButtonModule, MatIconModule],
  templateUrl: './category-container.component.html',
  styleUrl: './category-container.component.scss',
})
export class CategoryContainerComponent {
  protected categories = CATEGORIES;
  protected selectedCategory = CATEGORIES[0];
  @ViewChild('scrollableComponent', { static: false }) public scrollableComponent: ElementRef<HTMLElement> | undefined;

  public scroll(): void {
    if (this.scrollableComponent) {
      const listbox = this.scrollableComponent.nativeElement.getElementsByTagName('mat-chip-listbox')[0];
      listbox.scrollLeft += 100;
    }
  }
}
