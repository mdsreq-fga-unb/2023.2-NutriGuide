import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import Post from 'src/app/interfaces/Post';
import { EmailService } from 'src/app/services/email-service/email.service';
import { PostService } from 'src/app/services/post-service/post.service';

@Component({
  selector: 'app-criar-post',
  templateUrl: './criar-post.component.html',
  styleUrls: ['./criar-post.component.scss']
})
export class CriarPostComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CriarPostComponent>,
    private formBuilder: FormBuilder,
    private postService: PostService,
    private snackbar: MatSnackBar,
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      conteudo: [''],	
      iframe: ['']
    });
  }

  registrar(): void {
    const date = new Date();

    const ano = date.getFullYear();
    const mes = date.getMonth();
    const dia = date.getDate();

    const dataAtual = ano + '-' + mes + '-' + dia;
    
    const post: Post = {
      id_post: 0,
      conteudo_post: this.formulario.value.conteudo,
      data_criacao: dataAtual,
      id_nutricionista: Number(localStorage.getItem('idNutri')),
      link_iframe: this.formulario.value.iframe
    }

    if (
      post.conteudo_post !== ''
    ) {

      this.postService.insert(post).subscribe((p) => {
        this.dialogRef.close(post);
        
        const nome = localStorage.getItem('nome')!.toString();

        this.emailService.notificarPacientesPost(nome).subscribe((r) => {
          this.snackbar.open(r.msg, 'OK', { duration: 3000 });
        })
      },
      (err) => {
        console.log('erro: ', err);

        this.snackbar.open('Preencha todos os campos corretamente!', 'OK', {
          duration: 3000
        });
      });
    }
  }

  cancelar(): void {
    this.dialogRef.close();
  }

}