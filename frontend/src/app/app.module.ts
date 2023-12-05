import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginaConsultaComponent } from './modules/pagina-consulta/pagina-consulta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './modules/header/header.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { LoginComponent } from './modules/login/login.component';
import { MeusPacientesComponent } from './modules/meus-pacientes/meus-pacientes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './shared/app-material/app-material.module';

@NgModule({
  declarations: [
    AppComponent,
    PaginaConsultaComponent,
    HeaderComponent,
    CadastroComponent,
    LoginComponent,
    MeusPacientesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
