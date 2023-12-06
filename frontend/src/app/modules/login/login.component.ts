import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    private loginService: LoginService
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
      email: this.formulario.controls['nome'].value,
      password: this.formulario.controls['email'].value
    }

    // adicionar o metodo que faz o login

    this.router.navigate(['/inicio']);  // volta para a home
  }

  cancelar(): void {
    this.router.navigate(['/inicio']);  // volta para a home
  }

}