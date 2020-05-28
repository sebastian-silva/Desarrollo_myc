import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SomosComponent } from './pages/inicio/somos/somos.component';
import { OfertasComponent } from './pages/inicio/ofertas/ofertas.component';
import { MenuComponent } from './pages/inicio/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { EntradaComponent } from './pages/inicio/entrada/entrada.component';
import { HttpClientModule } from '@angular/common/http';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ComponentsComponent } from './pages/components/components.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CargarImgComponent } from './pages/cargar-img/cargar-img.component';
import { ProductosComponent } from './pages/admin/productos/productos.component';
import { PedidosComponent } from './pages/admin/pedidos/pedidos.component';
import { DisenosComponent } from './pages/admin/disenos/disenos.component';
import { PrimpagComponent } from './pages/admin/primpag/primpag.component';
import { ErrorComponent } from './pages/admin/error/error.component';
import { AdminprodComponent } from './pages/admin/productos/adminprod/adminprod.component';
import { ProdsComponent } from './pages/admin/productos/prods/prods.component';
import { AdminadiccComponent } from './pages/admin/productos/adminadicc/adminadicc.component';
import { AdmindesayComponent } from './pages/admin/productos/admindesay/admindesay.component';
import { UploadComponent } from './pages/upload/upload.component';
import { AdminpersonComponent } from './pages/admin/productos/adminperson/adminperson.component';
import { ProbandopagoComponent } from './pages/probandopago/probandopago.component';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    SomosComponent,
    OfertasComponent,
    MenuComponent,
    LoginComponent,
    EntradaComponent,
    TiendaComponent,
    SignupComponent,
    NosotrosComponent,
    ContactoComponent,
    ComponentsComponent,
    AdminComponent,
    CargarImgComponent,
    ProductosComponent,
    PedidosComponent,
    DisenosComponent,
    PrimpagComponent,
    ErrorComponent,
    AdminprodComponent,
    ProdsComponent,
    AdminadiccComponent,
    AdmindesayComponent,
    UploadComponent,
    AdminpersonComponent,
    ProbandopagoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPayPalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
