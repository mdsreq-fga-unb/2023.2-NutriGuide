import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Constantes } from 'src/app/shared/constantes/constantes';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUserByName(nome: string): Observable<any> {

    return this.httpClient.get(`${Constantes.nutriguideApi}/user/nome?nome=${nome}`, {
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }).pipe(take(1));

  }

}