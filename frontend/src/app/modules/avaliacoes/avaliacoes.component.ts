import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import Avaliacao from 'src/app/interfaces/Avaliacao';
import UsuarioNutricionista from 'src/app/interfaces/UsuarioNutricionista';
import { AvaliacaoService } from 'src/app/services/avaliacao-service/avaliacao.service';

@Component({
  selector: 'app-avaliacoes',
  templateUrl: './avaliacoes.component.html',
  styleUrls: ['./avaliacoes.component.scss']
})
export class AvaliacoesComponent implements OnInit {

  load: boolean = false;
  avaliacoes: Avaliacao[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public nutricionista: UsuarioNutricionista,
    public dialogRef: MatDialogRef<AvaliacoesComponent>,
    private avaliacaoService: AvaliacaoService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.buscarAvaliacoes();
  }

  fechar(): void {
    this.dialogRef.close();
  }

  buscarAvaliacoes(): void {
    this.avaliacaoService.getAll(this.nutricionista.id_nutricionista).subscribe((a) => {
      this.avaliacoes = a;

      this.load = true;
    },
    (err) => this.load = true);
  }

}