import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../services/task.service';
import { MainListService } from '../../main-list/services/main-list.service'
// import {}
import { TASK } from '../task'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {
  doneTasks: any
  constructor(private taskServices: TaskService, private mainListService: MainListService) { }

  ngOnInit(): void {
    this.taskServices.getDoneTasks().subscribe(res => {
      this.doneTasks = res
    })
  }

}
