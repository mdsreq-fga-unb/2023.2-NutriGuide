import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import UsuarioPaciente from '../../interfaces/UsuarioPaciente';
import { ProgressoPacienteService } from '../../services/progresso-paciente-service/progresso-paciente.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import ProgressoPaciente from '../../interfaces/ProgressoPaciente';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registrar-progresso',
  templateUrl: './registrar-progresso.component.html',
  styleUrls: ['./registrar-progresso.component.scss']
})
export class RegistrarProgressoComponent implements OnInit {

  formulario!: FormGroup

  constructor(
    public dialogRef: MatDialogRef<RegistrarProgressoComponent>,
    @Inject(MAT_DIALOG_DATA) public paciente: UsuarioPaciente,
    private progressoPacienteService: ProgressoPacienteService,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.criarFormulario();   
  }

  criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      peso: [],
      habitosAlimentares: [],
      medidasCorporais: [],
      queixa: [],
      atividade: [],
      suplementacao: []
    });
  }

  registrarProgresso(): void {
    const date = new Date();

    const ano = date.getFullYear();
    const mes = date.getMonth();
    const dia = date.getDate();

    const dataAtual = ano + '-' + mes + '-' + dia;
    
    const progresso: ProgressoPaciente = {
      id_progesso: 0,   // não preciso informar id pra inserir...
      id_paciente: this.paciente.id_paciente,
      data: dataAtual,
      peso: this.formulario.value.peso,
      habitos_alimentares: this.formulario.value.habitosAlimentares,
      medidas_corporais: this.formulario.value.medidasCorporais,
      queixa: this.formulario.value.queixa,
      nivel_atividade_fisica: this.formulario.value.atividade,
      suplementacao_atual: this.formulario.value.suplementacao,
    }

    this.progressoPacienteService.insert(progresso).subscribe((res) => {
      this.snackbar.open(res.msg, 'OK', {
        duration: 3000
      });

      this.dialogRef.close();
    },
    (err) => {
      this.snackbar.open('Preencha todos os campos corretamente!', 'OK', {
        duration: 3000
      });
    });

  }

  cancelar(): void {
    this.dialogRef.close('fechar');
  }

}