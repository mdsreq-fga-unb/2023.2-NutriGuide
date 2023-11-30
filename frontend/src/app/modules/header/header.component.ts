import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private rotaAtiva: string = '';

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pegarRotaAtual();

    console.log(this.rotaAtiva);
  }

  pegarRotaAtual(): void {
    this.rotaAtiva = String(this.router.config[1].path);
  }

}