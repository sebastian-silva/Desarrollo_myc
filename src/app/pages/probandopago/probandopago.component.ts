import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { ActivatedRoute, Router } from '@angular/router';
import { PagoService } from '../../servicios/pago.service';

@Component({
  selector: 'app-probandopago',
  templateUrl: './probandopago.component.html',
  styleUrls: ['./probandopago.component.css']
})

export class ProbandopagoComponent implements OnInit {
  merchantId: Number;
  accountId: Number;
  description: string;
  referenceCode: string;
  amount: Number;
  tax: Number;
  taxReturnBase: Number;
  currency: string;
  signature: any;
  test: Number;
  buyerEmail: string;
  responseUrl: string;
  confirmationUrl: string;
  mira: string;
  transc: string;
  pars: string;

  constructor(private route: ActivatedRoute,private ruta: Router,public pagoServ: PagoService){
    this.route.queryParams.subscribe(params => {
        console.log(params.merchant_name);
        console.log(params.merchantId);
        //estado
        console.log(params.transactionState);
        //precio
        console.log(params.TX_VALUE);
        
        this.transc = '';
        if (params.transactionState==4) {
          this.transc = 'Aprobada';
        }else if(params.transactionState==6){
          this.transc = 'Rechazada';
        }else if(params.transactionState==7){
          this.transc = 'En espera';
        }
    });
  }

  ngOnInit(): void {
    this.merchantId = 508029;
    this.accountId = 512321;
    this.currency = 'COP';
    this.buyerEmail = 'test@test.com';
    this.test = 1;
    this.description = 'Pan';
    this.referenceCode = 'fact0020';
    this.amount = 20000;
    this.tax = 16806;
    this.taxReturnBase = 3193;
    
    const md5 = new Md5();
    this.mira = '4Vj8eK4rloUd272L48hsrarnUA~'+this.merchantId.toString()+'~'+this.referenceCode+'~'+this.amount.toString()+'~'+this.currency;
    this.pars = this.mira;
    this.signature = md5.appendStr(this.mira).end();
    console.log(this.route.root)
    
    this.responseUrl = 'http://localhost:4200/#/carrito';
    this.confirmationUrl = 'http://localhost:4200/#/respuestapag';
    console.log(this.responseUrl);

    //otra pagina
    if(this.transc === ''){
      
    }else{
      // this.pagoServ.epayco.Pago = this.transc;
      // this.ruta.navigateByUrl("respuestapag");
    }
  }
}