import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjerciciosComponent } from './Componentes/ejercicios/ejercicios.component';
import { NavegacionComponent } from './Componentes/navegacion/navegacion.component';
import { LoginComponent } from './Componentes/auth/login/login.component';
import { PerfilComponent } from './Componentes/auth/perfil/perfil.component';
import { RegistroComponent } from './Componentes/auth/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnviarTokenInterceptor } from './auth/enviar-token.interceptor';
import { HomeComponent } from './Componentes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EjerciciosComponent,
    NavegacionComponent,
    LoginComponent,
    PerfilComponent,
    RegistroComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{provide:LOCALE_ID, useValue:"es"},
  {provide:HTTP_INTERCEPTORS,useClass:EnviarTokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
