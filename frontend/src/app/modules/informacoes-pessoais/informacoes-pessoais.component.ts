import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario-service/usuario.service';
import { Constantes } from 'src/app/shared/constantes/constantes';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Component({
  selector: 'app-informacoes-pessoais',
  templateUrl: './informacoes-pessoais.component.html',
  styleUrls: ['./informacoes-pessoais.component.scss']
})
export class InformacoesPessoaisComponent implements OnInit { 

  usuario!: any;
  load: boolean = false;
  imagem: string = '';

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
    if ( Constantes.getRole() === 'nutricionista') return true;
    
    return false;
  }

  irParaInicio(): void {
    this.router.navigate(['/inicio'], {relativeTo: this.route.parent});
  }

  irParaTelaAnterior(): void {
    this.location.back();
  }

  logout(): void {
    localStorage.clear();
    
    this.router.navigate(['/inicio'], {relativeTo: this.route.parent});
  }

  upload(event: any) { 
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];

      reader.readAsDataURL(file);

      reader.onload = (a) => {
        this.imagem = String(reader.result);

        // após isso eu faço uma lógica de salvar a imagem no banco:
      };
    }
  }

}