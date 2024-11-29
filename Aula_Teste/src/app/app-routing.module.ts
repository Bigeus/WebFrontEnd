import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { PaiComponent } from './pai/pai.component';
import { Filho1Component } from './pai/filho1/filho1.component';
import { Filho2Component } from './pai/filho2/filho2.component';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { ClientesComponent } from './clientes/clientes.component';

const routes: Routes = [
  {path: 'primeiro', component: FirstComponentComponent},
  {path: 'pai', component: PaiComponent, children: [
    {path: 'filho1', component: Filho1Component},
    {path: 'filho2', component: Filho2Component},
  ]},
  {path: 'diretivas', component: DiretivasEstruturaisComponent},
  {path: 'clientes', component: ClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
