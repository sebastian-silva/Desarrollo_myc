import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PagoService } from '../../servicios/pago.service';

@Component({
  selector: 'app-respuestapag',
  templateUrl: './respuestapag.component.html',
  styleUrls: ['./respuestapag.component.css']
})
export class RespuestapagComponent implements OnInit {

  estado: Number;
  constructor(private route: ActivatedRoute,public pagoServ: PagoService) { 
                           
  }

  ngOnInit(): void {
    this.estado = this.pagoServ.epayco.Pago;
  }

}
