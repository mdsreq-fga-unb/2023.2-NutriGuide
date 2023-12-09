import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import Post from 'src/app/interfaces/Post';
import { Constantes } from 'src/app/shared/constantes/constantes';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  rota: string = `${Constantes.nutriguideApi}/post`;

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.rota}`).pipe(take(1));
  }

  getAllByIdNutricionista(idNutricionista: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.rota}/${idNutricionista}`).pipe(take(1));
  }

  insert(post: Post): Observable<any> {
    return this.httpClient.post(this.rota, post).pipe(take(1));
  }

}