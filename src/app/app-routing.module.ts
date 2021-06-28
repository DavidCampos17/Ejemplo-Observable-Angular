import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormularioComponent} from './formulario/formulario.component'
import { ListaComponent } from './lista/lista.component';
const routes: Routes = [
  {path:'Formulario', component:FormularioComponent},
  {path:'Lista', component:ListaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
