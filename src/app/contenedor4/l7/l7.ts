import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-l7',
  imports: [CommonModule],
  templateUrl: './l7.html',
  styleUrl: './l7.css',
})
export class L7 {

  currentFace: string = 'front';

  /** Cambia la cara actual del prisma **/
  show(face: string) {
    this.currentFace = face;
  }
}
