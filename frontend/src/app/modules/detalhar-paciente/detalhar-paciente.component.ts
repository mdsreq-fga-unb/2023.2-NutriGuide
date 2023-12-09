import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import UsuarioPaciente from 'src/app/interfaces/UsuarioPaciente';

@Component({
  selector: 'app-detalhar-paciente',
  templateUrl: './detalhar-paciente.component.html',
  styleUrls: ['./detalhar-paciente.component.scss']
})
export class DetalharPacienteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetalharPacienteComponent>,
    @Inject(MAT_DIALOG_DATA) public paciente: UsuarioPaciente
  ) {}

  ngOnInit(): void {

  }

  fechar(): void {
    this.dialogRef.close();
  }

  altura(altura: number): string {
    return `${altura} m`;
  }

  peso(peso: number): string {
    const pesoStr = peso.toString();

    return `${pesoStr} Kg`;
  }

  genero(sexo: string): string {
    if (sexo === 'M') return 'Masculino';
    return 'Feminino';
  }

}