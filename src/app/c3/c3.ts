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
  selector: 'app-c3',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './c3.html',
  styleUrl: './c3.css',
})
export class C3 {

  imagenes: ImagenItem[] = [
    { name: 'Gojo', image: 'assets/gojo.jpg' },
    { name: 'Ace', image: 'assets/ace.jpg' },
    { name: 'Goku', image: 'assets/goku.jpg' },
    { name: 'Rick', image: 'assets/rick.jpg' },
    { name: 'Luffy', image: 'assets/luffy.jpg' },
    { name: 'Joker', image: 'assets/joker.jpg' }
  ];

  capturas: CapturaItem[] = [
    { src: 'assets/imagenes/code3html1.png', alt: 'Código HTML', label: 'HTML' },
    { src: 'assets/imagenes/code3css1.png', alt: 'CSS Parte 1', label: 'CSS 1' },
    { src: 'assets/imagenes/code3css2.png', alt: 'CSS Parte 2', label: 'CSS 2' },
    { src: 'assets/imagenes/code3css3.png', alt: 'CSS Parte 3', label: 'CSS 3' },
    { src: 'assets/imagenes/code3css4.png', alt: 'CSS Parte 4', label: 'CSS 4' },
    { src: 'assets/imagenes/code3css5.png', alt: 'CSS Parte 5', label: 'CSS 5' },
    { src: 'assets/imagenes/code3css6.png', alt: 'CSS Parte 6', label: 'CSS 6' },
    { src: 'assets/imagenes/code3css7.png', alt: 'CSS Parte 7', label: 'CSS 7' },
    { src: 'assets/imagenes/code3ts.png', alt: 'TypeScript', label: 'TypeScript' }
  ];

  capturaSeleccionada: number | null = null;

  seleccionarCaptura(index: number) {
    this.capturaSeleccionada = this.capturaSeleccionada === index ? 0 : index;
  }

  cerrarCaptura() {
    this.capturaSeleccionada = null;
  }
}

