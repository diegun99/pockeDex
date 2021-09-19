import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { TablaComponent } from './componentes/tabla/tabla.component';



const routes: Routes = [
  {path: 'home', component: TablaComponent},
  {path: 'pokeDetail/:id', component: DetalleComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
