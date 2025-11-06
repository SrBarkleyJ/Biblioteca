import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface CapturaItem {
  src: string;
  alt: string;
  label: string;
}
interface ImagenItem {
  name: string;
  image: string;
}

@Component({
  selector: 'app-c2',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './c2.html',
  styleUrl: './c2.css',
})
export class C2 {
  imagenes: ImagenItem[] = [
    { name: 'Gojo', image: 'assets/gojo.jpg' },
    { name: 'Ace', image: 'assets/ace.jpg' },
    { name: 'Goku', image: 'assets/goku.jpg' },
    { name: 'Rick', image: 'assets/rick.jpg' },
    { name: 'Luffy', image: 'assets/luffy.jpg' },
    { name: 'Joker', image: 'assets/joker.jpg' }
  ];

  capturas: CapturaItem[] = [
    { src: 'assets/imagenes/code2html1.png', alt: 'Código HTML', label: 'HTML' },
    { src: 'assets/imagenes/code2css1.png', alt: 'CSS Parte 1', label: 'CSS 1' },
    { src: 'assets/imagenes/code2css2.png', alt: 'CSS Parte 2', label: 'CSS 2' },
     { src: 'assets/imagenes/code2css3.png', alt: 'CSS Parte 3', label: 'CSS 3' },
    { src: 'assets/imagenes/code2ts.png', alt: 'TypeScript', label: 'TypeScript' }
  ];

  capturaSeleccionada: number | null = null;

  seleccionarCaptura(index: number) {
    this.capturaSeleccionada = this.capturaSeleccionada === index ? null : index;
  }

  cerrarCaptura() {
    this.capturaSeleccionada = null;
  }
}