import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { TodoListComponent } from '../ui/pages/todo-list/todo-list.component';
import { PageNotFoundComponent } from '../ui/pages/page-not-found/page-not-found.component';
import { AppRoutingModule } from '../ui/router/app-routing.module';
import { MainTableComponent } from '../ui/pages/main-table/main-table.component';
import { MyTableComponent } from '../ui/component/my-table/my-table.component';
import { MyColContent1Component } from './../ui/component/my-table/my-col-content1.component';
import { MyColContent2Component } from '../ui/component/my-table/my-col-content2.component';
import { MyColContent3Component } from '../ui/component/my-table/my-col-content3.component';
import { DynamicColContentDirective } from '../ui/component/my-table/dynamic-col-content.directive';
import { DataService } from '../ui/services/data.service';

@NgModule({
  imports: [
    // Transition between server and client
    BrowserModule.withServerTransition({
      appId: 'be-yachad-project'
    }),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    TodoListComponent,
    MainTableComponent,
    PageNotFoundComponent,
    MyTableComponent,
    MyColContent1Component,
    MyColContent2Component,
    MyColContent3Component,
    DynamicColContentDirective,
  ],
  entryComponents: [
    MyColContent1Component,
    MyColContent2Component,
    MyColContent3Component
  ],
  providers: [DataService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
