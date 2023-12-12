import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import Post from 'src/app/interfaces/Post';
import UsuarioComentario from 'src/app/interfaces/UsuarioComentario';
import { Constantes } from 'src/app/shared/constantes/constantes';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  rota: string = `${Constantes.nutriguideApi}/email`;

  constructor(
    private httpClient: HttpClient
  ) { }

  sendMailCadastro(emailPaciente: string, nome: string): Observable<any> {
    const body = {
      emailPaciente: emailPaciente,
      nome: nome
    }

    return this.httpClient.post(`${this.rota}-cadastro`, body).pipe(take(1));
  }

  sendMailPlano(emailPaciente: string, nome: string): Observable<any> {
    const body = {
      emailPaciente: emailPaciente,
      nome: nome
    }

    return this.httpClient.post(`${this.rota}-plano-alimentar`, body).pipe(take(1));
  }

  sendMsgNutricionista(
    emailPaciente: string, 
    nome: string, 
    titulo: string, 
    conteudo: string,
    emailNutri: string
  ): Observable<any> {
    let title: string = '';
    
    if (nome !== '' && nome !== null && nome !== undefined) {
      title = `${nome} te mandou um e-mail através do nutriguide!`;
    } else {
      title = `Você recebeu um e-mail através do nutriguide!`;
    }


    const html: string  = 
    `
    <div>
      <h1>${titulo}</h1>
      <h2>${conteudo}</h2>
      
      <h2>Clique no botão abaixo para acessar o nutriguide:</h2>
      <a href="https://nutriguide-req.netlify.app" style="display: inline-block; padding: 10px 20px; font-size: 16px; text-align: center; text-decoration: none; background-color: #28B225; color: #fff; border-radius: 5px;">Clique aqui para ir para o site</a>
    </div>
    `

    const body = {
      emailPaciente: emailPaciente,
      nome: nome,
      title: title,
      html: html,
      emailNutri: emailNutri
    }

    return this.httpClient.post(`${this.rota}-mensagem-nutricionista`, body).pipe(take(1));
  }

  notificarNutriComentario(usuarioComentario: UsuarioComentario): Observable<any> {
    return this.httpClient.post(`${this.rota}-notificar-comentario`, usuarioComentario).pipe(take(1));
  }

  notificarPacientesPost(nomeNutri: string): Observable<any> {
    const body = {
      nome: nomeNutri
    }

    return this.httpClient.post(`${this.rota}-notificar-pacientes`, body).pipe(take(1));
  }

}