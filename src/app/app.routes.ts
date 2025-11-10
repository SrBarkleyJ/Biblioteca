import { Routes } from '@angular/router';
import { Contenedor1 } from './contenedor1/contenedor1';
import { Contenedor2 } from './contenedor2/contenedor2';

export const routes: Routes = [
    {path:'', component:Contenedor1},
    {path:'contenedor1', component:Contenedor1},
    {path:'contenedor2', component:Contenedor2}
];
