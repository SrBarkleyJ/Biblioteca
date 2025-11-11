import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1 } from '../c1/c1';
import { C2 } from '../c2/c2';
import { C3 } from '../c3/c3';
import { C4 } from '../c4/c4';
import { C5 } from "../c5/c5";
import { C6 } from "../c6/c6";


@Component({
  selector: 'app-contenedor1',
  standalone: true,
  imports: [CommonModule, C1, C2, C3, C4, C5, C6], 
  templateUrl: './contenedor1.html',
  styleUrl: './contenedor1.css',
})
export class Contenedor1 {

}