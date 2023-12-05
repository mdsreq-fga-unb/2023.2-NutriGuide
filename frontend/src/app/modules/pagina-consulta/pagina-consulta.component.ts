import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
    private route: ActivatedRoute  
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
  }

  irParaLogin(): void {
    this.router.navigate(['/login'], {relativeTo: this.route.parent});
  }

} 