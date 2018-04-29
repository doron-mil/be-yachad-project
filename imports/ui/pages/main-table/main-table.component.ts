import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';

@Component({
  selector: 'main-table',
  templateUrl: 'main-table.component.html',
  styleUrls: ['main-table.component.scss']
})
export class MainTableComponent implements OnInit, OnDestroy {
  
  ngOnInit() {
  
  }
  ngOnDestroy() {
 
  }
 
}
