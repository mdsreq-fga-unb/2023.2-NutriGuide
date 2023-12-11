import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import AlimentoPlanoAlimentar from 'src/app/interfaces/AlimentoPlanoAlimentar';
import UsuarioPaciente from 'src/app/interfaces/UsuarioPaciente';
import { AlimentoService } from 'src/app/services/alimento-service/alimento.service';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-consultar-plano',
  templateUrl: './consultar-plano.component.html',
  styleUrls: ['./consultar-plano.component.scss']
})
export class ConsultarPlanoComponent implements OnInit {

  load: boolean = false;
  planoAlimentarNome: string = 'Consulta de Plano Alimentar';
  alimentosPlanoAlimentarList: AlimentoPlanoAlimentar[] = [];

  constructor(
    public dialogRef: MatDialogRef<ConsultarPlanoComponent>,
    @Inject(MAT_DIALOG_DATA) public paciente: UsuarioPaciente,
    private alimentoService: AlimentoService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.buscarAlimentosPlanoAlimentar();

    console.log(this.alimentosPlanoAlimentarList);
  }

  buscarAlimentosPlanoAlimentar(): void {
    this.alimentoService.getAll(this.paciente.id_paciente).subscribe((a) => {
      this.alimentosPlanoAlimentarList = a;
      this.planoAlimentarNome = a[0].nome_plano;

      this.load = true;
    },
    (err) => {
      this.load = true;

      this.snackbar.open(err.error.msg, 'OK', {duration: 3000});
    });
  }

  fechar(): void {
    this.dialogRef.close('fechar');
  }

  downloadPdf(): void {
    const pdf = new jsPDF('p', 'pt', 'a4');

    pdf.text('Plano Alimentar', 210, 30, { align: 'center' });
    pdf.text(`Paciente: ${this.paciente.nome_usuario}`, 210, 50, { align: 'center' });
    pdf.text(
      '-----------------------------------------------------------------------------------------------------------------------------------------------------------',
      210, 70, { align: 'center' }
    );

    let yPos = 100;

    this.alimentosPlanoAlimentarList.forEach((a) => {
      pdf.text(`Refeição: ${a.nome_refeicao}`, 20, yPos, { align: 'left' });
      pdf.text(`Alimento: ${a.nome_alimento}, ${a.quantidade_grama} gramas`, 20, yPos + 20, { align: 'left' });
      pdf.text(`Quantidade de proteínas: ${a.qnt_proteina}`, 20, yPos + 40, { align: 'left' });
      pdf.text(`Quantidade de carboidratos: ${a.qnt_carboidrato}`, 20, yPos + 60, { align: 'left' });
      pdf.text(`Quantidade de gorduras: ${a.qnt_gordura}`, 20, yPos + 80, { align: 'left' });

      yPos += 100;

      pdf.text('-----------------------------------', 210, yPos, { align: 'left' });
      yPos += 40;
    });

    pdf.save(`PlanoAlimentar_${this.paciente.nome_usuario}.pdf`);

    this.snackbar.open('PDF baixado com sucesso!', 'OK', {duration: 2500});
  }

}