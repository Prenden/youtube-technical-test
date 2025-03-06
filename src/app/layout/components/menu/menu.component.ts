import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MenuElementInterface } from '../../interfaces';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, MatIconModule, MatListModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  @Input() public menuElements: MenuElementInterface[] = [];
  @Input() public isIconView = false;
}
