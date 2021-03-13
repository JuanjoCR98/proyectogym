import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { accesoUsuario, User } from '../Clases/user';

const url="http://127.0.0.1:8000/user"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  registrar(usuario:User): Observable<any>{
    return this.http.post(url+"/registrar",usuario)
  }

  login(usuario:accesoUsuario): Observable<any>{
    return this.http.post(url+"/login",usuario)
  }

  guardarToken(respuesta:string){
    localStorage.setItem('tokenUser', respuesta)
  }

  editarPerfil(perfil:User): Observable<any>{
    return this.http.put(url,perfil)
  }

  obtenerUser(): Observable<any>{
    return this.http.get(url)
  }

  borrarUser(): Observable<any>{
    return this.http.delete(url)
  }

  isLogged(): boolean{
    return !!localStorage.getItem("tokenUser")
  }
  logOut(){
    localStorage.removeItem("tokenUser")
  }

  leerToken(): string{
    return localStorage.getItem("tokenUser")
  }
}
