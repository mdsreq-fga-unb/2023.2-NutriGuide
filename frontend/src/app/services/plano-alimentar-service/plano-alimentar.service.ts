import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import PlanoAlimentar from 'src/app/interfaces/PlanoAlimentar';
import { Constantes } from 'src/app/shared/constantes/constantes';

@Injectable({
  providedIn: 'root'
})
export class PlanoAlimentarService {

  rota: string = `${Constantes.nutriguideApi}/plano-alimentar`;

  constructor(
    private httpClient: HttpClient
  ) { }

  getByName(nome: string): Observable<PlanoAlimentar> {
    return this.httpClient.get<PlanoAlimentar>(`${this.rota}?nome=${nome}`).pipe(take(1));
  }

  insert(planoAlimentar: PlanoAlimentar): Observable<any> {
    return this.httpClient.post(this.rota, planoAlimentar).pipe(take(1));
  }

}