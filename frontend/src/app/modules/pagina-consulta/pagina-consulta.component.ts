import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultarNutricionistasComponent } from '../consultar-nutricionistas/consultar-nutricionistas.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs';
import { Constantes } from 'src/app/shared/constantes/constantes';
import { UsuarioService } from 'src/app/services/usuario-service/usuario.service';

@Component({
  selector: 'app-pagina-consulta',
  templateUrl: './pagina-consulta.component.html',
  styleUrls: ['./pagina-consulta.component.scss']
})
export class PaginaConsultaComponent implements OnInit {

  formulario!: FormGroup;
  usuario!: any;
  load: boolean = false;

  // Injeção de Dependências:
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private usuarioService: UsuarioService
  ) {}

  // Construtor padrão do Angular:
  ngOnInit(): void {
    this.criarFormulario();
    this.buscarUsuario();
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

} 