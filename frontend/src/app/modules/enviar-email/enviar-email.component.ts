import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import UsuarioNutricionista from 'src/app/interfaces/UsuarioNutricionista';
import { EmailService } from 'src/app/services/email-service/email.service';
import { AvaliacoesComponent } from '../avaliacoes/avaliacoes.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario-service/usuario.service';
import Usuario from 'src/app/interfaces/Usuario';

@Component({
  selector: 'app-enviar-email',
  templateUrl: './enviar-email.component.html',
  styleUrls: ['./enviar-email.component.scss']
})
export class EnviarEmailComponent implements OnInit {

  role: string = String(localStorage.getItem('role'));
  formulario!: FormGroup;
  usuario!: Usuario;
  load: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public nutricionista: UsuarioNutricionista,
    public dialogRef: MatDialogRef<AvaliacoesComponent>,
    private emailService: EmailService,
    private snackbar: MatSnackBar,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.criarFormulario();
    this.buscarUsuario();
  }

  criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      titulo: [''],
      conteudo: [''],
      emailUsuario: ['']
    });
  }

  buscarUsuario(): void {
    if (this.role === 'paciente' || this.role === 'nutricionista') {
      const nome: string = String(localStorage.getItem('nome'));

      this.usuarioService.getUserByName(nome).subscribe((user) => {
        this.usuario = user;

        this.load = true;
      })
    } else {
      this.load = true;
    }
  }

  fechar(): void {
    this.dialogRef.close();
  }

  enviarEmail(): void {
    if (this.role === 'paciente' || this.role === 'nutricionista') {
      if (
        this.formulario.value.titulo === '' || 
        this.formulario.value.conteudo === ''
      ) {
        this.snackbar.open('Preencha todos os campos corretamente!', 'OK', {duration: 3000});
      } else {
        this.emailService.sendMsgNutricionista(
            this.usuario.email, 
            this.usuario.nome_usuario,
            this.formulario.value.titulo,
            this.formulario.value.conteudo,
            this.nutricionista.email
        ).subscribe(() => {
          this.snackbar.open('O nutricionista recebeu sua mensagem por e-mail!', 'OK', {duration: 3000});

          this.dialogRef.close();
        });
      }
    } else {
      if (
        this.formulario.value.titulo === '' || 
        this.formulario.value.conteudo === '' ||
        this.formulario.value.emailUsuario === '' 
      ) {
        console.log(this.formulario.value);

        this.snackbar.open('Preencha todos os campos corretamente!', 'OK', {duration: 3000});
      } else {
        this.emailService.sendMsgNutricionista(
          this.formulario.value.emailUsuario, 
          '',
          this.formulario.value.titulo,
          this.formulario.value.conteudo,
          this.nutricionista.email
        ).subscribe(() => {
          this.snackbar.open('O nutricionista recebeu sua mensagem por e-mail!', 'OK', {duration: 3000});

          this.dialogRef.close();
        });
      }
    }
  
  }

}