import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Imagem } from '../models/api';


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  imagens:any;
  erro:any;

  constructor(private ApiService: ApiService) {
   this.pegarImagem();
   }

  ngOnInit(): void {
  }

  pegarImagem(){
    this.ApiService.getImg().subscribe(
      (data:Imagem) =>{
        this.imagens = data;
        console.log('Dado sendo recebido', data);
      },
      (error:any) => {
        this.erro = error;
        console.log('Erro', error);
      }
    );
  }
}
