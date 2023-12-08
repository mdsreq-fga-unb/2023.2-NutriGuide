import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, take } from 'rxjs';
import { LoginService } from 'src/app/services/login-service/login.service';
import { UsuarioService } from 'src/app/services/usuario-service/usuario.service';

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
    private snackBar: MatSnackBar,
    private usuarioService: UsuarioService
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
    this.loginService.login(usuario).subscribe(
    // sucesso:
    (r) => {
      const token = r.token;
      const msg = r.msg;

      localStorage.setItem('token', token);
      localStorage.setItem('nome', usuario.nome);

      this.snackBar.open(msg, 'OK', {duration: 2500});
  
      this.usuarioService.getUserByName(usuario.nome)
      .pipe(take(1))
      .subscribe((user) => {

        localStorage.setItem('role', user.role);

        if(user.role === 'nutricionista') {
          this.router.navigate(['/consultar-pacientes']);  // vai para a página de meus pacientes
        } else {
          this.router.navigate(['/inicio']);  // volta para a home
        }

      })
    },
    // erro:
    (e) => {
      const msg: string = e.error.msg;
      this.snackBar.open(msg, 'OK', {duration: 2500});
    })
  }

  cancelar(): void {
    this.router.navigate(['/inicio']);  // volta para a home
  }

}