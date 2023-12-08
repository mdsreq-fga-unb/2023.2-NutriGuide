import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import UsuarioNutricionista from 'src/app/interfaces/UsuarioNutricionista';
import { NutricionistaService } from 'src/app/services/nutricionista-service/nutricionista.service';

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

  constructor(
    private nutricionistaService: NutricionistaService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
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

}