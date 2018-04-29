import {Component, Input, OnInit} from '@angular/core';
import {colContentInterface} from './my-col-content.interface';
import { row_data } from '../../../models/row_data';
import { col_meta_data } from '../../../models/col_meta_data';

@Component({
  selector: 'app-my-col-content1',
  template: `
      <div>
        Instead of canvas
      </div>
  `,
  styleUrls: ['./my-col-content1.component.scss']
})
export class MyColContent1Component implements colContentInterface , OnInit {
  rowData: row_data;
  colMetaData: col_meta_data;

  public lineChartOptions:any = {
    responsive: false,
    maintainAspectRatio: false
  };
  public chartData1 = {data: [65, 59, 80, 81 ] , label: 'Series A'};
  public lineChartData1:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
  ];
  public chartLabels = ['January', 'February', 'Mars', 'April'];

  public chartData = {
    datasets: [{ data: [10, 20, 30]    }],
    labels: ['Red',      'Yellow',      'Blue'    ]
  };
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];

  public doughnutChartData:Array<any> = [
    {data: [125, 59, 22, 81 , 67 ,150 ], labels: ['January', 'February', 'Mars', 'April' , 'May']},
  ];

  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public lineChartData2:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'}
  ];

  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  constructor() {
    //console.log( "####### const rowData is : " +  ( this.rowData?"ON":"OFF" ) );
  }

  setData( rowDataP : row_data, colMetaDataP : col_meta_data ){
    this.rowData = rowDataP;
    this.colMetaData = colMetaDataP;
    //console.log( "####### rowData : " + this.rowData.rule_identifiers );
  }

  ngOnInit(): void {
    //console.log( "####### ngOnInit rowData is : " + ( this.rowData?this.rowData.rule_identifiers:'OFF' ) );

  }

}
