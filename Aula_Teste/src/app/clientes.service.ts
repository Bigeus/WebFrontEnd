import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  urlDatabase: string = 'http:localhost:3000/clientes'

  constructor() { }

  async getClientes() {
    await fetch(this.urlDatabase).then(res => res.json());
  }
}
