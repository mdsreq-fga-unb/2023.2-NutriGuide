import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario-service/usuario.service';
import { Constantes } from 'src/app/shared/constantes/constantes';
import { Location } from '@angular/common';

@Component({
  selector: 'app-informacoes-pessoais',
  templateUrl: './informacoes-pessoais.component.html',
  styleUrls: ['./informacoes-pessoais.component.scss']
})
export class InformacoesPessoaisComponent implements OnInit { 

  usuario!: any;
  load: boolean = false;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.buscarUsuario();
  }

  buscarUsuario() {
    this.usuarioService
    .getUserByName(String(localStorage.getItem('nome')))
    .subscribe(
      (usuario) => {
        this.usuario = usuario;
        this.load = true;
      }
    );
  }

  isNutricionista(): boolean {
    if (Constantes.isNutricionista(this.usuario) === 'nutricionista') return true;
    
    return false;
  }

  irParaInicio(): void {
    this.router.navigate(['/inicio'], {relativeTo: this.route.parent});
  }

  irParaTelaAnterior(): void {
    this.location.back();
  }

}