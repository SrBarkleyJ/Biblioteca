import { Component } from '@angular/core';

@Component({
  selector: 'app-e3',
  imports: [],
  templateUrl: './e3.html',
  styleUrl: './e3.css',
})
export class E3 {
  bubbleCount = Array(7).fill(0);
  
  // Generar transformaciones aleatorias como en el SASS original
  getBubbleTransform(index: number): string {
    const translations = [
      'translate(45px, -32px)',
      'translate(-78px, 12px)',
      'translate(23px, 67px)',
      'translate(-56px, -89px)',
      'translate(89px, 34px)',
      'translate(-12px, -45px)',
      'translate(67px, -78px)'
    ];
    return translations[index] || 'translate(0px, 0px)';
  }
}
