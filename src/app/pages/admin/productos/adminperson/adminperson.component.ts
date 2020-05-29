import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Producto } from 'app/Modelo/Producto';
import { ProductoService } from 'app/servicios/producto.service';
import { Adicion } from 'app/Modelo/Adicion';
import { AdicionService } from 'app/servicios/adicion.service';
import { ProducAdici } from 'app/Modelo/ProducAdici';
import { ProdadicciService } from 'app/servicios/prodadicci.service';

@Component({
  selector: 'app-adminperson',
  templateUrl: './adminperson.component.html',
  styleUrls: ['./adminperson.component.css']
})
export class AdminpersonComponent implements OnInit {
  todosProductos:Array<Producto>;
  todosAdicciones: Array<Adicion>;
  adicionSele:Object={};
  mensajeAgregar:String;
  productoActivo: Producto= new Producto();
  prodAdiTemppo : ProducAdici= new ProducAdici();
  adicionesSelec: Array<Adicion>;
  constructor(private modalService: NgbModal,public productoSer: ProductoService, public adicionSer: AdicionService, public proAdiSer: ProdadicciService) {}

  ngOnInit(): void {  
    this.productoSer.ObtenerProductos().subscribe((productos)=>{
      this.todosProductos=productos;
    })
  }

  ver(modal){
    this.modalService.open(modal, { centered: true });
  }

  valnut(modal,producto){
    this.adicionesSelec= new Array();
    this.modalService.open(modal, { centered: true });
    this.productoActivo=producto
    let actual = new ProducAdici();
    actual.idProducto=this.productoActivo.idProducto
    actual.idAdicion=-1;
    this.proAdiSer.ObtenerProductoAdi(actual).subscribe((produAdi)=>{
      this.adicionSer.ObtenerAdicciones().subscribe((adcciones)=>{
        for(let i in produAdi){
          for(let j in adcciones){
            if(adcciones[j].idAdicion==produAdi[i].idAdicion){
              this.adicionesSelec.push(adcciones[j])
            }
          }
        }
      })
    })
    console.log(this.adicionesSelec)
  }

  verAdic(modal,productoA){
    this.adicionSer.ObtenerAdicciones().subscribe((adicciones)=>{
      this.todosAdicciones=adicciones
    })
    this.modalService.open(modal, { centered: true });
    this.productoActivo=productoA;
  }

  agregarAdi(){
    this.mensajeAgregar="";
    let actual = new Adicion();
    actual=this.adicionSele as Adicion;
    console.log(actual);
    console.log(this.productoActivo);
    if(actual.idAdicion==null){
      this.mensajeAgregar="seleccione un producto"
    }else{
      console.log("Es un producto");    
      this.prodAdiTemppo.idProducto=this.productoActivo.idProducto;
      this.prodAdiTemppo.idAdicion=actual.idAdicion
      this.proAdiSer.ObtenerProductoAdi(this.prodAdiTemppo).subscribe((data)=>{
        console.log("Se agrego");
      })
    }
  }

}
