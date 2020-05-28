import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-admindesay',
  templateUrl: './admindesay.component.html',
  styleUrls: ['./admindesay.component.css']
})
export class AdmindesayComponent implements OnInit{

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
