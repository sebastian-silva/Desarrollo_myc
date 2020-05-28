import { Injectable } from '@angular/core';
import { Producto } from 'app/Modelo/Producto';
import { HttpClient } from '@angular/common/http';
import { Epayco } from 'app/Modelo/epayco';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagoService {
    epayco: Epayco = new Epayco();
    constructor(private http: HttpClient) { }

    pagar(epayco: Epayco):Observable<Epayco>{
      return this.http.post<Epayco>('https://secure.payco.co/restpagos/pagos/comercios.json', epayco);
    }
}
