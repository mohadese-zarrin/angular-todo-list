import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router'
import { MainListService } from '../services/main-list.service';
import { TaskService } from '../../task/services/task.service'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LIST } from 'src/app/list/list';
import { TASK } from 'src/app/task/task';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.sass']
})

export class MainListComponent implements OnInit {
  tasks = []
  newTask: TASK
  lists: any
  constructor(
    private router: Router,
    private mainListService: MainListService,
    public dialog: MatDialog,
    private taskService: TaskService) {
      this.newTask={
        title:'',
        list:this.mainListService.main_list._id
      }
     }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddListDialog, {
      // data: { },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }
  
  getNewTaskVal(data: any) {
    console.log(this.newTask);
    this.newTask = { ...this.newTask, ...data }
  }
  addTask() {
    // TODO:add validation
    console.log('kkkkkkkkkkkk');
    
    this.taskService.storeTask(this.newTask)
  }
  goToList(id: string) {
    this.router.navigate(['list', id])
    
  }
  getTasks() {
    this.mainListService.getTasks().subscribe(res => {
      console.log(res, 'tasks');
      this.tasks = res
    }, err => {
      console.log(err.headers, 'eeerrrrrrorororo');
    })
  }
  getDoneTasks(){
    // this.mainListService.getDoneTasks().subscribe(res=>{
    // })
    this.router.navigate(['tasks'])

  }
  ngOnInit() {
    this.mainListService.getMinListId()
    this.mainListService.getLists().subscribe(res => {
      this.lists = res
    })
    this.getTasks()
  }
  // test_promis=new Promise (this.mainListService.getMinListId)
}


@Component({
  // selector: 'add-list-dialog',
  selector: 'app-main-list',
  templateUrl: './add-list-dialog.html',
  styleUrls: ['./main-list.component.sass']
})
export class AddListDialog {
  list: LIST

  getVal(data: any) {
    this.list = { ...this.list, ...data }
  }
  constructor(
    public dialogRef: MatDialogRef<AddListDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mainListService: MainListService,
  ) {
    this.list = {
      title: ''
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSaveClick(): void {
    // TODO:add validation
    this.mainListService.storeList(this.list)
    this.dialogRef.close();
  }
}