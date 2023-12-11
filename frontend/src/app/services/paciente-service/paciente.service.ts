import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import Paciente from 'src/app/interfaces/Paciente';
import UsuarioPaciente from 'src/app/interfaces/UsuarioPaciente';
import { Constantes } from 'src/app/shared/constantes/constantes';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  rota: string = `${Constantes.nutriguideApi}/paciente`;

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<UsuarioPaciente[]> {
    const responsavel = String(localStorage.getItem('nome'));

    return this.httpClient.get<UsuarioPaciente[]>(`${this.rota}?responsavel=${responsavel}`).pipe(take(1));
  }

  getOne(idPaciente: number): Observable<UsuarioPaciente> {
    return this.httpClient.get<UsuarioPaciente>(`${this.rota}/${idPaciente}`).pipe(take(1));
  }

  insert(paciente: UsuarioPaciente): Observable<any> {
    return this.httpClient.post<UsuarioPaciente>(this.rota, paciente).pipe(take(1));
  }

  update(paciente: Paciente): Observable<any> {
    return this.httpClient.put(`${this.rota}/${paciente.id_paciente}`, paciente).pipe(take(1));
  }

  getOneByNomeUser(nome: string): Observable<UsuarioPaciente> {
    return this.httpClient.get<UsuarioPaciente>(`${this.rota}-nome?nome=${nome}`).pipe(take(1));
  }

}