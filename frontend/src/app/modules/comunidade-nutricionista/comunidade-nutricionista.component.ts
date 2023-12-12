import { Component, OnInit } from '@angular/core';
import UsuarioComentario from 'src/app/interfaces/UsuarioComentario';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import Post from 'src/app/interfaces/Post';
import { ComentarioService } from 'src/app/services/comentario-service/comentario.service';
import { PostService } from 'src/app/services/post-service/post.service';
import { NutricionistaService } from 'src/app/services/nutricionista-service/nutricionista.service';
import UsuarioNutricionista from 'src/app/interfaces/UsuarioNutricionista';
import { FormBuilder, FormGroup } from '@angular/forms';
import Comentario from 'src/app/interfaces/Comentario';
import Usuario from 'src/app/interfaces/Usuario';
import { UsuarioService } from 'src/app/services/usuario-service/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailService } from 'src/app/services/email-service/email.service';

@Component({
  selector: 'app-comunidade-nutricionista',
  templateUrl: './comunidade-nutricionista.component.html',
  styleUrls: ['./comunidade-nutricionista.component.scss']
})
export class ComunidadeNutricionistaComponent implements OnInit {

  idNutricionista!: number;
  postList: Post[] = [];
  comentariosList: UsuarioComentario[] = [];
  idPost!: number;
  load: boolean = false;
  role: string = String(localStorage.getItem('role'));
  nutricionista!: UsuarioNutricionista;
  inputComentario: boolean = false;
  formularioComentario!: FormGroup;
  usuario!: Usuario;

  constructor(
    private sanitizer: DomSanitizer,
    private postService: PostService,
    private comentarioService: ComentarioService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog,
    private nutricionistaService: NutricionistaService,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private snackbar: MatSnackBar,
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
    this.idNutricionista = this.route.snapshot.params['id'];

    this.criarFormulario();
    this.buscarUsuario();
    this.buscarNutri();
    this.buscarPosts();
    this.buscarComentarios();
  }

  criarFormulario(): void {
    this.formularioComentario = this.formBuilder.group({
      comentario: ['']
    });
  }

  buscarUsuario(): void {
    const nome: string = String(localStorage.getItem('nome'));

    if (nome !== '' && nome !== undefined && nome !== null) {
      this.usuarioService.getUserByName(nome).subscribe((user) => {
        this.usuario = user;
      })
    }
  }

  buscarNutri(): void {
    this.nutricionistaService.getOne(this.idNutricionista).subscribe((n) => {
      this.nutricionista = n;
    });
  }

  buscarPosts(): void {
    this.postService.getAllByIdNutricionista(this.idNutricionista).subscribe((p) => {
      this.postList = p
    });
  }

  buscarComentarios(): void {
    this.comentarioService.getAll().subscribe((c) => {
      this.comentariosList = c;
      this.load = true;
    })
  }

  converterParaIframe(link: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(link);
  }

  comentarios(idPost: number): UsuarioComentario[] {
    return this.comentariosList.filter((c) => c.id_post == idPost);
  }

  voltar(): void {
    this.location.back();
  }

  abrirInputComentario(): void {
    this.inputComentario = true;
  }

  comentar(idPost: number): void {
    const date = new Date();

    const ano = date.getFullYear();
    const mes = date.getMonth();
    const dia = date.getDate();

    const dataAtual = ano + '-' + mes + '-' + dia;

    const comentario: Comentario = {
      id_comentario: 0,
      data_criacao: dataAtual,
      conteudo: this.formularioComentario.value.comentario,
      id_post: idPost,
      id_usuario: this.usuario.id_usuario
    }

    const usuarioComentario: UsuarioComentario = {
      id_comentario: 0,
      data_criacao: dataAtual,
      conteudo: this.formularioComentario.value.comentario,
      id_post: idPost,
      id_usuario: this.usuario.id_usuario,
      cpf: this.usuario.cpf,
      nome_usuario: this.usuario.nome_usuario,
      email: this.usuario.email,
      sexo: this.usuario.sexo,
      telefone: this.usuario.telefone,
      cep: this.usuario.cep,
      data_nascimento: this.usuario.data_nascimento,
      tipo_usuario: this.usuario.tipo_usuario
    }

    if (comentario.conteudo !== '') {
      this.comentarioService.insert(comentario).subscribe((r) => {

        this.comentariosList.push(usuarioComentario);
        this.emailService.notificarNutriComentario(usuarioComentario).subscribe((r) => {
          this.snackbar.open(r.msg, 'OK', {duration: 3000});
        })

        // window.location.reload();   
        this.inputComentario = false;
      });
    } else {
      this.snackbar.open('Preencha o comentário...', 'OK', { duration: 3000 });
    }
  }

  fecharComentario(): void {
    this.inputComentario = false;

    this.snackbar.open('Comentários fechados!', 'OK', { duration: 3000 });
  }

}