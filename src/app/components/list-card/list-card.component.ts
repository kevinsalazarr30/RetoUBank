import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Agency } from 'src/app/data/entities/Agency';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
})
export class ListCardComponent implements OnInit {

  @Input() list: any[];
  @Input() isMeta: boolean;
  @Output() emitDetail = new EventEmitter<any>();

  constructor() { }

  
  goToDetail = (item: any) => this.emitDetail.emit(item);

  ngOnInit() { }

}
