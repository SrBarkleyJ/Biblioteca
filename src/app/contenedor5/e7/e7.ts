import { Component } from '@angular/core';

@Component({
  selector: 'app-e7',
  templateUrl: './e7.html',
  styleUrl: './e7.css',
})
export class E7 {

  imagenes: string[] = [
    '/assets/chicago.jpg',
    '/assets/city.jpg',
    '/assets/rick.jpg',
    '/assets/goku.jpg',
    '/assets/para2.jpg',
    '/assets/ace.jpg',
    '/assets/gojo.jpg',
    '/assets/luffy.jpg',
    '/assets/para2.jpg'
  ];

  canal: number = 0;
  imagenSeleccionada = this.imagenes[this.canal];

  canalMas() {
    this.canal++;

    if (this.canal >= this.imagenes.length) {
      this.canal = 0; // vuelve al inicio
    }

    this.imagenSeleccionada = this.imagenes[this.canal];
  }

  canalMenos() {
    this.canal--;

    if (this.canal < 0) {
      this.canal = this.imagenes.length - 1; // va al último
    }

    this.imagenSeleccionada = this.imagenes[this.canal];
  }
}
