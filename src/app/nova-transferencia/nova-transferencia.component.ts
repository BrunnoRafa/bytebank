import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Transferencia } from "../models/transferencia.model";
import { TransferenciaService } from "../services/transferencia.service";


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  valor: number;
  destino: number;

  constructor(
    private transferenciaService: TransferenciaService,
    private router: Router) { }

  transferir() {
    const transferencia: Transferencia = { valor: this.valor, destino: this.destino };

    this.transferenciaService.adicionar(transferencia)
      .subscribe(resultado => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
      },
        (error) => console.error(error)
      );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
