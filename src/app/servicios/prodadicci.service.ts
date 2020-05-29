import { Injectable } from '@angular/core';
import { ProducAdici } from 'app/Modelo/ProducAdici';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdadicciService {
  producAdi: ProducAdici= new ProducAdici();
  ruta: string='http://localhost:8080'
  constructor(private http:HttpClient) { }

  ObtenerProductoAdi(producAdi:ProducAdici[]):Observable<ProducAdici[]>{
    return this.http.post<ProducAdici[]>(this.ruta+'/producAdicion',producAdi)
  }

  ObtenerTodosProducAdi():Observable<ProducAdici[]>{
    return this.http.get<ProducAdici[]>(this.ruta+'/producAdicion')
  }

}
