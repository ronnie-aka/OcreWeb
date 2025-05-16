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
  showErrorModal = false; // Nueva propiedad para controlar el modal
  errorMessage = ''; // Mensaje dinámico

  constructor(private paymentService: PaymentService) {}

  async iniciarInscripcion() {
    this.loading = true;
    const amount = 0.05; // 10€ (se convertirá a 1000 céntimos en el Worker)
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

}
