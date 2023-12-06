import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaginaConsultaComponent } from "./modules/pagina-consulta/pagina-consulta.component";
import { CadastroComponent } from "./modules/cadastro/cadastro.component";
import { LoginComponent } from "./modules/login/login.component";
import { MeusPacientesComponent } from "./modules/meus-pacientes/meus-pacientes.component";
import { InformacoesPessoaisComponent } from "./modules/informacoes-pessoais/informacoes-pessoais.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'inicio', component: PaginaConsultaComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path:'consultar-pacientes', component: MeusPacientesComponent },
  { path: 'informacoes-pessoais', component: InformacoesPessoaisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
