import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

// apagar depois:
interface Nutricionista {
  nome: string;
  regiao: string;
  contato: number;
  redesSociais: string;
}


@Component({
  selector: 'app-consultar-nutricionistas',
  templateUrl: './consultar-nutricionistas.component.html',
  styleUrls: ['./consultar-nutricionistas.component.scss']
})
export class ConsultarNutricionistasComponent implements OnInit {

  // apagar depois
  colunas: string[] = ['Nutricionista', 'Região', 'Contato', 'Redes Sociais', 'Ações'];

  // apagar depois
  nutricionista: Nutricionista = {
    nome: 'Henrique',
    regiao: 'DF',
    contato: 984441480,
    redesSociais: '@henriqtorresl'
  }

  // apagar depois
  linhas: Nutricionista[] = [
    this.nutricionista,
    this.nutricionista,
    this.nutricionista,
    this.nutricionista,
    this.nutricionista,
    this.nutricionista,
    this.nutricionista,
    this.nutricionista,
    this.nutricionista
  ];

  constructor(
    public dialogRef: MatDialogRef<ConsultarNutricionistasComponent>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    
  }

  fechar(): void {
    this.dialogRef.close();
  }

  irPaginaNutri(): void {
    this.router.navigate(['/informacoes-nutricionista'], {relativeTo: this.route.parent});
    this.dialogRef.close();
  }

}