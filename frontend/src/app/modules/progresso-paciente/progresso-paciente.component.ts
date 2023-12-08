import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import ProgressoPaciente from 'src/app/interfaces/ProgressoPaciente';
import UsuarioPaciente from 'src/app/interfaces/UsuarioPaciente';
import { ProgressoPacienteService } from 'src/app/services/progresso-paciente-service/progresso-paciente.service';

@Component({
  selector: 'app-progresso-paciente',
  templateUrl: './progresso-paciente.component.html',
  styleUrls: ['./progresso-paciente.component.scss']
})
export class ProgressoPacienteComponent implements OnInit {

  progressos: ProgressoPaciente[] = [];
  load: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ProgressoPacienteComponent>,
    @Inject(MAT_DIALOG_DATA) public paciente: UsuarioPaciente,
    private progressoPacienteService: ProgressoPacienteService
  ) {}

  ngOnInit(): void {
    this.buscarProgressos();
  }

  buscarProgressos(): void {
    this.progressoPacienteService.getAllByIdPaciente(this.paciente.id_paciente).subscribe((p) => {
      this.progressos = p;
      
      console.log(this.progressos);

      this.load = true;
    },
    (err) => {
      this.load = true;
    });
  }

  fechar(): void {
    this.dialogRef.close('fechar');
  }


}