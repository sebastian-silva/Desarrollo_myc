import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-adminadicc',
  templateUrl: './adminadicc.component.html',
  styleUrls: ['./adminadicc.component.css']
})
export class AdminadiccComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  ver(modal){
    this.modalService.open(modal, { centered: true });
  }

  valnut(modal){
    this.modalService.open(modal, { centered: true });
  }

}