import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaginaConsultaComponent } from "./modules/pagina-consulta/pagina-consulta.component";
import { CadastroComponent } from "./modules/cadastro/cadastro.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "inicio" },
  { path: 'inicio', component: PaginaConsultaComponent },
  { path: 'cadastro', component: CadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
