import { Injectable } from '@angular/core';
import { Desayuno } from '../Modelo/Desayuno';
import { ProducAdici } from '../Modelo/ProducAdici';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  desayunos: Desayuno[];

  productos: ProducAdici[];
  constructor() { }

  agregardesay(desa:Desayuno){
    this.desayunos.push(desa);
  }

  agregarpro(prod:ProducAdici){
    this.productos.push(prod);
  }
}
