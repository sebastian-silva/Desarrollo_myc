import { Injectable } from '@angular/core';
import {Usuario} from '../Modelo/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarioActivo: Usuario= new Usuario();
  
  constructor() { 
    this.usuarioActivo.idUsuario=0;
    this.usuarioActivo.nombre="";
    this.usuarioActivo.puntos=0;
    this.usuarioActivo.correo="";
    this.usuarioActivo.clave="";
    this.usuarioActivo.fechaNacimiento= null;
  }
}
