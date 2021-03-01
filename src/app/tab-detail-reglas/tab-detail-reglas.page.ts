import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Metas } from '../data/entities/Metas';
import { ReglasInt } from '../data/interfaces/Reglas';
import { MetasServices } from '../services/metas/MetasServices';

@Component({
  selector: 'app-tab-detail-reglas',
  templateUrl: './tab-detail-reglas.page.html',
  styleUrls: ['./tab-detail-reglas.page.scss'],
})
export class TabDetailReglasPage implements OnInit {

  isLoading: boolean;
  reglas: ReglasInt;
  isSave: boolean;
  listMetas: Metas[];

  constructor(
    private route: ActivatedRoute,
    private metasServices: MetasServices
  ) {

    this.route.params.subscribe(params => {
      this.reglas = JSON.parse(params["reglas"]);
      this.isSave = JSON.parse(params["isSave"]);
      console.log(this.reglas)
    });
    this.isLoading = false;

  };

  getListMetas = () => this.metasServices.getListMetas().subscribe((_res: Metas[]) => this.listMetas = _res)

  ngOnInit() {
    this.getListMetas()
  }



}
