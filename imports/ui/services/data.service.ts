import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {COLS_META_DATA, ROWS_EXT_LIST, ROWS_LIST} from './mock-data';
import {HttpClient} from '@angular/common/http';
import { row_data } from '../../models/row_data';
import { col_meta_data } from '../../models/col_meta_data';

@Injectable()
export class DataService {

  private rowsExData: row_data[];
  private colsMetaData: col_meta_data[];

  //private dummyRowsData: row_data_dummy[] = [];


  constructor( private http: HttpClient ) {
    

    // this.http.get<row_data[]>( 'assets/rowDataDummy.json').subscribe(res =>
    //   {
    //     this.rowsData = res as row_data[]
    //   } ,
    //   //this.http.get( 'assets/rowDataDummy.json')..subscribe(res =>  retrieveData( res ) )  ,
    //   err => console.log(err),
    //   () => console.log('Json read for rows Completed with ' + this.rowsData.length  + ' rows' ) );
    //
    //this.http.get( 'assets/rowData.json').subscribe(res => console.log( res ) );

    // constructor( ) {
    //this.rowsData = ROWS_LIST ;
    //this.rowsData = this.getRowsData();

    //let data : any[] ;


    // this.http.get<row_data_dummy_interface[]>( 'assets/rowDataDummy.json').subscribe(res =>
    //   {
    //     this.dummyRowsData = res as row_data_dummy_interface[]  ,
    //     console.log('bbbbbbbbbb ' + res[0].id)
    //   } ,
    //   err => console.log(err),
    //   () => console.log('Completed3 '  ) );
    //
    // console.log( "aaaaaaaaaaaa " + this.dummyRowsData.length );

    //this.rowsData = ROWS_LIST ;
    this.rowsExData = ROWS_EXT_LIST ;
    this.colsMetaData = COLS_META_DATA ;
  }



  getRowsData(): Observable<row_data[]> {

    return ( <Observable<row_data[]>>this.http.get( 'rowData.json') );
  }

  getRowsExtendedData(): Observable<row_data[]> {

    //.subscribe( rowsExData => this.rowsExData = rowsExData);

    let retData : Observable<row_data[]> ;
    retData = this.http.get<row_data[]>( 'rowDataEx.json');

    retData.subscribe( rowsExData => this.rowsExData = rowsExData);

    return ( retData );
  }


  getColsMetaData(): Observable<col_meta_data[]> {
    return of( this.colsMetaData );
  }

  getExtendedData( row :row_data ){

    let rowEx :row_data ;

    for (let rowEx of this.rowsExData) {
      if ( row.id == rowEx.id ) {
        row.hits = rowEx.hits ;
        row.published_date = rowEx.published_date ;
        row.block = rowEx.block ;
      }
    }


  }
}
