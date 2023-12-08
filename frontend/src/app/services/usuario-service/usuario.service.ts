import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import Usuario from 'src/app/interfaces/Usuario';
import { Constantes } from 'src/app/shared/constantes/constantes';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUserByName(nome: string): Observable<Usuario> {

    return this.httpClient.get<Usuario>(`${Constantes.nutriguideApi}/user/nome?nome=${nome}`, {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }).pipe(take(1));

  }

}