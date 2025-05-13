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
      'https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=ccb65e3673&attid=0.3&permmsgid=msg-f:1831907183368071684&th=196c3de09e23ea04&view=att&disp=inline&realattid=f_makvbrsg2&zw&saddbat=ANGjdJ-2IVg8K3XqkBbThOC6qYrIWxW0RaNN-s9Ly_yNE-vuJCageewHzU4_viLIBeoI2fpQpn4n86h30q-Y07bvTUae_LaLLa0idsnWhuJrGj942jd0lj66_0hyg_N3Ql9x_QGTLoy4F429eHEj68-JiA4YGKGQJSBp8szJSlXzHLccks6nl582p67ayLKmPxnYVGeXdrz3BERkrTXs2pXdR4aEHvMYU7ykm2oB1WCgX1-xwYxI80o_tDeLhvkLKGf_xKl6ugmuCcGDxZOw8MptdMUbQznT9SfvhEnaDwPi7RIvsfSE3M-6QO-zGLcxJ5Wgvf9OH__PncGMXR8mC9OWEcs2KTNlleLe7IOQ7_aaODNwtVx8oUhQxmC6nKdx2gzG1xQNweFVbLUum-4gvolnBnbJIr3H51L69dwZ_GkaC_LHdCqawaz3UgkkGk_MQ-JNvad5DauZ2v7KTlaIZBQAnAxOcIHQdpx4ZqvsLHOmbNoiWK4np22LaHy9j2SV2jBVu1L_rU44-ucRpVTJkDQ4LFlw1LAvJgR78UT71pmlU_deca4tPjfyhIVNm11yWFAcyoaFDZVjZUm7aPk5WwyuXzbp3Xsy6a-YRov6CrOWWi5i01Voi0_XgA6QJqnn5lxAL1h-rFYW0HaOWXpSl_i-nbVTFyI6u-pLa0DOR64Jwpl6XPztk2JCjMqMX4kcIJFP_fd_hqJm5nv-RYswRPlDuPe3dbCAOibB-Nd7_MKlBz1jbbHSWEdVpRQ13VKzkpJy-ywCurCK3KvzjloQk8IZWRPMXOL1Y7c6P3LNksWgaFnC5SgW7--8j1YEHjMyK_VbuFxtVwmkPyYGWspmCrtXrw97cm9nv_LtnQT9iWQUIDiyZT8neMSzCjoOKgkEUFheIJ1u9_cjCwcrJl_H-u1XmN5EFE_WOq8p8XaP3jn9IMUaKDSBlnuoGJor1qM8qjSICPnSoICf50xK3GGgs8Td6HBQATbchfpPShrLdZZvb72f7EYYBH93dwHxRx82RETSowu_V08jreA9G7701Lz4CSugHirjFeDNWoE3yg';
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
