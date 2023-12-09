import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import UsuarioNutricionista from 'src/app/interfaces/UsuarioNutricionista';
import { NutricionistaService } from 'src/app/services/nutricionista-service/nutricionista.service';

interface FomularioConsulta {
  nome: string;
  especialidade: string;
  regiao: string;
}


@Component({
  selector: 'app-consultar-nutricionistas',
  templateUrl: './consultar-nutricionistas.component.html',
  styleUrls: ['./consultar-nutricionistas.component.scss']
})
export class ConsultarNutricionistasComponent implements OnInit {

  colunas: string[] = ['Nutricionista', 'Região', 'Contato', 'Redes Sociais', 'Ações'];
  nutricionistaList: UsuarioNutricionista[] = [];
  load: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ConsultarNutricionistasComponent>,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public dadosFomulario: FomularioConsulta,
    private nutricionistaService: NutricionistaService
  ) {}

  ngOnInit(): void {
    this.buscarNutricionistas();
  }

  buscarNutricionistas(): void {
    const nome = this.dadosFomulario.nome;
    const especialidade = this.dadosFomulario.especialidade;
    const regiao = this.dadosFomulario.regiao;

    console.log(nome, especialidade, regiao);

    this.nutricionistaService.getAllNutriFiltered(nome, especialidade, regiao).subscribe((n) => {
      this.nutricionistaList = n;

      this.load = true;
    });
  }

  fechar(): void {
    this.dialogRef.close();
  }

  irPaginaNutri(idNutri: number): void {
    this.router.navigate(['/informacoes-nutricionista', idNutri], {relativeTo: this.route.parent});
    this.dialogRef.close();
  }

}