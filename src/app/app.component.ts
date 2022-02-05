import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[] = [];

  constructor(private transferenciaService: TransferenciaService) { }

  transferir($eventTransferencia) {
    this.transferenciaService.adicionar($eventTransferencia);
  }
}
