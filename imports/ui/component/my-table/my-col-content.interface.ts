import { row_data } from '../../../models/row_data';
import { col_meta_data } from '../../../models/col_meta_data';

export interface colContentInterface {
  rowData: row_data;
  colMetaData: col_meta_data;

  setData( rowDataP : row_data, colMetaDataP : col_meta_data );
}


