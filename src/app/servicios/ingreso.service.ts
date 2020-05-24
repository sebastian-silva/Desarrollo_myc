import { Injectable } from '@angular/core';
import { Usuario } from '../Modelo/Usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {
  usuario:Usuario=new Usuario();
  ruta: string='http://localhost:8080'
  constructor(private http:HttpClient) { }

  ObtenerUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.ruta+'/usuarios')
  }

  guardarUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.ruta+'/usuarios',usuario)
  }

  comprobarUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.ruta+'/usuarios',usuario)
  }
  
}
