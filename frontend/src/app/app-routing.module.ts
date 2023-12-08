import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaginaConsultaComponent } from "./modules/pagina-consulta/pagina-consulta.component";
import { CadastroComponent } from "./modules/cadastro/cadastro.component";
import { LoginComponent } from "./modules/login/login.component";
import { MeusPacientesComponent } from "./modules/meus-pacientes/meus-pacientes.component";
import { InformacoesPessoaisComponent } from "./modules/informacoes-pessoais/informacoes-pessoais.component";
import { InformacoesNutricionistaComponent } from "./modules/informacoes-nutricionista/informacoes-nutricionista.component";
import { InformacoesPacienteComponent } from "./modules/informacoes-paciente/informacoes-paciente.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'inicio', component: PaginaConsultaComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path:'consultar-pacientes', component: MeusPacientesComponent },
  { path: 'informacoes-pessoais', component: InformacoesPessoaisComponent },
  { path: 'informacoes-nutricionista', component: InformacoesNutricionistaComponent },
  { path: 'informacoes-paciente', component: InformacoesPacienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
