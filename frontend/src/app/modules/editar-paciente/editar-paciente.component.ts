import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import UsuarioPaciente from 'src/app/interfaces/UsuarioPaciente';
import { DetalharPacienteComponent } from '../detalhar-paciente/detalhar-paciente.component';
import { PacienteService } from 'src/app/services/paciente-service/paciente.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import Paciente from 'src/app/interfaces/Paciente';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.scss']
})
export class EditarPacienteComponent implements OnInit {

  load: boolean = false;
  formulario!: FormGroup;
  paciente!: UsuarioPaciente;

  constructor(
    public dialogRef: MatDialogRef<DetalharPacienteComponent>,
    @Inject(MAT_DIALOG_DATA) public idPaciente: number,
    private pacienteService: PacienteService,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.buscarPaciente();
  }

  buscarPaciente(): void {
    this.pacienteService.getOne(this.idPaciente).subscribe((p) => {
      this.paciente = p;
      this.criarFormulario();
      this.load = true;
    });
  }

  criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      peso: [this.paciente.peso],
      altura: [this.paciente.altura],
      queixa: [this.paciente.queixa],
      comorbidades: [this.paciente.comorbidades],
      medicacoes: [this.paciente.medicacoes]
    });
  }

  fechar(): void {
    this.dialogRef.close();

    this.snackbar.open('Pop-up de editar paciente fechado!', 'OK', {
      duration: 3000
    });
  }

  altura(altura: number): string {
    return `${altura} m`;
  }

  genero(sexo: string): string {
    if (sexo === 'M') return 'Masculino';
    return 'Feminino';
  }

  salvar(): void {
    const pacienteUpdate: Paciente = {
      id_paciente: this.paciente.id_paciente,
      id_usuario: this.paciente.id_usuario,
      peso: this.formulario.value.peso,
      altura: this.formulario.value.altura,
      queixa: this.formulario.value.queixa,
      comorbidades: this.formulario.value.comorbidades,
      medicacoes: this.formulario.value.medicacoes,
      nutricionista_responsavel: this.paciente.nutricionista_responsavel
    } 

    console.log(pacienteUpdate);
    
    if ( this.formulario.dirty === false ) {
      this.snackbar.open('Para editar as informações do paciente, altere alguma informação primeiro!', 'OK', {duration: 3000});
    } else if ( 
      Number(pacienteUpdate.altura) !== 0 &&
      Number(pacienteUpdate.peso) !== 0 &&
      pacienteUpdate.queixa !== '' &&
      pacienteUpdate.comorbidades !== '' &&
      pacienteUpdate.medicacoes !== ''
     ) {
      this.pacienteService.update(pacienteUpdate).subscribe((r) => {
        this.dialogRef.close();

        this.snackbar.open(r.msg, 'OK', {duration: 3000});
      });
    } else {
      this.snackbar.open('Todos os campos devem estar preenchidos!', 'OK', {duration: 3000});
    }
  }

}