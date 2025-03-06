import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './components/video/video.component';

@Component({
  selector: 'app-video-container',
  imports: [CommonModule, VideoComponent],
  templateUrl: './video-container.component.html',
  styleUrl: './video-container.component.scss',
})
export class VideoContainerComponent {}
