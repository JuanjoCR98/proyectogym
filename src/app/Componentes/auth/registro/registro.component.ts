import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Servicios/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  pass: string
  mensaje: string
  registrado: boolean = false
  temporizador: any
  formRegister = this.fb.group({
    nombre: ["",[Validators.required]],
    apellidos: ["",[Validators.required]],
    password: ["", [Validators.required]],
    password2: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    usuario: ["", [Validators.required]],
    fechanac: ["", [Validators.required]],
    altura: [""],
    peso: [""],
    foto: [""],
    imc: [""],
    roles: ["admin"],
  })
  
  constructor(private fb:FormBuilder,private servicioUsuario:UserService,private irHacia: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.pass = this.formRegister.value.password
    if (this.formRegister.value.password != this.formRegister.value.password2) {
      this.mensaje = "No coinciden las contraseñas"
    }else if(this.pass.length<4){
      this.mensaje = "La contraseña debe de tener al menos 4 caracteres"
    }
    else {
      this.servicioUsuario.registrar(this.formRegister.value).subscribe(
        respuesta => {
          console.log(respuesta)
          this.registrado = true
          this.mensaje = null
          this.servicioUsuario.guardarToken(respuesta)
          if (this.temporizador == null) {
            this.temporizador = setTimeout(() => {
              this.registrado = false
              this.irHacia.navigate(["/login"])
            }, 2000);

          }
        },
        error => {
          console.log(error)
          console.log(error.error.error)
          this.mensaje = error.error.error
        }
      )

    }
  }

}
