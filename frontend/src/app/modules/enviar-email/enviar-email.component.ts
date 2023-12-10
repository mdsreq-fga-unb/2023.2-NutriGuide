import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import UsuarioNutricionista from 'src/app/interfaces/UsuarioNutricionista';
import { EmailService } from 'src/app/services/email-service/email.service';
import { AvaliacoesComponent } from '../avaliacoes/avaliacoes.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-enviar-email',
  templateUrl: './enviar-email.component.html',
  styleUrls: ['./enviar-email.component.scss']
})
export class EnviarEmailComponent implements OnInit {

  role: string = String(localStorage.getItem('role'));
  formulario!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public nutricionista: UsuarioNutricionista,
    public dialogRef: MatDialogRef<AvaliacoesComponent>,
    private emailService: EmailService,
    private snackbar: MatSnackBar,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      titulo: [''],
      conteudo: [''],
      emailUsuario: ['']
    });
  }

  fechar(): void {
    this.dialogRef.close();
  }

  enviarEmail(): void {

  }

}