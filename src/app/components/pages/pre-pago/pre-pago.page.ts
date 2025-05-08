import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-pre-pago',
  templateUrl: './pre-pago.page.html',
  styleUrls: ['./pre-pago.page.scss'],
  standalone: false,
})
export class PrePagoPage {
  loading = false;

  constructor(private paymentService: PaymentService) {}

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
      this.showErrorAlert();
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

  private async showErrorAlert(): Promise<void> {
    const alert = document.createElement('ion-alert');
    alert.header = 'Error en el pago';
    alert.message =
      'No se pudo iniciar el proceso de pago. Por favor, inténtalo de nuevo.';
    alert.buttons = ['OK'];
    document.body.appendChild(alert);
    await alert.present();
  }
}
