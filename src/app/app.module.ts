import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ListModule} from './list/list.module'
import { TaskModule } from './task/task.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainListModule } from './main-list/main-list.module';
import { TaskCardModule } from './task-card/task-card.module';
// import { TaskModule } from './task/task.module';

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    TaskModule,
    ListModule,
    MainListModule,
    BrowserAnimationsModule,
    TaskCardModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
