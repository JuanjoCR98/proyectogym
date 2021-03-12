import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const url = "http://127.0.0.1:8000/ejercicios"


@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {
  constructor(private http:HttpClient) { }

  verEjercicios(): Observable<any>{
    return this.http.get(url)
  }
}
