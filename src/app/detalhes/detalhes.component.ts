import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RacaService } from '../raca.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  id = '';
  nome = '';
  origem = '';
  descricao = '';

  constructor(
    private activaRoute:  ActivatedRoute,
    private racaServico: RacaService
  ) {}

  ngOnInit(): void{
    this.activaRoute.paramMap.subscribe({
      next: (rota:any) => {
        this.id = rota.params.id;
        this.racaServico.listarRacaPeloID(this.id).subscribe({
          next: (retorno:any) => {
            this.nome = retorno.name
            this.origem = retorno.origin
            this.descricao = retorno.description
          },
        });
      },
    });
  }
}
