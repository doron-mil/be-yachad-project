import {Component, Input, OnInit} from '@angular/core';
import { row_data } from '../../../models/row_data';
import { col_meta_data } from '../../../models/col_meta_data';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})
export class MyTableComponent implements OnInit {

  @Input() rows : row_data[];
  @Input() cols_meta : col_meta_data[];

  col_count: number ;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.col_count = this.cols_meta.length ;
  }

  rowClick( row: row_data){
    row.isExpanded = !row.isExpanded ;

    if ( !row.published_date ) {
      this.dataService.getExtendedData( row );
    }

    console.log( 'doron ' + row.id );
  }

  getClassName( row: row_data){
    return ( row.isExpanded?'expansededTr':'' ) + ' recordType' + row.record_type ;
  }

}
