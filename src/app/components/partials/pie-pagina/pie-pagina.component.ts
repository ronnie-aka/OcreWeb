import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pie-pagina',
  templateUrl: './pie-pagina.component.html',
  styleUrls: ['./pie-pagina.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class PiePaginaComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  navigateToPage(ruta: string) {
    this.router.navigate([ruta]);
  }

}
