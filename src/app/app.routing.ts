import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DisenosComponent } from './pages/admin/disenos/disenos.component';
import { PedidosComponent } from './pages/admin/pedidos/pedidos.component';
import { ProductosComponent } from './pages/admin/productos/productos.component';
import { AdminprodComponent } from './pages/admin/productos/adminprod/adminprod.component';
import { AdminadiccComponent } from './pages/admin/productos/adminadicc/adminadicc.component';
import { AdmindesayComponent } from './pages/admin/productos/admindesay/admindesay.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: InicioComponent },
    { path: 'tienda', component: TiendaComponent },
    { path: 'producto', component: ProductoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'disenos', component: DisenosComponent},
    { path: 'pedidos', component: PedidosComponent},
    { path: 'productos', component: ProductosComponent},
    { path: 'adminprod', component: AdminprodComponent},
    { path: 'adminadicc', component: AdminadiccComponent},
    { path: 'admindesay', component: AdmindesayComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
