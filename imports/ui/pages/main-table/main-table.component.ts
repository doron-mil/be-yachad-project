import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';

import { DataService } from '../../services/data.service';
import { row_data } from '../../../models/row_data';
import { col_meta_data } from '../../../models/col_meta_data';

@Component({
  selector: 'main-table',
  templateUrl: 'main-table.component.html',
  styleUrls: ['main-table.component.scss']
})
export class MainTableComponent implements OnInit, OnDestroy {
  title = 'Doron App';

  rowsData: row_data[];
  rowsExData: row_data[];
  colsMetaData: col_meta_data[];
  
  constructor( private dataService: DataService) {
  }

  ngOnInit() {
    this.getData();
  }

  public getData() {
    this.dataService.getRowsData().subscribe( rowsData => this.rowsData = rowsData);
    this.dataService.getRowsExtendedData().subscribe( rowsExData => this.rowsExData = rowsExData);
    this.dataService.getColsMetaData().subscribe( colsMetaData => this.colsMetaData = colsMetaData);
  }
  ngOnDestroy() {
 
  }
 
}
