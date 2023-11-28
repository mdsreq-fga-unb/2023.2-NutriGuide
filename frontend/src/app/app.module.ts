import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginaConsultaComponent } from './modules/pagina-consulta/pagina-consulta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './modules/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaConsultaComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
