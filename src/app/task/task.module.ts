import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import {TaskService} from './services/task.service';
import {MainListService} from '../main-list/services/main-list.service'
// import { MainListModule } from '../main-list/main-list.module';
import {TaskCardModule} from '../task-card/task-card.module'
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TaskCardModule
  ],
  providers:[TaskService,MainListService],
  exports:[]
})
export class TaskModule { }