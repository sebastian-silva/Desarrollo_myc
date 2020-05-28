import { Injectable } from '@angular/core';
import { Correo } from '../Modelo/Correo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CorreosService {
  correo:Correo=new Correo();
  ruta: string='http://localhost:8080'
  constructor(private http:HttpClient) { }

  enviarCorreo(correo:Correo):Observable<Correo>{
    return this.http.post<Correo>(this.ruta+'/correos',correo)
  }

}
