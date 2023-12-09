import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import Avaliacao from 'src/app/interfaces/Avaliacao';
import UsuarioNutricionista from 'src/app/interfaces/UsuarioNutricionista';
import { AvaliacaoService } from 'src/app/services/avaliacao-service/avaliacao.service';

@Component({
  selector: 'app-adicionar-avaliacao',
  templateUrl: './adicionar-avaliacao.component.html',
  styleUrls: ['./adicionar-avaliacao.component.scss']
})
export class AdicionarAvaliacaoComponent implements OnInit {

  load: boolean = false;
  formulario!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public nutricionista: UsuarioNutricionista,
    public dialogRef: MatDialogRef<AdicionarAvaliacaoComponent>,
    private formBuilder: FormBuilder,
    private avaliacaoService: AvaliacaoService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
    this.load = true;
  }

  criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      conteudo: [''],
      nota: [0]
    });
  }

  cancelar(): void {
    this.dialogRef.close();
  }

  avaliar(): void {
    const avaliacao: Avaliacao = {
      id_avaliacao: 0,
      avaliacao: this.formulario.value.conteudo,
      nota_nutricionista: this.formulario.value.nota,     // de um a 5
      id_nutricionista: this.nutricionista.id_nutricionista
    }

    if (avaliacao.nota_nutricionista <= 0 || avaliacao.nota_nutricionista > 10) {
      this.snackbar.open('Informe uma nota válida!', 'OK', { duration: 3000 });
    } else if (avaliacao.avaliacao === '') {
      this.snackbar.open('Informe o conteúdo da avaliação!', 'OK', { duration: 3000 });
    } else {
      this.avaliacaoService.insert(avaliacao).subscribe((r) => {
        this.dialogRef.close(avaliacao);

        this.snackbar.open(r.msg, 'OK', {
          duration: 3000
        });
      });

    }
  }

}