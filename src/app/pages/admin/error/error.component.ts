import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../servicios/usuario.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(public ususervice: UsuarioService) { }

  ngOnInit(): void {
  }

}
