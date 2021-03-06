import { Component } from '@angular/core';
import {colContentInterface} from './my-col-content.interface';
import { row_data } from '../../../models/row_data';
import { col_meta_data } from '../../../models/col_meta_data';

@Component({
  selector: 'app-my-col-content2',
  template: `
    <div *ngIf="rowData" class="regTD" >
      <div  *ngFor="let colContent of rowData[colMetaData.property_name]">
        {{ colContent }}
      </div>
    </div>
  `,
  styleUrls: ['./my-col-content2.component.scss']
})
export class MyColContent2Component implements colContentInterface {
  rowData: row_data;
  colMetaData: col_meta_data;

  constructor() { }

  setData(rowDataP: row_data, colMetaDataP: col_meta_data) {
    this.rowData = rowDataP;
    this.colMetaData = colMetaDataP;
  }

}
