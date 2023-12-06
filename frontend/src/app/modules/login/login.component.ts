import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs';
import { LoginService } from 'src/app/services/login-service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formulario!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      nome: [],
      email: []
    });
  }

  login(): void {
    // pegando os dados do usuário do formulário
    const usuario = {
      nome: this.formulario.controls['nome'].value,
      email: this.formulario.controls['email'].value
    }

    // adicionar o metodo que faz o login
    this.loginService.login(usuario).pipe().subscribe((r) => {
      console.log(r)

      if (r.msg == 'Logado com sucesso!') {
        const token = r.token;

        localStorage.setItem('token', token);
        localStorage.setItem('nome', usuario.nome);

        this.snackBar.open('Logado com sucesso!', 'OK', {duration: 2500});
        this.router.navigate(['/inicio']);  // volta para a home
      } else {
        this.snackBar.open('Nome ou E-mail incorretos, tente novamente!', 'OK', {duration: 3500});
      }
    })
  }

  cancelar(): void {
    this.router.navigate(['/inicio']);  // volta para a home
  }

}