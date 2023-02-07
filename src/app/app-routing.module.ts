import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ListagemComponent } from './listagem/listagem.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'listagem', component: ListagemComponent, canActivate: [AuthGuard] },
  { path: 'detalhes/:id', component: DetalhesComponent, canActivate: [AuthGuard] },
  { path: '', component: ListagemComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
