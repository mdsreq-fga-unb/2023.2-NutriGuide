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
import { CadastrarPacienteComponent } from './modules/cadastrar-paciente/cadastrar-paciente.component';
import { HttpClientModule } from '@angular/common/http';
import { ConsultarNutricionistasComponent } from './modules/consultar-nutricionistas/consultar-nutricionistas.component';
import { InformacoesPessoaisComponent } from './modules/informacoes-pessoais/informacoes-pessoais.component';
import { SpinnerComponent } from './shared/spinner-component/spinner/spinner.component';
import { DetalharPacienteComponent } from './modules/detalhar-paciente/detalhar-paciente.component';
import { InformacoesPacienteComponent } from './modules/informacoes-paciente/informacoes-paciente.component';
import { InformacoesNutricionistaComponent } from './modules/informacoes-nutricionista/informacoes-nutricionista.component';
import { ProgressoPacienteComponent } from './modules/progresso-paciente/progresso-paciente.component';
import { RegistrarProgressoComponent } from './registrar-progresso/registrar-progresso.component'

@NgModule({
  declarations: [
    AppComponent,
    PaginaConsultaComponent,
    HeaderComponent,
    CadastroComponent,
    LoginComponent,
    MeusPacientesComponent,
    CadastrarPacienteComponent,
    ConsultarNutricionistasComponent,
    InformacoesPessoaisComponent,
    SpinnerComponent,
    DetalharPacienteComponent,
    InformacoesPacienteComponent,
    InformacoesNutricionistaComponent,
    ProgressoPacienteComponent,
    RegistrarProgressoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
