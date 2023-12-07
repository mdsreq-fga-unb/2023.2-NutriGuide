import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detalhar-paciente',
  templateUrl: './detalhar-paciente.component.html',
  styleUrls: ['./detalhar-paciente.component.scss']
})
export class DetalharPacienteComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DetalharPacienteComponent>,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  // criando o formulário:  
  criarFormulario(): void {
    this.formulario = this.formBuilder.group({    // trazer esses dados para o dialog...
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

  fechar(): void {
    this.dialogRef.close();
  }

}