import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  /*
  
import * as html2pdf from 'html2pdf.js';
  downloadPDF(){
    const options = {
      filename: 'ejercicios.pdf',
      image: {type: 'jpeg'},
      html2canvas:{},
      jsPDF: {orientation: 'landscape'}
    };
    const content: Element = document.getElementById('contenedorejer');

    html2pdf()
      .from(content)
      .set(options)
      .save();
  }*/
}
