import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cadastrar-paciente',
  templateUrl: './cadastrar-paciente.component.html',
  styleUrls: ['./cadastrar-paciente.component.scss']
})
export class CadastrarPacienteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CadastrarPacienteComponent>
  ) {}

  ngOnInit(): void {
    
  }

  cancelar(): void {
    this.dialogRef.close();
  }

  registrar(): void {
    
  }

}