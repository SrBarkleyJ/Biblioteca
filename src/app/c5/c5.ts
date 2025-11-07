import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


interface CapturaItem {
  src: string | null;
  alt: string;
  label: string;
}


interface ImagenItem {
  name: string;
  image: string;
}

@Component({
  selector: 'app-c5',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './c5.html',
  styleUrl: './c5.css',
})
export class C5 {

  imagenes: ImagenItem[] = [
    { name: 'Gojo', image: 'assets/gojo.jpg' },
    { name: 'Ace', image: 'assets/ace.jpg' },
    { name: 'Goku', image: 'assets/goku.jpg' },
    { name: 'Rick', image: 'assets/rick.jpg' },
    { name: 'Luffy', image: 'assets/luffy.jpg' },
    { name: 'Joker', image: 'assets/joker.jpg' }
  ];
  capturas: CapturaItem[] = [
    { src: 'assets/imagenes/code4html.png', alt: 'Código HTML', label: 'HTML' },
    { src: 'assets/imagenes/code5css1.png', alt: 'CSS Parte 1', label: 'CSS 1' },
    { src: 'assets/imagenes/code5css2.png', alt: 'CSS Parte 2', label: 'CSS 2' },
    { src: 'assets/imagenes/code5css3.png', alt: 'CSS Parte 3', label: 'CSS 3' },
 ];

  capturaSeleccionada: number | null = null;

  seleccionarCaptura(index: number) {
    this.capturaSeleccionada = this.capturaSeleccionada === index ? 0 : index;
  }

  cerrarCaptura() {
    this.capturaSeleccionada = null;
  }
}

