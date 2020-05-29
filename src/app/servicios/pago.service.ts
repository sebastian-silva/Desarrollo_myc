import { Injectable } from '@angular/core';
import { Epayco } from 'app/Modelo/epayco';

@Injectable({
  providedIn: 'root'
})
export class PagoService {
    epayco: Epayco = new Epayco();
    constructor() { }

    llenar(estado: String){
      this.epayco.Pago = estado;
    }

    borrar(){
      this.epayco.Pago = '';
    }
}
