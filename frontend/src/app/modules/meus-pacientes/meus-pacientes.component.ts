import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastrarPacienteComponent } from '../cadastrar-paciente/cadastrar-paciente.component';
import { MatSnackBar } from '@angular/material/snack-bar';

// apagar depois:
interface Paciente {
  nome: string;
  idade: number;
  contato: number;
  condicoesMedicas: string;
}

@Component({
  selector: 'app-meus-pacientes',
  templateUrl: './meus-pacientes.component.html',
  styleUrls: ['./meus-pacientes.component.scss']
})
export class MeusPacientesComponent implements OnInit {

  // apagar depois
  colunas: string[] = ['Paciente', 'Idade', 'Contato', 'Condições Médicas Principais', 'Ações'];

  // apagar depois
  paciente1: Paciente = {
    nome: 'Henrique',
    idade: 21,
    contato: 984441480,
    condicoesMedicas: 'sei la sei la sei la'
  }

  // apagar depois
  linhas: Paciente[] = [
    this.paciente1,
    this.paciente1,
    this.paciente1,
    this.paciente1,
    this.paciente1,
    this.paciente1,
    this.paciente1,
    this.paciente1,
    this.paciente1,
    this.paciente1,
    this.paciente1,
    this.paciente1,
    this.paciente1,
    this.paciente1,
    this.paciente1,
    this.paciente1,
    this.paciente1
  ];

  constructor(
    public dialog: MatDialog,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {

  }

  abrirDialogCadatrar(): void {
    const dialogRef = this.dialog.open(CadastrarPacienteComponent, {
      width: '1500px',
      height: '800px'
    });

    dialogRef.afterClosed().subscribe((value) => {
      console.log(value);

      if (value === 'cancelar') {
        this.snackbar.open('Pop-up de cadastrar paciente fechado!', 'OK', {
          duration: 3000
        });
      } else if (value === 'registrar') {
        this.snackbar.open('Paciente cadastrado com sucesso!', 'OK', {
          duration: 3000
        });
      }
    });
  }

}