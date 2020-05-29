import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {




  ngOnInit(): void {
  }
  showModal(){
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Estas a punto de eliminar el producto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borralo!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Eliminado!',
          'El producto ha sido retirado.',
          'success'
        )
      }
    })

  }

}

// function up(max) {
//   document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
//     if (document.getElementById("myNumber").value >= parseInt(max)) {
//         document.getElementById("myNumber").value = max;
//     }
// }

// function down(min) {
//   document.getElementById("myNumber").value= parseInt(document.getElementById("myNumber").value) - 1;
//   if (document.getElementById("myNumber").value <= parseInt(min)) {
//       document.getElementById("myNumber").value = min;
//   }
// }
