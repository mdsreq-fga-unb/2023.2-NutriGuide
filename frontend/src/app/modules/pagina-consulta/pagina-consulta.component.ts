import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultarNutricionistasComponent } from '../consultar-nutricionistas/consultar-nutricionistas.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs';

@Component({
  selector: 'app-pagina-consulta',
  templateUrl: './pagina-consulta.component.html',
  styleUrls: ['./pagina-consulta.component.scss']
})
export class PaginaConsultaComponent implements OnInit {

  formulario!: FormGroup;

  // Injeção de Dependências:
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {}

  // Construtor padrão do Angular:
  ngOnInit(): void {
    this.criarFormulario();
  }

  // criando o formulário:  
  criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      atendimentoPresencial: [true],      // por padrão atencimento presencial vai vir como true
      teleconsulta: [false],
      nome: [''],
      especialidade: [''],
      cidadeRegiao: ['']
    });
  }

  submeterFormulario(): void {
    const values = this.formulario.value;   // pega os dados do formulário
    console.log('Dados do formulário: ', values);

    // passar esses dados por query param e fazer a logica no backend

    // abrir o dialog:
    const dialogRef = this.dialog.open(ConsultarNutricionistasComponent, {
      data: values,
      width: '1000px',
      height: '550px'
    });

    dialogRef.afterClosed().pipe(take(1)).subscribe(() => {
      this.snackbar.open('Pop-up de consultar nutricionistas fechado!', 'OK', {
        duration:3000
      });
    });
  }

  irParaLogin(): void {
    this.router.navigate(['/login'], {relativeTo: this.route.parent});
  }

  // função que verifica se o usuário está ou não logado
  notLogado(): boolean {
    // adicionar a lógica que verifica se está ou não logado
    return true;
  }

} 