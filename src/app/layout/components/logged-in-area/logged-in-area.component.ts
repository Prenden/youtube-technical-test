import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-logged-in-area',
  imports: [CommonModule, UserComponent],
  templateUrl: './logged-in-area.component.html',
  styleUrl: './logged-in-area.component.scss',
})
export class LoggedInAreaComponent {}
