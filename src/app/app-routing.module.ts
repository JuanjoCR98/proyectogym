import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/auth/login/login.component';
import { PerfilComponent } from './Componentes/auth/perfil/perfil.component';
import { RegistroComponent } from './Componentes/auth/registro/registro.component';
import { EjerciciosComponent } from './Componentes/ejercicios/ejercicios.component';

const routes: Routes = [
  {path: "", component:LoginComponent},
  {path: "registro", component:RegistroComponent},
  {path: "perfil", component:PerfilComponent},
  {path: "ejercicios", component:EjerciciosComponent},

  {path: "**", component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
