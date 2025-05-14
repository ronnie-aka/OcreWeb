// services/payment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private backendUrl = "https://redsys-worker.ronald-hernandez-3e9.workers.dev";

  constructor(private http: HttpClient) { }

  initiatePayment(amount: number, orderId: string) {
    return this.http.post(this.backendUrl, {
      amount,
      orderId,
      urlOk: 'https://docs.google.com/forms/d/11qMf7QhL7Kd8FhNIoj-NUPSZIuLPUTfBO2RfuVGuync/preview',
      urlKo: 'https://iv-congreso-ocre.web.app/congreso/error-pago' // Nueva URL de error
    }).pipe(
      catchError(error => {
        // Maneja errores HTTP (ej: red caída, timeout)
        return throwError(() => ({
          type: 'http_error',
          message: 'Error al conectar con la pasarela de pago'
        }));
      })
    );
  }
}