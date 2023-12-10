import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario-service/usuario.service';
import { Constantes } from 'src/app/shared/constantes/constantes';
import { Location } from '@angular/common';
import { NutricionistaService } from 'src/app/services/nutricionista-service/nutricionista.service';
import { PacienteService } from 'src/app/services/paciente-service/paciente.service';
import UsuarioNutricionista from 'src/app/interfaces/UsuarioNutricionista';
import UsuarioPaciente from 'src/app/interfaces/UsuarioPaciente';
import { MeuPlanoAlimentarComponent } from '../meu-plano-alimentar/meu-plano-alimentar.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-informacoes-pessoais',
  templateUrl: './informacoes-pessoais.component.html',
  styleUrls: ['./informacoes-pessoais.component.scss']
})
export class InformacoesPessoaisComponent implements OnInit { 

  load: boolean = false;
  imagem: string = '';

  usuarioNutricionista!: UsuarioNutricionista;
  usuarioPaciente!: UsuarioPaciente;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private nutricionistaService: NutricionistaService,
    private pacienteService: PacienteService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.buscarUsuario();
  }

  buscarUsuario() {
    const role: string = String(localStorage.getItem('role'));
    const nomeUsuario: string = String(localStorage.getItem('nome'));

    console.log(role);

    if (role === 'nutricionista') {
      this.nutricionistaService.getOneByNomeUser(nomeUsuario).subscribe((user) => {
        this.usuarioNutricionista = user;

        this.load =  true;
      });
    } else if (role === 'paciente') {
      this.pacienteService.getOneByNomeUser(nomeUsuario).subscribe((user) => {
        this.usuarioPaciente = user;

        this.load = true;
      })
    }
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

  abrirVisualizarPlano(): void {
    const dialogRef = this.dialog.open(MeuPlanoAlimentarComponent, {
      data: this.usuarioPaciente,
      width: '1000px',
      height: '700px'
    });
  }

  irParaMinhaComunidade(): void {
    const idNutri: string = String(localStorage.getItem('idNutri'));

    if (idNutri !== '' && idNutri !== null && idNutri !== undefined) {
      this.router.navigate(['/minha-comunidade', idNutri], {relativeTo: this.route.parent});
    }
  }

}