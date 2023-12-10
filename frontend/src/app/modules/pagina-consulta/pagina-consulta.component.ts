import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultarNutricionistasComponent } from '../consultar-nutricionistas/consultar-nutricionistas.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs';
import { Constantes } from 'src/app/shared/constantes/constantes';
import { UsuarioService } from 'src/app/services/usuario-service/usuario.service';
import { PacienteService } from 'src/app/services/paciente-service/paciente.service';
import UsuarioNutricionista from 'src/app/interfaces/UsuarioNutricionista';
import { NutricionistaService } from 'src/app/services/nutricionista-service/nutricionista.service';
import Usuario from 'src/app/interfaces/Usuario';

@Component({
  selector: 'app-pagina-consulta',
  templateUrl: './pagina-consulta.component.html',
  styleUrls: ['./pagina-consulta.component.scss']
})
export class PaginaConsultaComponent implements OnInit {

  formulario!: FormGroup;
  usuario!: Usuario;
  load: boolean = false;
  nutriResponsavel!: UsuarioNutricionista;
  role: string = String(localStorage.getItem('role'));
  strTooltip: string = '';

  // Injeção de Dependências:
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private usuarioService: UsuarioService,
    private pacienteService: PacienteService,
    private nutricionistaService: NutricionistaService
  ) {}

  // Construtor padrão do Angular:
  ngOnInit(): void {
    this.buscarIdNutriResponsavel();
    this.criarFormulario();
    this.buscarUsuario();
  }

  buscarIdNutriResponsavel(): void {
    if (this.role === 'paciente') {
      this.pacienteService.getOneByNomeUser(String(localStorage.getItem('nome')))
      .subscribe((p) => {
        this.nutricionistaService.getOneByNomeUser(p.nutricionista_responsavel)
        .subscribe((n) => {
          this.nutriResponsavel = n;

          if (p.sexo === 'M') {
            this.strTooltip = 'Ir para comunidade de ' + this.nutriResponsavel.nome_usuario + ', seu nutricionista';
          } else {
            this.strTooltip = 'Ir para comunidade de ' + this.nutriResponsavel.nome_usuario + ', sua nutricionista';
          }
        });
      });
    }
  }

  // criando o formulário:  
  criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      nome: [''],
      especialidade: [''],
      regiao: ['']
    });
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

  submeterFormulario(): void {
    const values = this.formulario.value;

    // abrir o dialog:
    const dialogRef = this.dialog.open(ConsultarNutricionistasComponent, {
      data: values,
      width: '1000px',
      height: '600px'
    });

    dialogRef.afterClosed().pipe(take(1)).subscribe(() => {
      this.snackbar.open('Pop-up de consultar nutricionistas fechado!', 'OK', {
        duration:3000
      });

      this.formulario.reset();
      this.criarFormulario();

    });
  }

  irParaLogin(): void {
    this.router.navigate(['/login'], {relativeTo: this.route.parent});
  }

  // função que verifica se o usuário está ou não logado
  isLogado(): boolean {
    return Constantes.isLogado();
  }

  isNutricionista(): boolean {
    if ( Constantes.getRole() === 'nutricionista') return true;
    
    return false;
  }

  irParaMeuPerfil(): void {
    this.router.navigate(['/informacoes-pessoais'], {relativeTo: this.route.parent});
  }

  irParaMinhaComunidade(): void {
    this.router.navigate(['/minha-comunidade', localStorage.getItem('idNutri')], {relativeTo: this.route.parent});
  }

  irParaComunidadeDoNutri(): void {
    this.router.navigate(['/comunidade', this.nutriResponsavel.id_nutricionista], {relativeTo: this.route.parent});
  }

} 