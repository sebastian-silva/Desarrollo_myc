import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdadicciService } from 'app/servicios/prodadicci.service';
import { ProductoService } from 'app/servicios/producto.service';
import { AdicionService } from 'app/servicios/adicion.service';
import { Producto } from 'app/Modelo/Producto';
import { Adicion } from 'app/Modelo/Adicion';
import { ProducAdici } from 'app/Modelo/ProducAdici';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  todosProductos:Array<Producto>;
  todosAdicciones: Array<Adicion>;
  todosProAdiccion: Array<ProducAdici>;
  informacion:Array<String>;
  constructor(private ruta: Router,public proAdiSer: ProdadicciService ,public productoSer: ProductoService,public adicionSer: AdicionService ) { }

  ngOnInit(): void {
    this.productoSer.ObtenerProductos().subscribe((productos)=>{
      this.todosProductos=productos;
    })
    this.adicionSer.ObtenerAdicciones().subscribe((adicciones)=>{
      this.todosAdicciones=adicciones;
    })
    this.proAdiSer.ObtenerTodosProducAdi().subscribe((TodosProduAdi)=>{
      this.todosProAdiccion=TodosProduAdi;
      console.log(this.todosProductos);
      console.log(this.todosAdicciones);
    })  

    for(let i in this.todosProAdiccion ){
      for(let j in this.todosProductos){
        for(let k in this.todosAdicciones){
          let  ProAditempo = new ProducAdici();
          ProAditempo.idAdicion=this.todosAdicciones[k].idAdicion;
          ProAditempo.idProducto=this.todosProductos[j].idProducto;
          console.log(ProAditempo)
          console.log(this.todosProAdiccion[i])
           if(ProAditempo==this.todosProAdiccion[i]){ 
             console.log(this.todosAdicciones[k].nombre , this.todosProductos[j].nombre )
           }
        }
      }
    }
  }
 
}
