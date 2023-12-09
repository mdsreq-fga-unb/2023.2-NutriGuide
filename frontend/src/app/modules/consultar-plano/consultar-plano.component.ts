import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import AlimentoPlanoAlimentar from 'src/app/interfaces/AlimentoPlanoAlimentar';
import UsuarioPaciente from 'src/app/interfaces/UsuarioPaciente';
import { AlimentoService } from 'src/app/services/alimento-service/alimento.service';

@Component({
  selector: 'app-consultar-plano',
  templateUrl: './consultar-plano.component.html',
  styleUrls: ['./consultar-plano.component.scss']
})
export class ConsultarPlanoComponent implements OnInit {

  load: boolean = false;
  planoAlimentarNome: string = 'Consultar Plano Alimentar';
  alimentosPlanoAlimentarList: AlimentoPlanoAlimentar[] = [];

  constructor(
    public dialogRef: MatDialogRef<ConsultarPlanoComponent>,
    @Inject(MAT_DIALOG_DATA) public paciente: UsuarioPaciente,
    private alimentoService: AlimentoService
  ) {}

  ngOnInit(): void {
    this.buscarAlimentosPlanoAlimentar();
  }

  buscarAlimentosPlanoAlimentar(): void {
    this.alimentoService.getAll(this.paciente.id_paciente).subscribe((a) => {
      this.alimentosPlanoAlimentarList = a;
      this.planoAlimentarNome = a[0].nome_plano;

      this.load = true;
    });
  }

  fechar(): void {
    this.dialogRef.close('fechar');
  }

}