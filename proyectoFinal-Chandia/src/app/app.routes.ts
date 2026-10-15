import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Productos } from './pages/productos/productos';
import { Nosotros } from './pages/nosotros/nosotros';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'inicio', component: Inicio },
    { path: 'destinos', component: Productos },
    { path: 'nosotros', component: Nosotros },
    { path: 'contacto', component: Contacto },


];
