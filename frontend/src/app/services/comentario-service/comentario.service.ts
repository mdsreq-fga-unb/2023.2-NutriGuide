import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import Comentario from 'src/app/interfaces/Comentario';
import UsuarioComentario from 'src/app/interfaces/UsuarioComentario';
import { Constantes } from 'src/app/shared/constantes/constantes';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  rota: string = `${Constantes.nutriguideApi}/comentario`;

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<UsuarioComentario[]> {
    return this.httpClient.get<UsuarioComentario[]>(`${this.rota}`).pipe(take(1));
  }

  getAllByIdPost(idPost: number): Observable<UsuarioComentario[]> {
    return this.httpClient.get<UsuarioComentario[]>(`${this.rota}/${idPost}`).pipe(take(1));
  }

  insert(comentario: Comentario): Observable<any> {
    return this.httpClient.post(this.rota, comentario).pipe(take(1));
  }

}