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
  selector: 'app-c3',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './c3.html',
  styleUrl: './c3.css',
})
export class C3 {


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

