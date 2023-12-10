import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import UsuarioNutricionista from 'src/app/interfaces/UsuarioNutricionista';
import { NutricionistaService } from 'src/app/services/nutricionista-service/nutricionista.service';
import { MatDialog } from '@angular/material/dialog';
import { AdicionarAvaliacaoComponent } from '../adicionar-avaliacao/adicionar-avaliacao.component';
import { Constantes } from 'src/app/shared/constantes/constantes';
import { AvaliacoesComponent } from '../avaliacoes/avaliacoes.component';
import { EnviarEmailComponent } from '../enviar-email/enviar-email.component';

@Component({
  selector: 'app-informacoes-nutricionista',
  templateUrl: './informacoes-nutricionista.component.html',
  styleUrls: ['./informacoes-nutricionista.component.scss']
})
export class InformacoesNutricionistaComponent implements OnInit { 

  usuario!: any;
  load: boolean = false;
  imagem: string = '';
  idNutricionista!: number;
  nutricionista!: UsuarioNutricionista;
  role: string = Constantes.getRole();

  constructor(
    private nutricionistaService: NutricionistaService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.idNutricionista = this.route.snapshot.params['id'];

    this.buscarNutricionista();
  }

  buscarNutricionista() {
    this.nutricionistaService.getOne(this.idNutricionista).subscribe((n) => {
      this.nutricionista = n;

      if (n.dadofoto != null) {
        this.imagem = n.dadofoto;
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

  avaliarNutricionista(nutricionista: UsuarioNutricionista): void {
    const dialogRef = this.dialog.open(AdicionarAvaliacaoComponent, {
      data: nutricionista,
      width: '600px',
      height: '600px'
    });
  }

  abrirAvaliacoesNutricionista(nutricionista: UsuarioNutricionista): void {
    const dialogRef = this.dialog.open(AvaliacoesComponent, {
      data: nutricionista,
      width: '1000px',
      height: '700px'
    });
  }

  irParaComunidade(): void {
    this.router.navigate(['/comunidade', this.idNutricionista], {relativeTo: this.route.parent});
  }

  abrirEnviarEmail(nutricionista: UsuarioNutricionista): void {
    const dialogRef = this.dialog.open(EnviarEmailComponent, {
      data: nutricionista,
      width: '600px',
      height: '600px'
    });
  }

}