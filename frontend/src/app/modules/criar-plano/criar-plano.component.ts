import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import AlimentoPlanoAlimentar from 'src/app/interfaces/AlimentoPlanoAlimentar';
import Refeicao from 'src/app/interfaces/Refeicao';
import UsuarioPaciente from 'src/app/interfaces/UsuarioPaciente';
import { PacienteService } from 'src/app/services/paciente-service/paciente.service';
import { RefeicaoService } from 'src/app/services/refeicao-service/refeicao.service';
import { Location } from '@angular/common';
import { AlimentoService } from 'src/app/services/alimento-service/alimento.service';
import { PlanoAlimentarService } from 'src/app/services/plano-alimentar-service/plano-alimentar.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import PlanoAlimentar from 'src/app/interfaces/PlanoAlimentar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { InserirAlimentoComponent } from '../inserir-alimento/inserir-alimento.component';

@Component({
  selector: 'app-criar-plano',
  templateUrl: './criar-plano.component.html',
  styleUrls: ['./criar-plano.component.scss']
})
export class CriarPlanoComponent implements OnInit {

  idPaciente!: number;
  load: boolean = false;
  paciente!: UsuarioPaciente;
  alimentosList: AlimentoPlanoAlimentar[] = [];
  refeicoesList: Refeicao[] = [];
  formulario!: FormGroup;
  planoInserido: boolean = false;
  nomePlano!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pacienteService: PacienteService,
    private refeicaoService: RefeicaoService,
    private location: Location,
    private alimentoService: AlimentoService,
    private planoAlimentarService: PlanoAlimentarService,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.idPaciente = this.route.snapshot.params['id'];

    this.criarFomulario();
    this.buscarAlimentos();
    this.buscarPaciente();
    this.buscarRefeicoes();
  }

  criarFomulario(): void {
    this.formulario = this.formBuilder.group({
      nome: ['']
    });
  }

  buscarAlimentos(): void {
    this.alimentoService.getAll(this.idPaciente).subscribe((a) => {
      this.alimentosList = a;

      this.nomePlano = a[0].nome_plano;
    });
  }

  buscarPaciente(): void {
    this.pacienteService.getOne(this.idPaciente).subscribe((p) => {
      this.paciente = p;
    });
  }

  buscarRefeicoes(): void {
    this.refeicaoService.getAll().subscribe((r) => {
      this.refeicoesList = r;

      this.load = true;
    });
  }

  inserirPlano(): void {
    const nomePlano: string = this.formulario.value.nome;

    const planoAlimentar: PlanoAlimentar = {
      id_plano: 0,                  // não precisa ser informado
      id_paciente: this.idPaciente,
      nome_plano: nomePlano
    }

    if (nomePlano !== '') {
      this.planoAlimentarService.insert(planoAlimentar).subscribe((r) => {
        this.snackbar.open(r.msg, 'OK', {
          duration: 3000
        })
        
        this.formulario.disable();

        this.planoInserido = true;
        this.nomePlano = nomePlano;
      });
    }
  }

  abrirDialogAlimento(refeicao: Refeicao): void {
    const data = {
      reficaoNome: refeicao,
      refeicaoId: refeicao.id_refeicao,
      nomePlano: this.nomePlano,
      nomePaciente: this.paciente.nome_usuario
    }

    console.log(data);

    const dialogRef = this.dialog.open(InserirAlimentoComponent, {
      data: data,
      width: '600px',
      height: '600px'
    })
  }

  voltar(): void {
    this.location.back();
  }

}