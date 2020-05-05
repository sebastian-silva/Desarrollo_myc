import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SomosComponent } from './pages/inicio/somos/somos.component';
import { OfertasComponent } from './pages/inicio/ofertas/ofertas.component';
import { MenuComponent } from './pages/inicio/menu/menu.component';
import { LoginComponent } from './pages/login/login.component';
import { VideosComponent } from './pages/inicio/videos/videos.component';
import { CarruselComponent } from './pages/inicio/carrusel/carrusel.component';


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
    VideosComponent,
    CarruselComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
