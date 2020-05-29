import { Injectable } from '@angular/core';
import { OtroDesayuno } from 'app/Modelo/OtroDesayuno';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtrodesaService {
  otroDesa :OtroDesayuno;
  ruta: string='http://localhost:8080'
  constructor(private http:HttpClient) { }

  ObtenerDesaOtro(producDesa:OtroDesayuno[]):Observable<OtroDesayuno[]>{
    return this.http.post<OtroDesayuno[]>(this.ruta+'/producOtro',producDesa)
  }

}
