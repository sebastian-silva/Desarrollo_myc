import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PagoService } from '../../servicios/pago.service';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-respuestapag',
  templateUrl: './respuestapag.component.html',
  styleUrls: ['./respuestapag.component.css']
})
export class RespuestapagComponent implements OnInit {

  estado: string;
  constructor(private route: ActivatedRoute,public pagoServ: PagoService) { 
                           
  }

  ngOnInit(): void {
    this.estado = this.pagoServ.epayco.Pago;
  }

  aprob(){
    if(this.estado==='Aprobada'){
      return true;
    }
  }

  rechaz(){
    if(this.estado==='Rechazada'){
      return true;
    }
  }

  Espera(){
    if(this.estado==='En espera'){
      return true;
    }
  }
}
