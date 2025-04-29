// src/app/autos/autos.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoAutosComponent } from './pages/listado-autos/listado-autos.component';

const routes: Routes = [
  // Cuando entres a /autos, muestra ListadoAutosComponent
  { path: '', component: ListadoAutosComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AutosModule {}
