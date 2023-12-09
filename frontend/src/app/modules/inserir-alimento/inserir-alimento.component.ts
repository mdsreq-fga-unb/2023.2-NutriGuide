import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import Alimento from 'src/app/interfaces/Alimento';
import PlanoAlimentar from 'src/app/interfaces/PlanoAlimentar';
import { AlimentoService } from 'src/app/services/alimento-service/alimento.service';
import { PlanoAlimentarService } from 'src/app/services/plano-alimentar-service/plano-alimentar.service';

interface DialogData {
  reficaoNome: string;
  refeicaoId: number;
  nomePlano: string;
  nomePaciente: string
}

@Component({
  selector: 'app-inserir-alimento',
  templateUrl: './inserir-alimento.component.html',
  styleUrls: ['./inserir-alimento.component.scss']
})
export class InserirAlimentoComponent implements OnInit {

  formulario!: FormGroup;
  idPlano!: number;
  alimento!: Alimento;
  load: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<InserirAlimentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder,
    private planoAlimentarService: PlanoAlimentarService,
    private alimentoService: AlimentoService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.buscarPlano();
    this.criarFormulario();
  }

  buscarPlano(): void {
    this.planoAlimentarService.getByName(this.data.nomePlano).subscribe((p) => {
      this.idPlano = p.id_plano;

      this.load = true;
    }, (err) => {
      this.snackbar.open('Não foi encontrado nenhum plano alimentar para registrar um alimento!', 'OK', {
        duration: 3000
      });
      this.dialogRef.close();
    })
  }

  criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      nome: [''],	
      qntGrama: [0],
      qntCarboidrato: [0],
      qntProteina: [0],
      qntGordura: [0]
    });
  }

  registrar(): void {
    const alimento: Alimento = {
      id_alimento: 0,	
      id_plano: this.idPlano,	
      id_refeicao: this.data.refeicaoId,	
      nome_alimento: this.formulario.value.nome,	
      quantidade_grama: this.formulario.value.qntGrama,
      qnt_carboidrato: this.formulario.value.qntCarboidrato,	
      qnt_proteina: this.formulario.value.qntProteina,
      qnt_gordura: this.formulario.value.qntGordura
    }

    this.alimentoService.insert(alimento).subscribe((r) => {
      this.dialogRef.close();
      
      this.snackbar.open(r.msg, 'OK', {
        duration: 3000
      });
    },
    (err) => {
      this.snackbar.open('Preencha todos os campos corretamente!', 'OK', {
        duration: 3000
      });
    });

  }

  cancelar(): void {
    this.dialogRef.close('cancelar');
  }

}