import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RacaService } from '../raca.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  racas: any[] = [];
  racaSelecionada?: any;
  carregando = true;

  constructor(private racaServico: RacaService, private router: Router) {

  }

  ngOnInit(): void {
    this.onListar();
    
  }

  onListar(): void {
    this.racaServico.listarRacas().subscribe({
      next: (resultado: any) => (this.racas = resultado),
      error: (erro: any) => console.log(erro),
      complete: () => this.carregando = false
    });
  }

  onSelecionar(): void {
    this.router.navigate([`/detalhes/${this.racaSelecionada.id}`])
  }
}