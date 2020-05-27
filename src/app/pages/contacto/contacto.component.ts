import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Correo } from '../../Modelo/Correo';
import { CorreosService } from '../../servicios/correos.service';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  formularioCorreo:FormGroup;
  CorreoTempo: Correo= new Correo();
  mensaje: String = new String();
  carga : Boolean = new Boolean();
  constructor(private formulario:FormBuilder, public envioCorreos:CorreosService ) { }

  ngOnInit(): void {
    this.formularioCorreo=this.formulario.group({
      nombre:['',Validators.required],
      asunto:['',Validators.required],
      correo:['',Validators.compose([
        Validators.required,Validators.email    
      ])],  
      cuerpo:['',Validators.required]
    });
    this.carga=false;
  }

  enviarCorreo(){
    if(this.formularioCorreo.valid){
      this.carga=true;
      this.CorreoTempo=this.formularioCorreo.value as Correo
      this.envioCorreos.enviarCorreo(this.CorreoTempo).subscribe( (String)=>{
        this.carga=false;
        console.log("Se envio correo ")
        this.mensaje="Se mando el correo"
        this.formularioCorreo.reset();
      },
      (error)=>{
        this.carga=false;
        console.log("Ocurrio un error :(")
        console.log(error)
      }  );
      
    }
  }

}
