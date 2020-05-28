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
  todosOtrosProductos:Array<OtrosProductos>;
  otroProductoTempo: OtrosProductos= new OtrosProductos();
  desayunoActivo: Desayuno= new Desayuno();
  productoSeleccionado: Object={};
  otroProSeleccionado : Object={};
  isSeleccionado : Boolean =false;
  constructor(private modalService: NgbModal,private formularioAgregar:FormBuilder,private formularioOtro:FormBuilder,private httpClient: HttpClient, public desaSer:DesayunoService, public otroPSer:OtrosProductosService,public producSer: ProductoService ) { }

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
    this.modalService.open(modal, { centered: true });
    this.desayunoActivo=desayuA
  }

  agregarOtroP(modal,desayuA){
    this.modalService.open(modal, { centered: true });
    this.desayunoActivo=desayuA
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
  console.log(this.productoSeleccionado[0])
  if(this.productoSeleccionado[0]=="h"){
    console.log("No es un producto");
    this.isSeleccionado=false;
  }else{
    console.log("Es un producto");
    this.isSeleccionado=true;
  }
}

verOtroP(){
  if(this.otroProSeleccionado[0]=="h"){
    console.log("No un otro producto");
    this.isSeleccionado=false
  }else{
    console.log(" Es otro producto");
    this.isSeleccionado=true;
  }
}

}
