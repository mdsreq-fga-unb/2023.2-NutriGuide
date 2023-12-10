import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import UsuarioNutricionista from 'src/app/interfaces/UsuarioNutricionista';
import { Constantes } from 'src/app/shared/constantes/constantes';

@Injectable({
  providedIn: 'root'
})
export class NutricionistaService {

  rota: string = `${Constantes.nutriguideApi}/nutricionista`;

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<UsuarioNutricionista[]> {
    return this.httpClient.get<UsuarioNutricionista[]>(`${this.rota}`).pipe(take(1));
  }

  getOne(idNutricionista: number): Observable<UsuarioNutricionista> {
    return this.httpClient.get<UsuarioNutricionista>(`${this.rota}/${idNutricionista}`).pipe(take(1));
  }

  getOneByNomeUser(nome: string): Observable<UsuarioNutricionista> {
    return this.httpClient.get<UsuarioNutricionista>(`${this.rota}-nome?nome=${nome}`).pipe(take(1));
  }

  // filtra por query param
  getAllNutriFiltered(nome: string, especialidade: string, regiao: string): Observable<UsuarioNutricionista[]> {
    return this.httpClient.get<UsuarioNutricionista[]>(
      `${this.rota}-filtro?nome=${nome}&especialidade=${especialidade}&regiao=${regiao}`
    ).pipe(take(1));
  }

}