import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-desayuno',
  templateUrl: './desayuno.component.html',
  styleUrls: ['./desayuno.component.css']
})
export class DesayunoComponent implements OnInit {

  constructor(private ruta: Router) { }

  ngOnInit(): void {
  }
  showModal(){
    Swal.fire(
      '¡Buen provecho!',
      'El producto se ha agregado al carrito',
      'success'
    )

  }
}
