import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ListagemComponent } from './listagem/listagem.component';

const routes: Routes = [
  { path: 'listagem', component: ListagemComponent },
  { path: 'detalhes/:id', component: DetalhesComponent },
  { path: '', redirectTo: '/listagem', pathMatch: 'full'},
  { path: '**', redirectTo: '/listagem', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
