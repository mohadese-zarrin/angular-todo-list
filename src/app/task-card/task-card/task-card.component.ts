import { Component, OnInit, Input, Inject, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskService } from 'src/app/task/services/task.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.sass']
})
export class TaskCardComponent implements OnInit {

  @Input() task: any
  @Input() isDone: any
  @Input() listIsMain: any

  doneBtnStyle: String = 'done-btn'
  constructor(
    public dialog: MatDialog,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    // console.log(this.task, 'this.task');

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(EditTaskDialog, {
      data: { task: this.task, listIsMain: this.listIsMain },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  onDeleteClick() {
    console.log('delete');

    this.taskService.deleteTask(this.task)
  }
  onDoneClick() {
    // this.doneBtnStyle='done-btn done'
    this.taskService.doneTask(this.task)
    this.task.done = true
  }


}

@Component({
  selector: 'app-main-list',
  templateUrl: './edit-task-dialog.html',
  styleUrls: ['./task-card.component.sass']
})
export class EditTaskDialog {

  task: any
  listIsMaina: any
  constructor(
    public dialogRef: MatDialogRef<EditTaskDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private taskService: TaskService
  ) {
    this.task = { ...this.data.task }
  }

  getVal(data: any) {
    this.task = { ...this.task, ...data }
  }
  toggle(val: any) {
    console.log(val, 'val');
    this.listIsMaina = val
  }

  onNoClick() {

    this.dialogRef.close();
  }
  onSaveClick(): void {
    if (this.listIsMaina) {
      this.task.list = this.taskService.main_list._id
      this.taskService.updateTask(this.task)
    } else {
      this.taskService.updateTask(this.task)
    }

    // this.dialogRef.close();
  }
}