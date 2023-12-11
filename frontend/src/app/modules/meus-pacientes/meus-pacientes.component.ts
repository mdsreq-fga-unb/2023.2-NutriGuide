import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastrarPacienteComponent } from '../cadastrar-paciente/cadastrar-paciente.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DetalharPacienteComponent } from '../detalhar-paciente/detalhar-paciente.component';
import { take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import UsuarioPaciente from 'src/app/interfaces/UsuarioPaciente';
import { PacienteService } from 'src/app/services/paciente-service/paciente.service';
import { EmailService } from 'src/app/services/email-service/email.service';

@Component({
  selector: 'app-meus-pacientes',
  templateUrl: './meus-pacientes.component.html',
  styleUrls: ['./meus-pacientes.component.scss']
})
export class MeusPacientesComponent implements OnInit {

  colunas: string[] = ['Paciente', 'Data de Nascimento', 'Contato', 'Condições Médicas Principais', 'Ações'];
  pacientesList: UsuarioPaciente[] = [];
  load: boolean = false;
  
  constructor(
    public dialog: MatDialog,
    private snackbar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private pacienteService: PacienteService,
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
    this.listarPacientes();
  }

  listarPacientes(): void {
    this.pacienteService.getAll().subscribe((p) => {
      this.pacientesList = p;

      this.load = true;
    })
  }

  abrirDialogCadatrar(): void {
    const dialogRef = this.dialog.open(CadastrarPacienteComponent, {
      width: '1500px',
      height: '800px'
    });

    dialogRef.afterClosed().pipe(take(1)).subscribe((value) => {
      console.log(value);

      if (value === 'cancelar') {
        this.snackbar.open('Pop-up de cadastrar paciente fechado!', 'OK', {
          duration: 3000
        });
      } else {
        if (value !== undefined) {
          this.pacientesList.push(value);

          this.snackbar.open('Paciente cadastrado com sucesso!', 'OK', {
            duration: 2000
          });

          this.emailService.sendMailCadastro(value.email, value.nome_usuario).subscribe((r) => {
            this.snackbar.open('O paciente recebeu um e-mail informando sobre o cadastrado!', 'OK', {duration: 3000});
          });
        }
      }
    });
  }

  abrirDialogDetalhar(paciente: UsuarioPaciente): void {
    const dialogRef = this.dialog.open(DetalharPacienteComponent, {
      data: paciente,
      width: '1500px',
      height: '800px'
    });

    dialogRef.afterClosed().pipe(take(1)).subscribe((v) => {
        this.snackbar.open('Pop-up de detalhar paciente fechado!', 'OK', {
          duration: 3000
        });
    });
  }

  irInfoPaciente(idPaciente: number): void {
    this.router.navigate(['/informacoes-paciente', idPaciente], {relativeTo: this.route.parent});
  }

}