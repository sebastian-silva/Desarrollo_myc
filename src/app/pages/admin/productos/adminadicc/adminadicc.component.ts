import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Adicion } from 'app/Modelo/Adicion';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdicionService } from 'app/servicios/adicion.service';
import { HttpClient } from '@angular/common/http';
import { ModeloImagen } from 'app/Modelo/ModeloImagen';
import { UsuarioService } from '../../../../servicios/usuario.service';

@Component({
  selector: 'app-adminadicc',
  templateUrl: './adminadicc.component.html',
  styleUrls: ['./adminadicc.component.css']
})
export class AdminadiccComponent implements OnInit {
  formularioAdicion: FormGroup;
  AdicionTempo: Adicion =new Adicion();
  message: string;
  selectedFile: File;
  public imagePath;
  imageShow: any;
  imagenCargada :Boolean;
  cambio: any
  constructor(private modalService: NgbModal,private formulario:FormBuilder, public adicionSer:AdicionService,private httpClient: HttpClient,public ususervice: UsuarioService) { }

  ngOnInit(): void {
    this.imageShow="assets/img/signo.png";
    this.imagenCargada=false;
    this.formularioAdicion=this.formulario.group({
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

  valnut(modal){
    this.modalService.open(modal, { centered: true });
  }

  cargarImg(event){
    console.log((!this.formularioAdicion.valid) && (!this.imagenCargada))
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

  agregarAdicion(){
    if(this.formularioAdicion.valid){
    this.AdicionTempo=this.formularioAdicion.value as Adicion;
    this.AdicionTempo.modeloImagen=new ModeloImagen();
      //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
        const uploadImageData = new FormData();
        uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);     
        //Make a call to the Spring Boot Application to save the image
        this.httpClient.post('http://localhost:8080/image/upload', uploadImageData, { observe: 'response' })
          .subscribe((response) => {
            if (response.body!=0) {
              this.message = 'Image uploaded successfully';
              this.cambio= response.body;
              this.AdicionTempo.modeloImagen.id= this.cambio;
            } else {
              this.message = 'Image not uploaded successfully';
            }
          }
          );       
      this.adicionSer.guardarUsuario(this.AdicionTempo).subscribe(
        (productoR)=>{
          console.log("se agrego");
          console.log(this.AdicionTempo)
      },
      (error)=>{
        console.log("No se agrego");
      }
      )

    }
  }

}