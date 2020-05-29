import { Component, OnInit } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-probandopago',
  templateUrl: './probandopago.component.html',
  styleUrls: ['./probandopago.component.css']
})

export class ProbandopagoComponent implements OnInit {
  merchantId: Number;
  accountId: Number;
  description: String;
  referenceCode: String;
  amount: Number;
  tax: Number;
  taxReturnBase: Number;
  currency: String;
  signature: String;
  test: Number;
  buyerEmail: String;
  responseUrl: String;
  confirmationUrl: String;
  mira: String;

  constructor(private route: ActivatedRoute){
    this.route.queryParams.subscribe(params => {
      console.log(params.merchant_name);
      console.log(params.merchantId);
  });
 
  }

  ngOnInit(): void {
    this.merchantId = 508029;
    this.accountId = 512321;
    this.currency = 'COP';
    this.buyerEmail = 'test@test.com';
    this.test = 1;
    this.description = 'Pan';
    this.referenceCode = 'fact005';
    this.amount = 20000;
    this.tax = 16806;
    this.taxReturnBase = 3193;

    const md5 = new Md5();
    this.mira = '4Vj8eK4rloUd272L48hsrarnUA~'+this.merchantId+'~'+this.referenceCode+'~'+this.amount+'~'+this.currency;
    this.signature = md5.appendStr(this.mira).end();
    console.log(this.route.root)
    
    this.responseUrl = 'http://localhost:4200/#/carrito';
    this.confirmationUrl = 'http://localhost:4200/#/respuestapag';
    console.log(this.responseUrl);
  }
}