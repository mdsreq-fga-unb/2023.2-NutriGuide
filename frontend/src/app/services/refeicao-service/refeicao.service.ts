import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import Refeicao from 'src/app/interfaces/Refeicao';
import { Constantes } from 'src/app/shared/constantes/constantes';

@Injectable({
  providedIn: 'root'
})
export class RefeicaoService {

  rota: string = `${Constantes.nutriguideApi}/refeicao`;

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<Refeicao[]> {
    return this.httpClient.get<Refeicao[]>(this.rota).pipe(take(1));
  }

}