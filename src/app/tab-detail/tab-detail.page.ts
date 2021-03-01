import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgencyInt } from '../data/interfaces/AgencyInt';
import { MetasInt } from '../data/interfaces/MetasInt';



@Component({
  selector: 'app-tab-detail',
  templateUrl: './tab-detail.page.html',
  styleUrls: ['./tab-detail.page.scss'],
})
export class TabDetailPage implements OnInit {

  isLoading: boolean;
  metas: MetasInt;
  isSave : boolean;
  constructor(
    private route: ActivatedRoute,
  ) {

    this.route.params.subscribe(params => {
      this.metas = JSON.parse(params["metas"]);
      this.isSave =  JSON.parse(params["isSave"]);
    });
    this.isLoading = false;

  };

  ionViewDidEnter() {
  }

  ngOnInit() {
  }

}
