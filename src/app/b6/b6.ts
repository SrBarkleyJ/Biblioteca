import { Component, ElementRef, ViewChild } from '@angular/core';
import {CdkDragEnd, DragDropModule} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-b6',
  imports: [DragDropModule],
  templateUrl: './b6.html',
  styleUrl: './b6.css',
})

export class B6 {
  @ViewChild('bar') bar!: ElementRef<HTMLDivElement>;

  resetPosition(event: CdkDragEnd) {
    const element = event.source.getRootElement();

    // Obtener delta real del drag
    const deltaX = event.distance.x;
    const deltaY = event.distance.y;

    // Solo reinicia si hubo desplazamiento
    if (Math.abs(deltaX) > 0 || Math.abs(deltaY) > 0) {
      element.style.transform = 'none';
    }
  }
}
