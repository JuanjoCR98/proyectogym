import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Clases/user';
import { UserService } from 'src/app/Servicios/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario:User={}
  editarerr:string
  editarok:string
  temporizador: any
  mostrarEditar: boolean = false;

  constructor(private fb: FormBuilder,private servicioUsuario:UserService,private irHacia:Router) { }

  formPerfil = this.fb.group({
    nombre: [""],
    apellidos: [""],
    email: ["", [Validators.email]],
    password: [""],
    usuario: [""],
    altura: [""],
    peso: [""],
  })

  ngOnInit(): void {
    this.cargarPerfil()
  }

  cargarPerfil(): void {
    this.servicioUsuario.obtenerUser().subscribe(
      respuesta => {
        console.log(respuesta)
        this.usuario = respuesta
      },
      error => console.log(error)
    )
  }

  eliminarUser(): void {
    this.servicioUsuario.borrarUser().subscribe(
      respuesta => {
        console.log(respuesta)
        this.servicioUsuario.logOut()
        this.irHacia.navigate(['/login'])
      },
      error => console.log(error)
    )
  }

  editarUser(): void {
    this.servicioUsuario.editarPerfil(this.formPerfil.value).subscribe(
      respuesta => {
        console.log(respuesta)
        this.cargarPerfil()
        this.mostrarEditar = false
        this.editarerr = null
        this.editarok = "Usuario actualizado correctamente"
        if (this.temporizador == null) {
          this.temporizador = setTimeout(() => {
            this.editarok = null
          }, 3000);
        }
        
      },
      error => {
        this.editarok = null  
        this.editarerr = error.error.error       
        console.log(error)
      }
    )
  }
}
