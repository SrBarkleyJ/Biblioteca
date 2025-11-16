import { Routes } from '@angular/router';
import { Contenedor1 } from './contenedor1/contenedor1';
import { Contenedor2 } from './contenedor2/contenedor2';
import { Contenedor3 } from './contenedor3/contenedor3';
import { Contenedor4 } from './contenedor4/contenedor4';
import { Contenedor5 } from './contenedor5/contenedor5';

export const routes: Routes = [
    {path:'', component:Contenedor1},
    {path:'cards', component:Contenedor1},
    {path:'redes', component:Contenedor2},
    {path: 'loading', component: Contenedor3},
    {path: 'login', component: Contenedor4},
    {path: 'experimental', component: Contenedor5}
];
