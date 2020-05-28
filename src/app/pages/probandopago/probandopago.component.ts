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
    currency: 'COP',
    clientId: 'Afj0FnMDx2Q52Oo0v4mx04LI9XOM8SVemkyMsUrOXg-GYJkErTXydqWEcrkGB2rrpuV531T-RcCoVjVH',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
    intent: 'CAPTURE',
    purchase_units: [
    {
    amount: {
    currency_code: 'COP',
    value: '2',
    breakdown: {
    item_total: {
    currency_code: 'COP',
    value: '2'
    }
    }
    },
    items: [
    {
    name: 'Miel y canela',
    quantity: '2',
    category: 'DIGITAL_GOODS',
    unit_amount: {
    currency_code: 'COP',
    value: '1.1',
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