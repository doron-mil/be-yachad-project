import { row_data } from '../../models/row_data';
import { col_meta_data } from '../../models/col_meta_data';

// export const ROWS_LIST: row_data[] = [
//   new row_data( 11 ,'main_FW' , ['Any','internal 1'], ['app1'] , ['Any','tftp']),
//   new row_data( 12 ,'main_FW' , ['Any','development networks'], [ 'app0', 'app1'] , ['Any','ftp'])
// ];
//
export const ROWS_LIST: row_data[] = [
  new row_data( 11 , 1 , 'main_FW' , ['Any','internal 1'], ['app1'] , ['Any','tftp']),
  new row_data( 12 , 2 , 'main_FW2' , ['Any','development networks'], [ 'app0', 'app1'] , ['Any','ftp']),
  new row_data( 13 , 3 , 'main_FW3' , ['DMZ','Finance Windows'], [ 'app3', 'app5'] , ['mnsp','ftp'])
];

let rowdata1 :row_data;
rowdata1 = new row_data( 11 , 1 , 'main_FW' , ['Any','internal 1'], ['app1'] , ['Any','tftp']);
rowdata1.hits = 3200 ;
rowdata1.block = true ;
rowdata1.published_date=new Date(2017,3,23,0,0,0,0);

let rowdata2 :row_data;
rowdata2 = new row_data( 12 , 2 , 'main_FW1' , ['Any','development networks'], [ 'app0', 'app1'] , ['Any','ftp']);
rowdata2.hits = 5300 ;
rowdata2.published_date=new Date(2018,1,1,0,0,0,0);

let rowdata3 :row_data;
rowdata3 = new row_data( 13 , 3 , 'main_FW2' , ['DMZ','Finance Windows'], [ 'app3', 'app5'] , ['mnsp','ftp']);
rowdata3.hits = 12040 ;
rowdata3.published_date=new Date(2016,8,17,0,0,0,0);

export const ROWS_EXT_LIST: row_data[] = [
  rowdata1 , rowdata2 , rowdata3
];


export const COLS_META_DATA: col_meta_data[] = [
  { header_name: 'Rule Identifiers', property_name: 'rule_identifiers' , col_type : 1 , col_width : 20 , data_class: 'riColClass'},
  { header_name: 'Source' , property_name: 'source', col_type : 2 , col_width : 25 , data_class: 'sourceColClass'},
  { header_name: 'Destination' , property_name: 'destination', col_type : 2 , col_width : 25 , data_class: 'destColClass'},
  { header_name: 'Services/Applications' , property_name: 'services_applications', col_type : 3 , col_width : 28 , data_class: 'servicesColClass'}
];
