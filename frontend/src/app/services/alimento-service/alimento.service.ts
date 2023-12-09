import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import Alimento from 'src/app/interfaces/Alimento';
import AlimentoPlanoAlimentar from 'src/app/interfaces/AlimentoPlanoAlimentar';
import { Constantes } from 'src/app/shared/constantes/constantes';

@Injectable({
  providedIn: 'root'
})
export class AlimentoService {

  rota: string = `${Constantes.nutriguideApi}/alimento`

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(idPaciente: number): Observable<AlimentoPlanoAlimentar[]> {
    return this.httpClient.get<AlimentoPlanoAlimentar[]>(`${this.rota}/${idPaciente}`).pipe(take(1));
  }

  insert(alimento: Alimento): Observable<any> {
    return this.httpClient.post(this.rota, alimento).pipe(take(1));
  }

}