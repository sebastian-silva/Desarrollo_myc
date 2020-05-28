import { Injectable } from '@angular/core';
import { Desayuno } from 'app/Modelo/Desayuno';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesayunoService {
  desayuno: Desayuno= new Desayuno();
  ruta: string='http://localhost:8080'
  constructor(private http:HttpClient) { }

  guardarDesayuno(desayuno:Desayuno):Observable<Desayuno>{
    return this.http.post<Desayuno>(this.ruta+'/desayunos',desayuno)
  }

  ObtenerDesayunos():Observable<Desayuno[]>{
    return this.http.get<Desayuno[]>(this.ruta+'/desayunos')
  }

}
