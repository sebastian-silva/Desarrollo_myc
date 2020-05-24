import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-asdc',
  templateUrl: './asdc.component.html',
  styleUrls: ['./asdc.component.css']
})
export class AsdcComponent implements OnInit {

  constructor(config: NgbCarouselConfig) { 
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.showNavigationArrows = true;
  }

  ngOnInit(): void {

  }

}
