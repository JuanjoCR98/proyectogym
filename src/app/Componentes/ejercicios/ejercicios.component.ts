import { Component, OnInit } from '@angular/core';
import { EjerciciosService } from 'src/app/Servicios/ejercicios.service';
import { Ejercicio } from 'src/app/Clases/ejercicio';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {
  ejercicios: Ejercicio[] = []
  constructor(private servicioEjer:EjerciciosService) { }

  ngOnInit(): void {
    this.obtenerEjercicios();
  }

  obtenerEjercicios(){
    this.servicioEjer.verEjercicios().subscribe(
      respuesta => {
        console.log(respuesta)
        this.ejercicios = respuesta
      },
      error => console.log(error)
    )
  }

}
