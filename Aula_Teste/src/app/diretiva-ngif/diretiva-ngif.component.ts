import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrl: './diretiva-ngif.component.css'
})
export class DiretivaNgifComponent {
  mostraExemplo01: boolean = false;
  mostraExemplo02: boolean = false;
  mostraExemplo03: boolean = false;

  exemplo01 = () => {
    this.mostraExemplo01 = !this.mostraExemplo01
  }
  
  exemplo02 = () => {
    this.mostraExemplo02 = !this.mostraExemplo02
  }
  exemplo03 = () => {
    this.mostraExemplo03 = !this.mostraExemplo03
  }
}
