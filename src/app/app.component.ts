import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResponsiveSidenavComponent } from './layout/responsive-sidenav.component';
import { CategoryContainerComponent } from './components/category-container/category-container.component';
import { VideoContainerComponent } from './components/video-container/video-container.component';
import { ShortContainerComponent } from './components/short-container/short-container.component';

@Component({
  imports: [RouterModule, ResponsiveSidenavComponent, CategoryContainerComponent, VideoContainerComponent, ShortContainerComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
