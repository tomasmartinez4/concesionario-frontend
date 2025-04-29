import { Routes } from '@angular/router';
import { ListadoAutosComponent } from './autos/pages/listado-autos/listado-autos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'autos', pathMatch: 'full' },
  { path: 'autos', component: ListadoAutosComponent }
];
