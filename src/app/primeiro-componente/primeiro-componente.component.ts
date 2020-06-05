import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent implements OnInit {

  nome: String;
  arrayValores = ['Alisson', 'Juan', 'Gisele', 3, 2];
  constructor() { }

  ngOnInit(): void {
    //this.nome = 'Alisson Silva';
  }

  passarValor(nomePassado:string){
    this.nome = nomePassado;
  }

}
