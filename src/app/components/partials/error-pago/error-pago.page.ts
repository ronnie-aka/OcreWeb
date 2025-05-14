import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-pago',
  templateUrl: './error-pago.page.html',
  styleUrls: ['./error-pago.page.scss'],
  standalone: false,
})
export class ErrorPagoPage implements OnInit {

  errorMessage = 'Ocurrió un error durante el pago';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Opcional: Recibe parámetros de error desde la URL
    this.route.queryParams.subscribe(params => {
      if (params['error']) {
        this.errorMessage = this.decodeErrorMessage(params['error']);
      }
    });
  }

  private decodeErrorMessage(errorCode: string): string {
    const errors: Record<string, string> = {
      'card_declined': 'Tarjeta rechazada',
      'insufficient_funds': 'Fondos insuficientes',
      'timeout': 'Tiempo de espera agotado',
      // Añade más códigos según lo que Redsys pueda devolver
    };
    return errors[errorCode] || this.errorMessage;
  }
}