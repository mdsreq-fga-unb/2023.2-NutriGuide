import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

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
  ) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  // criando o formulário:  
  criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      nome: [],      
      nascimento: [],
      endereço: [],
      telefone: [],
      email: [],
      objetivo: [],
      altura: [],
      peso: [],
      genero: [],
      doencas: [],
      medicacoes: []
    });
  }

  cancelar(): void {
    this.dialogRef.close('cancelar');
  }

  registrar(): void {
    // adicionar a lógica de inserir o paciente...
    console.log('dados do formulario: ', this.formulario.value);

    this.dialogRef.close('registrar');
  }

}