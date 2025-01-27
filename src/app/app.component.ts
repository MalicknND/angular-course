import { Component, type OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit(): void {
    this.faceSnaps = [
      new FaceSnap(
        'Face Snap',
        'This is a simple face snap application',
        'https://cdn.pixabay.com/photo/2024/12/03/08/08/ai-generated-9241538_1280.jpg',
        new Date(),
        5
      ),
      new FaceSnap(
        'My Other Snap',
        'This is a simple face snap application',
        'https://cdn.pixabay.com/photo/2019/09/11/16/09/artificial-intelligence-4469138_1280.jpg',
        new Date(),
        10
      ),
      new FaceSnap(
        'My Last Snap',
        'This is a simple face snap application',
        'https://cdn.pixabay.com/photo/2018/03/15/10/35/website-3227784_1280.jpg',
        new Date(),
        15
      ),
    ];

    this.faceSnaps[1].setLocation('A Dakar');
  }
}
