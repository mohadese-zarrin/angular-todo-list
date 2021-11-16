import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { MainListComponent } from './main-list/main-list/main-list.component';
import { ListComponent } from './list/list/list.component';
import { TaskComponent } from './task/task/task.component';

const router: Routes = [
  { path: 'mainlist', component: MainListComponent },
  { path: 'list/:id', component: ListComponent },
  { path: 'tasks', component: TaskComponent },
  {path: '**',redirectTo: 'mainlist'},
  
]

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
