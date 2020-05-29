import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../../servicios/carrito.service';
import { Desayuno } from '../../Modelo/Desayuno';

@Component({
  selector: 'app-desayuno',
  templateUrl: './desayuno.component.html',
  styleUrls: ['./desayuno.component.css']
})
export class DesayunoComponent implements OnInit {

  lista:string[]=["hola","que","tal","estas"];
  constructor(private ruta: Router, public carservice: CarritoService) { }

  ngOnInit(): void {
  }

  desay:Desayuno;
  agcar(desay:Desayuno){
    this.carservice.agregardesay(desay);
  }
}
