import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaginaConsultaComponent } from "./modules/pagina-consulta/pagina-consulta.component";
import { CadastroComponent } from "./modules/cadastro/cadastro.component";
import { LoginComponent } from "./modules/login/login.component";
import { MeusPacientesComponent } from "./modules/meus-pacientes/meus-pacientes.component";
import { InformacoesPessoaisComponent } from "./modules/informacoes-pessoais/informacoes-pessoais.component";
import { InformacoesNutricionistaComponent } from "./modules/informacoes-nutricionista/informacoes-nutricionista.component";
import { InformacoesPacienteComponent } from "./modules/informacoes-paciente/informacoes-paciente.component";
import { CriarPlanoComponent } from "./modules/criar-plano/criar-plano.component";
import { MinhaComunidadeComponent } from "./modules/minha-comunidade/minha-comunidade.component";
import { ComunidadeNutricionistaComponent } from "./modules/comunidade-nutricionista/comunidade-nutricionista.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'inicio', component: PaginaConsultaComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path:'consultar-pacientes', component: MeusPacientesComponent },
  { path: 'informacoes-pessoais', component: InformacoesPessoaisComponent },
  { path: 'informacoes-nutricionista/:id', component: InformacoesNutricionistaComponent },
  { path: 'informacoes-paciente/:id', component: InformacoesPacienteComponent },
  { path: 'gerenciar-plano/:id', component: CriarPlanoComponent },
  { path: 'minha-comunidade/:id', component: MinhaComunidadeComponent },
  { path: 'comunidade/:id', component: ComunidadeNutricionistaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
