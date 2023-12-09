import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import UsuarioPaciente from 'src/app/interfaces/UsuarioPaciente';

@Component({
  selector: 'app-detalhar-paciente',
  templateUrl: './detalhar-paciente.component.html',
  styleUrls: ['./detalhar-paciente.component.scss']
})
export class DetalharPacienteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DetalharPacienteComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public paciente: UsuarioPaciente,
    private router: Router
  ) {}

  ngOnInit(): void {

  }

  fechar(): void {
    this.router.navigate(['/consultar-pacientes']);
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