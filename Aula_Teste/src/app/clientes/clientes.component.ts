import { Component } from '@angular/core';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  constructor(serv: ClientesService) {
    serv.getClientes().then((data) => {
      console.log(data);
    });
  }
}
