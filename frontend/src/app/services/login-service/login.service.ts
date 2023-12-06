import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) { }

  // Métodos de teste: (Tenho que implementar o login no nosso backend)

  // login(usuario: any): void {
  //   this.httpClient.post('http://localhost:3000/auth/login', usuario)
  //   .pipe(take(1))
  //   .subscribe((result: any) => {
  //     console.log(result);

  //     const token = result.token;

  //     localStorage.setItem('token', token);
  //   });
  // }

  // teste(): Observable<any> {
  //   console.log('test: ', 'Bearer ' + localStorage.getItem('token'));

  //   return this.httpClient.get('http://localhost:3000/user/656fce59b65d01d1818f0405', {
  //     headers: {
  //       authorization: 'Bearer ' + localStorage.getItem('token')
  //     }
  //   }).pipe(take(1));
  // }

}