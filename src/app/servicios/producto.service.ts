import { Injectable } from '@angular/core';
import { Producto } from 'app/Modelo/Producto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  producto: Producto = new Producto();
  ruta: string='http://localhost:8080'
  constructor(private http:HttpClient) { }

  guardarUsuario(producto:Producto):Observable<Producto>{
    return this.http.post<Producto>(this.ruta+'/productos',producto)
  }
}
