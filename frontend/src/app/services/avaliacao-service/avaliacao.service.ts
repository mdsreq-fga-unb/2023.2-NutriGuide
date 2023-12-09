import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import Avaliacao from 'src/app/interfaces/Avaliacao';
import { Constantes } from 'src/app/shared/constantes/constantes';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  rota: string = `${Constantes.nutriguideApi}/avaliacao`;

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(idNutricionista: number): Observable<Avaliacao[]> {
    return this.httpClient.get<Avaliacao[]>(`${this.rota}/${idNutricionista}`).pipe(take(1));
  }

  insert(avaliacao: Avaliacao): Observable<any> {
    return this.httpClient.post(this.rota, avaliacao).pipe(take(1));
  }

}