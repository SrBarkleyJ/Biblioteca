import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-l5',
  imports: [CommonModule],
  templateUrl: './l5.html',
  styleUrl: './l5.css',
})
export class L5 {

  currentFace: string = 'front'; // front, right, left, back

  /** Cambia la cara actual del prisma **/
  show(face: string) {
    this.currentFace = face;
  }
}
