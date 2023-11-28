import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagina-consulta',
  templateUrl: './pagina-consulta.component.html',
  styleUrls: ['./pagina-consulta.component.scss']
})
export class PaginaConsultaComponent implements OnInit {

  formulario!: FormGroup;

  // Injeção de Dependências:
  constructor(private formBuilder: FormBuilder) {}

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

  submeterFormulario() {
    const values = this.formulario.value;   // pega os dados do formulário
    console.log('Dados do formulário: ', values);
  }

} 