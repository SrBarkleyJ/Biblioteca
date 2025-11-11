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
  description: string
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
  { 
    name: 'Gojo', 
    image: 'assets/gojo.jpg',
    description: 'El hechicero más poderoso del universo Jujutsu, conocido por su confianza y técnica Ilimitada.'
  },
  { 
    name: 'Ace', 
    image: 'assets/ace.jpg',
    description: 'El hermano mayor de Luffy, portador de la llama Mera Mera no Mi y símbolo de libertad pirata.'
  },
  { 
    name: 'Goku', 
    image: 'assets/goku.jpg',
    description: 'El Saiyan criado en la Tierra, amante de los desafíos y defensor incansable del universo.'
  },
  { 
    name: 'Rick', 
    image: 'assets/rick.jpg',
    description: 'Un científico genio, excéntrico y autodestructivo que viaja por el multiverso con su nieto Morty.'
  },
  { 
    name: 'Luffy', 
    image: 'assets/luffy.jpg',
    description: 'El capitán de los Sombrero de Paja, con un sueño inquebrantable de convertirse en el Rey de los Piratas.'
  },
  { 
    name: 'Joker', 
    image: 'assets/joker.jpg',
    description: 'El agente del caos más temido de Gotham, maestro de la anarquía y la locura impredecible.'
  }
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

