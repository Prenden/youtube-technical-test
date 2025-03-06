import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { VideoInterface } from '../../interfaces';

@Component({
  selector: 'app-video',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss',
})
export class VideoComponent {
  @Input() public video: VideoInterface | undefined;
}
