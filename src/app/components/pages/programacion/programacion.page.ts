import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programacion',
  templateUrl: './programacion.page.html',
  styleUrls: ['./programacion.page.scss'],
  standalone: false,
})
export class ProgramacionPage implements OnInit {
  constructor() {}

  openProgramPDF() {
    const url =
      'https://drive.google.com/file/d/19-N_Q_JoxCLtAa-e3ZbY6L2AINfK-FZD/view?usp=sharing';
    window.open(url, '_blank');
  }

  ionViewDidEnter() {
    const tabBar = document.querySelector('ion-tab-bar');
    if (tabBar) {
      const activeTab = tabBar.querySelector('ion-tab-button[tab-selected]');
      activeTab?.scrollIntoView({ block: 'center', inline: 'center' });
    }
  }

  ngOnInit() {}
}
