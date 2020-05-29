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
  informacion:Array<string>;
  constructor(private ruta: Router,public proAdiSer: ProdadicciService ,public productoSer: ProductoService,public adicionSer: AdicionService ) { }

  ngOnInit(): void {
    this.informacion=new Array;
    this.proAdiSer.ObtenerTodosProducAdi().subscribe((TodosProduAdi)=>{
      this.productoSer.ObtenerProductos().subscribe((productos)=>{
        this.adicionSer.ObtenerAdicciones().subscribe((adicciones)=>{
          for(let i in TodosProduAdi ){
            for(let j in productos){
              for(let k in adicciones){
                let  ProAditempo = new ProducAdici();
                ProAditempo.idAdicion=adicciones[k].idAdicion;
                ProAditempo.idProducto=productos[j].idProducto;
                 if((ProAditempo.idProducto==TodosProduAdi[i].idProducto) &&  (ProAditempo.idAdicion==TodosProduAdi[i].idAdicion) ){ 
                   this.informacion.push(productos[j].nombre + " Con "+adicciones[k].nombre )
                 }
              }
            }
          }
        })
      })
      console.log(this.informacion)

      let fruits: Array<string> = ['Apple', 'Orange', 'Banana']; 

for(var index in fruits)
{ 
    console.log(fruits[index]);  // output: Apple Orange Banana
}

      for(var index in this.informacion )
      { 
       console.log(this.informacion[index]);
      }

    })  
  }
}
