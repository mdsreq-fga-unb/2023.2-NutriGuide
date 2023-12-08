import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import Nutricionista from 'src/app/interfaces/Nutricionista';
import UsuarioNutricionista from 'src/app/interfaces/UsuarioNutricionista';
import { NutricionistaService } from 'src/app/services/nutricionista-service/nutricionista.service';

interface FomularioConsulta {
  nome: string;
  regiao: string;
  especialidade: string;
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
    console.log(this.dadosFomulario);
    this.buscarNutricionistas();
  }

  buscarNutricionistas(): void {
    const nome = this.dadosFomulario.nome;
    const especialidade = this.dadosFomulario.especialidade;
    const regiao = this.dadosFomulario.regiao;

    this.nutricionistaService.getAll().subscribe((n) => {
      this.nutricionistaList = n;

      console.log('opa: ', this.nutricionistaList);
      this.load = true;
    });

    // if ( nome === '' && especialidade === '' && regiao === '') {   // usuário não aplicou nenhum filtro
    //   this.nutricionistaService.getAll().subscribe((n) => {
    //     this.nutricionistaList = n;

    //     console.log('opa: ', this.nutricionistaList)
    //   });
    // }
  }

  fechar(): void {
    this.dialogRef.close();
  }

  irPaginaNutri(): void {
    this.router.navigate(['/informacoes-nutricionista'], {relativeTo: this.route.parent});
    this.dialogRef.close();
  }

}