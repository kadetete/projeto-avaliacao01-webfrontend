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
  codigopais = '';
  descricao = '';
  peso = '';
  tempo_de_vida = '';
  foto = '';
  wikipedia = '';
  carregando = true;


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
            this.nome = retorno.name;
            this.origem = retorno.origin;
            this.codigopais = retorno.country_code;
            this.descricao = retorno.description;
            this.peso = retorno.weight.metric;
            this.tempo_de_vida = retorno.life_span;
            this.wikipedia = retorno.wikipedia_url;
            this.foto = 'https://cdn2.thecatapi.com/images/' + retorno.reference_image_id + '.jpg';
          },
          error: (erro: any) => console.log(erro),
          complete: () => this.carregando = false
        });
      },
    });
  }
}
