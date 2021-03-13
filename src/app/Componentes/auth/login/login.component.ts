import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Servicios/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mensaje: string = ""
  formLogin = this.fb.group({
    email: ["",[Validators.required,Validators.email]],
    password: ["",[Validators.required]],
  })
  
  constructor(private fb: FormBuilder,private servicioUsuario:UserService, private irHacia:Router) { }

  ngOnInit(): void {
    if(this.servicioUsuario.isLogged()){
      this.irHacia.navigate(['/perfil'])
    }
  }

  login(){
    this.servicioUsuario.login(this.formLogin.value).subscribe(
      respuesta => {
        console.log("Respuesta: "+respuesta.token)
        this.servicioUsuario.guardarToken(respuesta.token)
        this.irHacia.navigate(['/perfil'])
      },
      error => {
        console.log(error)
        this.mensaje = error.error.error
      }
    )
  }

}
