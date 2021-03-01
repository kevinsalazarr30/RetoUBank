import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Reglas } from '../data/entities/Reglas';
import { ReglasServices } from '../services/reglas/ReglasServices';

@Component({
  selector: 'app-tab-reglas',
  templateUrl: './tab-reglas.page.html',
  styleUrls: ['./tab-reglas.page.scss'],
})
export class TabReglasPage implements OnInit {
  public listReglas: Reglas[];

  constructor(
    private reglasServices: ReglasServices,
    private navController: NavController
  ) {

  }

  ngOnInit() {


    // let obj: Reglas = new Reglas(
    //   "",
    //   "Sevilla",
    //   "Chelsea",
    //   "Jugar",
    //   "10/10/2021",
    //   ""
    // )
    // console.log(obj);
    // this.reglasServices.saveReglas(obj)

    this.getListReglas();
  }

  async ionViewDidEnter() {
    this.getListReglas();
  }

  successGetListReglas(listReglas: Reglas[]) {
    this.listReglas = listReglas;
  };
  newReglas = () => this.navController.navigateForward(['tabs/tab-reglas/detail', { reglas: JSON.stringify({ equipo: '', equipoContrario: '', evento: '', fecha: '', meta: '' }), isSave: true }])
  goToDetail = (reglas: Reglas) => this.navController.navigateForward(['tabs/tab-reglas/detail', { reglas: JSON.stringify(reglas), isSave: false }])
  getListReglas = () => this.reglasServices.getListReglas().subscribe((_res: Reglas[]) => this.successGetListReglas(_res))

}



