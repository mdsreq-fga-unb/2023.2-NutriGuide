import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import Post from 'src/app/interfaces/Post';
import { PostService } from 'src/app/services/post-service/post.service';
import { Location } from '@angular/common';
import { ComentarioService } from 'src/app/services/comentario-service/comentario.service';
import UsuarioComentario from 'src/app/interfaces/UsuarioComentario';
import { CriarPostComponent } from '../criar-post/criar-post.component';
import { take } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-minha-comunidade',
  templateUrl: './minha-comunidade.component.html',
  styleUrls: ['./minha-comunidade.component.scss']
})
export class MinhaComunidadeComponent implements OnInit {

  idNutricionista!: number;
  postList: Post[] = [];
  comentariosList: UsuarioComentario[] = [];
  idPost!: number;
  load: boolean = false;

  constructor( 
    private sanitizer: DomSanitizer,
    private postService: PostService,
    private comentarioService: ComentarioService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.idNutricionista = this.route.snapshot.params['id'];
    this.buscarPosts();
    this.buscarComentarios();
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

  comentarios(idPost: number): UsuarioComentario[] {
    return this.comentariosList.filter((c) => c.id_post == idPost);
  }

  converterParaIframe(link: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(link);
  }

  voltar(): void {
    this.location.back();
  }

  abrirDialogCriarPost(): void {
    const dialogRef = this.dialog.open(CriarPostComponent, {
      width: '600px',
      height: '600px'
    });

    dialogRef.afterClosed().pipe(take(1)).subscribe((post: Post) => {
      if (post !== undefined) this.postList.push(post); 
    })
  }

}