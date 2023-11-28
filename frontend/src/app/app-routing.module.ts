import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaginaConsultaComponent } from "./modules/pagina-consulta/pagina-consulta.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "consulta" },
  { path: 'consulta', component: PaginaConsultaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
