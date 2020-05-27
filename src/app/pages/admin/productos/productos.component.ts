import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../servicios/usuario.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(public usuarioSer: UsuarioService) { }

  ngOnInit(): void {
  }

  esAdmin() {
    if(this.usuarioSer.usuarioActivo.idUsuario==1) {
        return true;
    }
    else {
        return false;
    }
  }
}
