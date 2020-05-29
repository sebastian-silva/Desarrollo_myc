import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../servicios/usuario.service';

@Component({
  selector: 'app-primpag',
  templateUrl: './primpag.component.html',
  styleUrls: ['./primpag.component.css']
})
export class PrimpagComponent implements OnInit {

  constructor(public ususervice: UsuarioService) { }

  ngOnInit(): void {
  }

}
