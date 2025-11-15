import { Component } from '@angular/core';
import { L1 } from "./l1/l1";
import { A2 } from "../contenedor3/a2/a2";
import { L2 } from "./l2/l2";
import { L3 } from "./l3/l3";
import { L4 } from './l4/l4';
import { L5 } from "./l5/l5";
import { L6 } from "./l6/l6";

@Component({
  selector: 'app-contenedor4',
  imports: [L1, L2, L3, L4, L5, L6],
  templateUrl: './contenedor4.html',
  styleUrl: './contenedor4.css',
})
export class Contenedor4 {

}
