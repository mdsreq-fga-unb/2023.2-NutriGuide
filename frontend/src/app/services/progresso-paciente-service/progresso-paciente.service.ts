import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import ProgressoPaciente from 'src/app/interfaces/ProgressoPaciente';
import { Constantes } from 'src/app/shared/constantes/constantes';

@Injectable({
  providedIn: 'root'
})
export class ProgressoPacienteService {

  rota: string = `${Constantes.nutriguideApi}/progresso-paciente`

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllByIdPaciente(idPaciente: number): Observable<ProgressoPaciente[]> {
    return this.httpClient.get<ProgressoPaciente[]>(`${this.rota}/${idPaciente}`).pipe(take(1))
  }

  insert(progresso: ProgressoPaciente): Observable<any> {
    return this.httpClient.post(this.rota, progresso).pipe(take(1));
  }

}