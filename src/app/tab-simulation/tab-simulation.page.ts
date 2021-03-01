import { Component, OnInit } from '@angular/core';
import { Reglas } from '../data/entities/Reglas';
import { ReglasServices } from '../services/reglas/ReglasServices';

@Component({
  selector: 'app-tab-simulation',
  templateUrl: './tab-simulation.page.html',
  styleUrls: ['./tab-simulation.page.scss'],
})
export class TabSimulationPage implements OnInit {

  public listReglas: Reglas[];
  constructor(private reglasServices: ReglasServices) {

  }

  getListMetas = () => this.reglasServices.getListReglas().subscribe((_res: Reglas[]) => this.listReglas = _res)

  ngOnInit() {
    this.getListMetas()
  }


}
