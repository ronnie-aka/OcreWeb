import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookies-config',
  templateUrl: './cookies-config.page.html',
  styleUrls: ['./cookies-config.page.scss'],
  standalone: false,
})
export class CookiesConfigPage implements OnInit {
  // Variables para el estado de las cookies
  technicalCookies = true; // Siempre activas (no configurables)
  analyticsCookies = false;
  marketingCookies = false;
  cookiesAccepted = false;

  constructor() {}

  ngOnInit() {
    this.checkCookiePreferences();
  }

  // Verifica las preferencias guardadas en cookies
  checkCookiePreferences() {
    this.cookiesAccepted = this.getCookie('cookies_accepted') === 'true';
    this.analyticsCookies = this.getCookie('analytics_cookies') === 'true';
    this.marketingCookies = this.getCookie('marketing_cookies') === 'true';
  }

  // Guarda las preferencias de cookies
  saveCookiePreferences() {
    const expiryDays = 365;

    // Guarda las preferencias individuales
    this.setCookie(
      'analytics_cookies',
      this.analyticsCookies.toString(),
      expiryDays
    );
    this.setCookie(
      'marketing_cookies',
      this.marketingCookies.toString(),
      expiryDays
    );

    // Marca que las cookies han sido aceptadas/configuradas
    this.setCookie('cookies_accepted', 'true', expiryDays);
    this.cookiesAccepted = true;

    // Aquí puedes cargar los scripts de terceros según las preferencias
    this.loadThirdPartyScripts();
  }

  // Acepta todas las cookies
  acceptAllCookies() {
    this.analyticsCookies = true;
    this.marketingCookies = true;
    this.saveCookiePreferences();
  }

  // Rechaza todas las cookies excepto las técnicas
  rejectAllCookies() {
    this.analyticsCookies = false;
    this.marketingCookies = false;
    this.saveCookiePreferences();
  }

  // Carga scripts de terceros según las preferencias
  private loadThirdPartyScripts() {
    if (this.analyticsCookies) {
      // Cargar Google Analytics u otros scripts analíticos
      console.log('Cargando scripts analíticos...');
    }

    if (this.marketingCookies) {
      // Cargar Facebook Pixel u otros scripts de marketing
      console.log('Cargando scripts de marketing...');
    }
  }

  // Helper para obtener una cookie
  private getCookie(name: string): string {
    const cookieName = name + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');

    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return '';
  }

  // Helper para establecer una cookie
  private setCookie(name: string, value: string, expiryDays: number) {
    const date = new Date();
    date.setTime(date.getTime() + expiryDays * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  }
}
