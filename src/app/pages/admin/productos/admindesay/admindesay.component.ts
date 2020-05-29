import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators,FormsModule  } from '@angular/forms';
import { Desayuno } from 'app/Modelo/Desayuno';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { ModeloImagen } from 'app/Modelo/ModeloImagen';
import { HttpClient } from '@angular/common/http';
import { DesayunoService } from 'app/servicios/desayuno.service';
import { OtrosProductosService } from 'app/servicios/otros-productos.service';
import { OtrosProductos } from 'app/Modelo/OtrosProductos';
import { Producto } from 'app/Modelo/Producto';
import { ProductoService } from 'app/servicios/producto.service';
import { ProductoDesa } from 'app/Modelo/ProductoDesa';
import { ProdesaService } from 'app/servicios/prodesa.service';
import { OtroDesayuno } from 'app/Modelo/OtroDesayuno';
import { OtrodesaService } from 'app/servicios/otrodesa.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-admindesay',
  templateUrl: './admindesay.component.html',
  styleUrls: ['./admindesay.component.css']
})
export class AdmindesayComponent implements OnInit{
  formularioDesayuno: FormGroup;
  formularioOtroP: FormGroup;
  desayunoTempo: Desayuno = new Desayuno();
  selectedFile: File;
  public imagePath;
  imageShow: any;
  imagenCargada :Boolean;
  cambio: any;
  message: string;
  todosDesayunos:Array<Desayuno>;
  todosProductos:Array<Producto>;
  productosSelec:Array<Producto>;
  otrosProductosSelec: Array<OtrosProductos>;
  todosOtrosProductos:Array<OtrosProductos>;
  otroProductoTempo: OtrosProductos= new OtrosProductos();
  desayunoActivo: Desayuno= new Desayuno();
  productoSeleccionado: Object={};
  otroProSeleccionado : Object={};
  isSeleccionado : Boolean =false;
  mensajeAgregar: String="";
  productoDesaTempo: ProductoDesa= new ProductoDesa();
  otroProDesaTempo: OtroDesayuno= new OtroDesayuno();
  constructor(private modalService: NgbModal,private formularioAgregar:FormBuilder,private formularioOtro:FormBuilder,private httpClient: HttpClient, public desaSer:DesayunoService, public otroPSer:OtrosProductosService,public producSer: ProductoService, public proDesaSer:ProdesaService, public otroDesaSer:OtrodesaService ) { }

  ngOnInit(): void {
    this.imageShow="assets/img/signo.png";
    this.imagenCargada=false;
    this.desaSer.ObtenerDesayunos().subscribe((desayunos)=>{
    this.todosDesayunos=desayunos;
    })
    this.formularioDesayuno=this.formularioAgregar.group({
      nombre:['',Validators.required],
      precio:['',Validators.required],
      grasa:['',Validators.required],
      azucar:['',Validators.required],
      sal:['',Validators.required],
      proteina:['',Validators.required]
    });
    this.formularioOtroP=this.formularioAgregar.group({
      nombre:['',Validators.required],
      precio:['',Validators.required]
    });
  }

  ver(modal){
    this.modalService.open(modal, { centered: true });
  }

  valnut(modal){
    this.modalService.open(modal, { centered: true });
  }

  tablaProductos(modal){
    this.modalService.open(modal, { centered: true });
    this.producSer.ObtenerProductos().subscribe((productos)=>{
      this.todosProductos=productos;
    })
  }

  tablaOtrosProductos(modal){
    this.modalService.open(modal, { centered: true });
    this.otroPSer.ObtenerOtrosP().subscribe((OtrosP)=>{
      this.todosOtrosProductos=OtrosP;
    })
  }

  agregarP(modal,desayuA){
    this.productosSelec= new Array();
    this.modalService.open(modal, { centered: true });
    this.desayunoActivo=desayuA
    let actual = new ProductoDesa();
    actual.idDesayuno=this.desayunoActivo.idDesayuno
    actual.idProducto=-1;
    this.proDesaSer.ObtenerProductos(actual).subscribe((produDesas)=>{
      this.producSer.ObtenerProductos().subscribe((productos)=>{
        for(let i in produDesas){
          for(let j in productos){
            if(productos[j].idProducto==produDesas[i].idProducto){
              console.log(productos[j]);
              this.productosSelec.push(productos[j])
            }
          }
        }
      })
    })
    console.log(this.productosSelec)
  }

  agregarOtroP(modal,desayuA){
    this.otrosProductosSelec=new Array();
    this.modalService.open(modal, { centered: true });
    this.desayunoActivo=desayuA
    let actual = new OtroDesayuno();
    actual.idDesayuno=this.desayunoActivo.idDesayuno
    actual.idOtroProducto=-1;
    this.otroDesaSer.ObtenerDesaOtro(actual).subscribe((otroDesa)=>{
      this.otroPSer.ObtenerOtrosP().subscribe((otrosP)=>{
        for(let i in otroDesa){
          for(let j in otrosP){
            if(otrosP[j].idOtroProducto==otroDesa[i].idOtroProducto){
              console.log(otrosP[j]);
              this.otrosProductosSelec.push(otrosP[j])
            }
          }
        }  
      })
    })
  }

  cargarImg(event){
    if(event.target.files.length==0)
    return;
    var mineType=event.target.files[0].type;
    if(mineType.match(/image\/*/)==null){
      this.message="Solo se admiten imagenes";
      return;
    }
    this.imagenCargada=true;
    console.log(this.imagenCargada)
    this.selectedFile = event.target.files[0];
    var reader= new FileReader();
    this.imagePath = event.target.files;
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=(_e)=>{
      this.imageShow=reader.result;
    }
  }

  agregarProducto(){
    if(this.formularioDesayuno.valid){
    this.desayunoTempo=this.formularioDesayuno.value as Desayuno;
    this.desayunoTempo.modeloImagen=new ModeloImagen();
      //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
        const uploadImageData = new FormData();
        uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);     
        //Make a call to the Spring Boot Application to save the image
        this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
          .subscribe((response) => {
            if (response.body!=0) {
              this.message = 'Image uploaded successfully';
              this.cambio= response.body;
              this.desayunoTempo.modeloImagen.id= this.cambio;
            } else {
              this.message = 'Image not uploaded successfully';
            }
          }
          );    
      console.log(this.desayunoTempo);    
      this.desaSer.guardarDesayuno(this.desayunoTempo).subscribe(
        (desayunoR)=>{
          console.log("se agrego");
      },
      (error)=>{
        console.log("No se agrego");
      }
      )

    }
  }

  agregarOtroProducto(){
    if(this.formularioOtroP.valid){
      this.otroProductoTempo= this.formularioOtroP.value as OtrosProductos
      this.otroPSer.guardarOtroP(this.otroProductoTempo).subscribe(
        (otroPR)=>{
          console.log("se agrego");
      },
      (error)=>{
        console.log("No se agrego");
      }
     )
  }
}

verPro(){
  this.mensajeAgregar="";
  let actual = new Producto();
  actual=this.productoSeleccionado as Producto;
  if(actual.idProducto==null){
    this.mensajeAgregar="seleccione un producto"
  }else{
    console.log("Es un producto");
    console.log(actual)
    console.log(this.desayunoActivo)
    this.productoDesaTempo.idDesayuno=this.desayunoActivo.idDesayuno
    this.productoDesaTempo.idProducto=actual.idProducto
    this.proDesaSer.ObtenerProductos(this.productoDesaTempo).subscribe((data)=>{
      console.log("Se agrego");
    })
  }
}

verOtroP(){
  this.mensajeAgregar="";
  let actual = new OtrosProductos();
  actual=this.otroProSeleccionado as OtrosProductos;
  if(actual.idOtroProducto==null){
    this.mensajeAgregar="seleccione un producto"
  }else{
    console.log(" Es otro producto");
    this.isSeleccionado=true;
    this.otroProDesaTempo.idDesayuno=this.desayunoActivo.idDesayuno
    this.otroProDesaTempo.idOtroProducto=actual.idOtroProducto
    this.otroDesaSer.ObtenerDesaOtro(this.otroProDesaTempo).subscribe((data)=>{
      console.log("Se agrego")  
    })
    
  }
}

}
