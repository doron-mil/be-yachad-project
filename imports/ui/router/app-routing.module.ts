import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from '../pages/todo-list/todo-list.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/todoList', pathMatch: 'full' },
  { path: 'todoList', component: TodoListComponent },
  { path: 'todoAdd', loadChildren: '../pages/todo-add/todo-add.module#TodoAddModule', data: { title: 'Add Todo' } },
  { path: '**', component: PageNotFoundComponent, data: { title: '404 Page Not Found' } },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {


}
