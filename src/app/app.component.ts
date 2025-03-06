import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VideoComponent } from './components/video.component';
import { ResponsiveSidenavComponent } from './layout/responsive-sidenav.component';

@Component({
  imports: [RouterModule, ResponsiveSidenavComponent, VideoComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
