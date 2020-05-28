import { Component, OnInit} from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Producto } from 'app/Modelo/Producto';
import { ProductoService } from 'app/servicios/producto.service';
import { ModeloImagen } from 'app/Modelo/ModeloImagen';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adminprod',
  templateUrl: './adminprod.component.html',
  styleUrls: ['./adminprod.component.css']
})
export class AdminprodComponent implements OnInit {
  formularioProducto: FormGroup;
  productoTempo: Producto =new Producto();
  message: string;
  selectedFile: File;
  public imagePath;
  imageShow: any;
  imagenCargada :Boolean;
  cambio: any
  constructor(private modalService: NgbModal, private formulario:FormBuilder, public productoSer:ProductoService,private httpClient: HttpClient ) {}
  ngOnInit(): void {
    this.imageShow="assets/img/signo.png";
    this.imagenCargada=false;
    this.formularioProducto=this.formulario.group({
      nombre:['',Validators.required],
      precio:['',Validators.required],
      grasa:['',Validators.required],
      azucar:['',Validators.required],
      sal:['',Validators.required],
      proteina:['',Validators.required]
    });
  }

  ver(modal){
    this.modalService.open(modal, { centered: true });
  }

  cargarImg(event){
    console.log((!this.formularioProducto.valid) && (!this.imagenCargada))
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
    if(this.formularioProducto.valid){
    this.productoTempo=this.formularioProducto.value as Producto;
    this.productoTempo.modeloImagen=new ModeloImagen();
      //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
        const uploadImageData = new FormData();
        uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);     
        //Make a call to the Spring Boot Application to save the image
        this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
          .subscribe((response) => {
            if (response.body!=0) {
              this.message = 'Image uploaded successfully';
              this.cambio= response.body;
              this.productoTempo.modeloImagen.id= this.cambio;
            } else {
              this.message = 'Image not uploaded successfully';
            }
          }
          );    
      console.log(this.productoTempo);    
      this.productoSer.guardarUsuario(this.productoTempo).subscribe(
        (productoR)=>{
          console.log("se agrego");
      },
      (error)=>{
        console.log("No se agrego");
      }
      )

    }
  }

}

