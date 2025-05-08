import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  loading = false;

  constructor(private router: Router) {}

  navigateToPage(ruta: string) {
    this.router.navigate([ruta]);
  }
}
