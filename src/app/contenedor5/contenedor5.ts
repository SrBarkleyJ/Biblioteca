import { Component } from '@angular/core';
import { E1 } from "./e1/e1";
import { E2 } from "./e2/e2";
import { E3 } from "./e3/e3";
import { E5 } from "./e5/e5";
import { E6 } from "./e6/e6";
import { E7 } from "./e7/e7";

@Component({
  selector: 'app-contenedor5',
  imports: [E1, E2, E3, E5, E6, E7],
  templateUrl: './contenedor5.html',
  styleUrl: './contenedor5.css',
})
export class Contenedor5 {



}
