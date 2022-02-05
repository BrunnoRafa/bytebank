import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencias: any[];

  constructor() {
    this.listaTransferencias = []
  }

  get transferencias() {
    return this.listaTransferencias;
  }

  adicionar(transferencia) {
    this.adicionarData(transferencia);

    this.transferencias.push(transferencia);
  }

  private adicionarData(transferencia) {
    transferencia.data = new Date();
  }
}
