import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import UsuarioPaciente from 'src/app/interfaces/UsuarioPaciente';
import { PacienteService } from 'src/app/services/paciente-service/paciente.service';

@Component({
  selector: 'app-cadastrar-paciente',
  templateUrl: './cadastrar-paciente.component.html',
  styleUrls: ['./cadastrar-paciente.component.scss']
})
export class CadastrarPacienteComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CadastrarPacienteComponent>,
    private formBuilder: FormBuilder,
    private pacienteService: PacienteService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  // criando o formulário:  
  criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      nome: [],      
      nascimento: [],
      cep: [],
      telefone: [],
      email: [],
      objetivo: [],
      altura: [],
      peso: [],
      genero: [],
      cpf: [],
      doencas: [],
      medicacoes: []
    });
  }

  cancelar(): void {
    this.dialogRef.close('cancelar');
  }

  registrar(): void {
    const responsavel: string = String(localStorage.getItem('nome'));

    const paciente: UsuarioPaciente = {
      id_usuario: 0,
      cpf:  Number(this.formulario.value.cpf),
      nome_usuario: this.formulario.value.nome,
      email: this.formulario.value.email,
      sexo: this.formulario.value.genero,      
      telefone: this.formulario.value.telefone,
      cep: this.formulario.value.cep,
      data_nascimento: this.formulario.value.nascimento,
      tipo_usuario: 'paciente',
      id_paciente: 0,
      peso: Number(this.formulario.value.peso),
      altura: Number(this.formulario.value.altura),
      queixa: this.formulario.value.objetivo,
      comorbidades: this.formulario.value.doencas,
      medicacoes: this.formulario.value.medicacoes,
      nutricionista_responsavel: responsavel
    }

    this.pacienteService.insert(paciente).subscribe((r) => {
      this.dialogRef.close(paciente);
    }, 
    (err) => {
      this.snackbar.open('Preencha todos os campos corretamente!', 'OK', {
        duration: 3000
      });
    });
  }

}