import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {


  

  ngOnInit(): void {
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


