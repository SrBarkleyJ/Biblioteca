import { Component } from '@angular/core';
import { B1 } from "../b1/b1";
import { B2 } from "../b2/b2";
import { B3 } from "../b3/b3";
import { B4 } from "../b4/b4";
import { B5 } from "../b5/b5";
import {B7} from "../b7/b7"
@Component({
  selector: 'app-contenedor2',
  imports: [B1, B2, B3, B4, B5, B7],
  templateUrl: './contenedor2.html',
  styleUrl: './contenedor2.css',
})
export class Contenedor2 {

}

