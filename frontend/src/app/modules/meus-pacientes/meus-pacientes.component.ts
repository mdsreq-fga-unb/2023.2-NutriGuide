import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {

  }

}