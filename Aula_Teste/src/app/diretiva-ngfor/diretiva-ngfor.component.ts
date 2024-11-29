import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrl: './diretiva-ngfor.component.css'
})
export class DiretivaNgforComponent {
  listaGeral = ["Bigeus", 21, true];

  listaPessoas = [
    { nome: "Bigeus", idade: 21, isCool: true},
    { nome: "Edson", idade: 30, isCool: true},
    { nome: "Bigola", idade: 200, isCool: false}
  ]
}