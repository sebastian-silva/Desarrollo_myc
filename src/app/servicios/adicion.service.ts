import { Injectable } from '@angular/core';
import { Adicion } from 'app/Modelo/Adicion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdicionService {
  adicion: Adicion = new Adicion();
  ruta: string='http://localhost:8080'
  constructor(private http:HttpClient) { }

  guardarUsuario(adicion:Adicion):Observable<Adicion>{
    return this.http.post<Adicion>(this.ruta+'/adiciones',adicion)
  }

  ObtenerAdicciones():Observable<Adicion[]>{
    return this.http.get<Adicion[]>(this.ruta+'/adiciones')
  }
}
