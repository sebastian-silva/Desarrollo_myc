import { Component, OnInit} from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-adminprod',
  templateUrl: './adminprod.component.html',
  styleUrls: ['./adminprod.component.css']
})
export class AdminprodComponent implements OnInit {
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  ver(modal){
    this.modalService.open(modal, { centered: true });
  }

}

