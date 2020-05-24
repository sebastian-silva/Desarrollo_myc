import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../servicios/usuario.service';
import { Usuario } from '../../../Modelo/Usuario';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  usuarioA: Usuario= new Usuario();
  constructor(public usuarioSer:UsuarioService) { }

  ngOnInit(): void {
    this.usuarioA = this.usuarioSer.usuarioActivo;
    this.usuarioA.nombre
    console.log(this.usuarioA.nombre)
  }

}
