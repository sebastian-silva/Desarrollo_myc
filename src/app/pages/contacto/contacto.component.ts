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
  }

  enviarCorreo(){
    if(this.formularioCorreo.valid){
      this.CorreoTempo=this.formularioCorreo.value as Correo

      this.envioCorreos.enviarCorreo(this.CorreoTempo).subscribe((String)=>{
        console.log("Se envio correo ")
        this.mensaje="Se mando el correo"
      });
      
    }
  }

}
