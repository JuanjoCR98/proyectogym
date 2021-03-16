import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/auth/login/login.component';
import { PerfilComponent } from './Componentes/auth/perfil/perfil.component';
import { RegistroComponent } from './Componentes/auth/registro/registro.component';
import { EjerciciosComponent } from './Componentes/ejercicios/ejercicios.component';
import { HomeComponent } from './Componentes/home/home.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "login", component:LoginComponent},
  {path: "registro", component:RegistroComponent},
  {path: "perfil", component:PerfilComponent},
  {path: "ejercicios", component:EjerciciosComponent},

  {path: "**", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
