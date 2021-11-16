import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainListComponent,AddListDialog} from './main-list/main-list.component';

import { HttpClientModule } from '@angular/common/http';

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

import { TaskCardModule } from '../task-card/task-card.module';
// import {RouterLink} from '@angular/router'



@NgModule({
  declarations: [
    MainListComponent,
    AddListDialog
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TaskCardModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCardModule
  ],
  exports:[MainListComponent]
})
export class MainListModule { }
