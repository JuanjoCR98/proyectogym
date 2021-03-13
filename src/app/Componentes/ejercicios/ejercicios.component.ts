import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EjerciciosService } from 'src/app/Servicios/ejercicios.service';
import { Ejercicio } from 'src/app/Clases/ejercicio';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {
  ejercicios: Ejercicio[] = []
  constructor(private servicioEjer:EjerciciosService) { }

  @ViewChild('content') content: ElementRef;

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

  downloadPDF(){
    let doc = new jsPDF();

    let specialElementHandlers = {
      '#editor' : function(element,renderer){
        return true;
      }
    };
    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML,15,15,{
      'width' : 190,
      'elementHandlers': specialElementHandlers
    });
    doc.save('ejercicio.pdf');
  }
}
