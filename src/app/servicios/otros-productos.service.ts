import { Injectable } from '@angular/core';
import { OtrosProductos } from 'app/Modelo/OtrosProductos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtrosProductosService {
  otroP: OtrosProductos= new OtrosProductos();
  ruta: string='http://localhost:8080'

  constructor(private http:HttpClient) { }

  guardarOtroP(otroP:OtrosProductos):Observable<OtrosProductos>{
    return this.http.post<OtrosProductos>(this.ruta+'/Otrosproductos',otroP)
  }

  ObtenerOtrosP():Observable<OtrosProductos[]>{
    return this.http.get<OtrosProductos[]>(this.ruta+'/Otrosproductos')
  }
}
