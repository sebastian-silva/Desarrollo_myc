import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-respuestapag',
  templateUrl: './respuestapag.component.html',
  styleUrls: ['./respuestapag.component.css']
})
export class RespuestapagComponent implements OnInit {

  estado: Number;
  constructor(private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      console.log(params.state_pol);
      this.estado = params.state_pol;
  });
  }

  ngOnInit(): void {

  }

}
