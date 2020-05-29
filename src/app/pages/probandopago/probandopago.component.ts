import { Component, OnInit } from '@angular/core';
import {IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-probandopago',
  templateUrl: './probandopago.component.html',
  styleUrls: ['./probandopago.component.css']
})

export class ProbandopagoComponent implements OnInit {
  public payPalConfig: IPayPalConfig;
  
  constructor() {
    this.initConfig();
  }

  ngOnInit(): void {
      this.initConfig();
  }
  initConfig() {
    this.payPalConfig = {
    currency: 'MXN',
    clientId: 'ASiNzQ1WmiOYpTOdrmyBskYW6_lOid09x-oPEN0ryIqQnx3KRZ4P8Xx3A8QNwUrUQaSv9J4mkjw4NmXM',
    
    createOrderOnClient: (data) => <ICreateOrderRequest>{
    intent: 'CAPTURE',
    purchase_units: [
    {
    amount: {
    currency_code: 'MXN',
    value: '0.02',
    breakdown: {
    item_total: {
    currency_code: 'MXN',
    value: '0.02'
    }
    }
    },
    items: [
    {
    name: 'Tokens',
    quantity: '2',
    category: 'DIGITAL_GOODS',
    unit_amount: {
    currency_code: 'MXN',
    value: '0.01',
    },
    }
    ]
    }
    ]
    },
    advanced: {
    commit: 'true'
    },
    style: {
    label: 'paypal',
    layout: 'vertical'
    },
    onApprove: (data, actions) => {
    console.log('onApprove - transaction was approved, but not authorized', data, actions);
    actions.order.get().then(details => {
    console.log('onApprove - you can get full order details inside onApprove: ', details);
    });
    },
    onClientAuthorization: (data) => {
    console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
    },
    onCancel: (data, actions) => {
    console.log('OnCancel', data, actions);
    },
    onError: err => {
    console.log('OnError', err);
    },
    onClick: (data, actions) => {
    console.log('onClick', data, actions);
    },
    };
  }
}