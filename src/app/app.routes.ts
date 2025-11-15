import { Routes } from '@angular/router';
import { Contenedor1 } from './contenedor1/contenedor1';
import { Contenedor2 } from './contenedor2/contenedor2';
import { Contenedor3 } from './contenedor3/contenedor3';
import { Contenedor4 } from './contenedor4/contenedor4';

export const routes: Routes = [
    {path:'', component:Contenedor1},
    {path:'contenedor1', component:Contenedor1},
    {path:'contenedor2', component:Contenedor2},
    {path: 'contenedor3', component: Contenedor3},
    {path: 'contenedor4', component: Contenedor4}
];
