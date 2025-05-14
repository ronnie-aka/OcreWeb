import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-error-pago',
  templateUrl: './error-pago.page.html',
  styleUrls: ['./error-pago.page.scss'],
  standalone: false,
})
export class ErrorPagoPage {
  loading = false;
  errorMessage = 'Ocurrió un error durante el pago';

  constructor(
    private router: Router,
    private paymentService: PaymentService
  ) {}


  async iniciarInscripcion() {
    this.loading = true;
    const amount = 20; // 10€ (se convertirá a 1000 céntimos en el Worker)
    const orderId = this.generateOrderId();

    try {
      const response: any = await this.paymentService
        .initiatePayment(amount, orderId)
        .toPromise();

      this.submitToRedsys(
        response.redsysUrl,
        response.params,
        response.signature
      );
    } catch (error) {
      console.error('Error en el pago:', error);
    } finally {
      this.loading = false;
    }
  }

  private generateOrderId(): string {
    const timestamp = Date.now().toString();
    const random = Math.floor(Math.random() * 1000);
    return (timestamp + random.toString()).slice(-12);
  }

  private submitToRedsys(url: string, params: string, signature: string): void {
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = url;
    form.style.display = 'none';

    const addHiddenInput = (name: string, value: string) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      form.appendChild(input);
    };

    addHiddenInput('Ds_MerchantParameters', params);
    addHiddenInput('Ds_Signature', signature);
    addHiddenInput('Ds_SignatureVersion', 'HMAC_SHA256_V1');

    document.body.appendChild(form);
    form.submit();
  }

  navigateToPage(ruta: string) {
    this.router.navigate([ruta]);
  }
}
