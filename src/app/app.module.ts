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
import {HttpClientModule} from '@angular/common/http';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ComponentsComponent } from './pages/components/components.component';


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
    ComponentsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
