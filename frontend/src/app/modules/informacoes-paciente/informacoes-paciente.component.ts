import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario-service/usuario.service';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informacoes-paciente',
  templateUrl: './informacoes-paciente.component.html',
  styleUrls: ['./informacoes-paciente.component.scss']
})
export class InformacoesPacienteComponent implements OnInit { 

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
    this.load = true;

    this.buscarUsuario();
  }

  buscarUsuario() {
    // this.usuarioService
    // .getUserByName(String(localStorage.getItem('nome')))
    // .subscribe(
    //   (usuario) => {
    //     this.usuario = usuario;
    //     this.load = true;
    //   }
    // );
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