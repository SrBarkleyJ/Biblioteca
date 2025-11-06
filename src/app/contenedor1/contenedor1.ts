import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1 } from '../c1/c1';
import { C2 } from '../c2/c2';
import { C3 } from '../c3/c3';



@Component({
  selector: 'app-contenedor1',
  standalone: true,
  imports: [CommonModule, C1, C2, C3], 
  templateUrl: './contenedor1.html',
  styleUrl: './contenedor1.css',
})
export class Contenedor1 {

}