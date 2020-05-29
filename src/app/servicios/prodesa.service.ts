import { Injectable } from '@angular/core';
import { ProductoDesa } from 'app/Modelo/ProductoDesa';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdesaService {
  producDesa: ProductoDesa= new ProductoDesa();
  ruta: string='http://localhost:8080'
  constructor(private http:HttpClient) { }

  ObtenerProductos(producDesa:ProductoDesa[]):Observable<ProductoDesa[]>{
    return this.http.post<ProductoDesa[]>(this.ruta+'/producDesa',producDesa)
  }

}
