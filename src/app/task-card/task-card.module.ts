import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from './task-card/task-card.component';
import {EditTaskDialog} from './task-card/task-card.component';
import {MainListModule} from '../main-list/main-list.module'


import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatDialogModule} from '@angular/material/dialog'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatCardModule} from '@angular/material/card'
import {MatCheckboxModule} from '@angular/material/checkbox'


@NgModule({
  declarations: [
    TaskCardComponent,
    EditTaskDialog
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule,
    MatCheckboxModule
  ],
  exports:[TaskCardComponent]
})
export class TaskCardModule { }
