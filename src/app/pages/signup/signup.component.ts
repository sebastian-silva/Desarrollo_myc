import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../Modelo/Usuario';
import { IngresoService } from '../../servicios/ingreso.service';
import { Router } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  formularioRegistro:FormGroup;
  datosCorrectos:boolean=true;
  textoError: String="";
  usuarioTempo: Usuario= new Usuario();
  isAdministrador:boolean=false;
  check:boolean=false;
  constructor(private formulario:FormBuilder, private registroSer:IngresoService, private ruta:Router, public usuarioSer:UsuarioService) { 
  }

  ngOnInit(): void {
    this.formularioRegistro=this.formulario.group({
      nombre:['',Validators.required],
      fechaNacimiento:['',Validators.required],
      correo:['',Validators.compose([
        Validators.required,Validators.email    
      ])],
      clave:['',Validators.required],
      codigoAdmin:['']
    });
  }

  registro(){
    if(this.formularioRegistro.valid){
      this.usuarioTempo=this.formularioRegistro.value as Usuario
      this.usuarioTempo.puntos=0;
      this.usuarioTempo.idUsuario=-1;
      this.usuarioTempo.estado=0; 
      if((this.formularioRegistro.get('codigoAdmin').value)==123)
      {
        this.usuarioTempo.administrador=true;
      }
      console.log(this.usuarioTempo)
      this.registroSer.guardarUsuario(this.usuarioTempo).subscribe((usuarioR)=>{        
        if(usuarioR.puntos==1){
          this.datosCorrectos=false;
        }else{      
          this.registroSer.ObtenerUsuarios().subscribe((usuarios)=>{
            for(let i in usuarios){
              if(usuarios[i].correo==this.usuarioTempo.correo){
                this.usuarioSer.usuarioActivo=usuarios[i];
                this.ruta.navigateByUrl("home")
              }
            }
          })
        }
      }); 
    }
  }


}
