import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { PacienteService } from 'src/app/services/paciente-service/paciente.service';
import UsuarioPaciente from 'src/app/interfaces/UsuarioPaciente';
import { MatDialog } from '@angular/material/dialog';
import { ProgressoPacienteComponent } from '../progresso-paciente/progresso-paciente.component';
import { RegistrarProgressoComponent } from 'src/app/modules/registrar-progresso/registrar-progresso.component';
import { ConsultarPlanoComponent } from '../consultar-plano/consultar-plano.component';
import { EditarPacienteComponent } from '../editar-paciente/editar-paciente.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { take } from 'rxjs';

@Component({
  selector: 'app-informacoes-paciente',
  templateUrl: './informacoes-paciente.component.html',
  styleUrls: ['./informacoes-paciente.component.scss']
})
export class InformacoesPacienteComponent implements OnInit { 

  usuario!: any;
  load: boolean = false;
  imagem: string = '';
  paciete!: UsuarioPaciente;
  idPaciente!: number;

  constructor(
    private pacienteService: PacienteService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.idPaciente = this.route.snapshot.params['id'];

    this.buscarPaciente();
  }

  buscarPaciente() {
    this.pacienteService.getOne(this.idPaciente).subscribe((p) => {
      this.paciete = p;

      if (p.dado_foto !== null) {
        this.imagem = p.dado_foto!;
      }

      this.load = true;
    });
  }

  irParaInicio(): void {
    this.router.navigate(['/inicio'], {relativeTo: this.route.parent});
  }

  irParaTelaAnterior(): void {
    this.location.back();
  }

  irParaGerenciarPlano(): void {
    this.router.navigate(['/gerenciar-plano', this.idPaciente], {relativeTo: this.route.parent});
  }

  abrirProgressoPaciente(paciente: UsuarioPaciente): void {
    const dialogRef = this.dialog.open(ProgressoPacienteComponent, {
      data: paciente,
      width: '1000px',
      height: '700px'
    });
  }

  abrirEditarPaciente(paciente: UsuarioPaciente): void {
    const dialogRef = this.dialog.open(EditarPacienteComponent, {
      data: paciente.id_paciente,
      width: '1500px',
      height: '800px'
    });
  }

  abrirRegistrarProgresso(paciente: UsuarioPaciente): void {
    const dialogRef = this.dialog.open(RegistrarProgressoComponent, {
      data: paciente,
      width: '1000px',
      height: '700px'
    });
  }

  abrirVisualizarPlano(paciente: UsuarioPaciente): void {
    const dialogRef = this.dialog.open(ConsultarPlanoComponent, {
      data: paciente,
      width: '1000px',
      height: '700px'
    });
  }
}