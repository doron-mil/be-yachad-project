import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoListComponent } from '../ui/pages/todo-list/todo-list.component';
import { PageNotFoundComponent } from '../ui/pages/page-not-found/page-not-found.component';
import { AppRoutingModule } from '../ui/router/app-routing.module';

@NgModule({
  imports: [
    // Transition between server and client
    BrowserModule.withServerTransition({
      appId: 'be-yachad-project'
    }),
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    TodoListComponent,
    PageNotFoundComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
