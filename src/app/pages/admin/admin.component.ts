import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

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
