import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Agency } from '../data/entities/Agency';
import { Metas } from '../data/entities/Metas';
import { AgencyServices } from '../services/agency/AgencyServices';
import { MetasServices } from '../services/metas/MetasServices';

@Component({
  selector: 'app-tab-client',
  templateUrl: 'tab-client.page.html',
  styleUrls: ['tab-client.page.scss']
})
export class TabClientPage {

  public listMetas: Metas[];


  constructor(
    private metasServices: MetasServices,
    private navController: NavController
  ) {

  }

  ngOnInit() {


    // let obj: Metas = new Metas(
    //   "",
    //   "Solo ahorrar",
    //   "10/10/2020"
    // )
    // console.log(obj);
    // this.metasServices.saveMeta(obj)

    this.getListMetas();
  }

  async ionViewDidEnter() {
    this.getListMetas();
  }

  successGetListAgencies(listMetas: Metas[]) {
    this.listMetas = listMetas;
  };
  newMeta = () => this.navController.navigateForward(['tabs/tab-home/detail', { metas: JSON.stringify({ tipoMeta: '', fecha: '', montoAhorrar: '' }), isSave: true }])
  goToDetail = (metas: Metas) => this.navController.navigateForward(['tabs/tab-home/detail', { metas: JSON.stringify(metas), isSave: false }])
  getListMetas = () => this.metasServices.getListMetas().subscribe((_res: Metas[]) => this.successGetListAgencies(_res))


}
