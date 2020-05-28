import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desayuno',
  templateUrl: './desayuno.component.html',
  styleUrls: ['./desayuno.component.css']
})
export class DesayunoComponent implements OnInit {

  constructor(private ruta: Router) { }

  ngOnInit(): void {
  }
}
