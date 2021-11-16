import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common'
import {ActivatedRoute} from '@angular/router'
import { LIST } from '../list';
import {ListService} from '../services/list.service'
import {TaskService} from '../../task/services/task.service'
import { TASK } from 'src/app/task/task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})

export class ListComponent implements OnInit {
  list_id:any
  list:LIST={
    title:''
  }
  tasks:any
  changed=false
  newTask:TASK
  constructor(private route:ActivatedRoute,
    private listServices:ListService,
    private taskService:TaskService,
    private location:Location) { 
    this.list_id=this.route.snapshot.paramMap.get('id')
    this.newTask={
      title:'',
      list:this.route.snapshot.paramMap.get('id')
    }
  }

  getVal(data:any){
    this.changed=true
    this.list={...this.list,...data}
  }

  ngOnInit(): void {
    this.listServices.getList(this.list_id).subscribe(res=>{
      console.log(res,'gggg')
      this.list=res
    })
     this.listServices.getTasks(this.list_id).subscribe(res=>{
       console.log(res,'task list')
      this.tasks=res
     })
  }

  deleteList(){
    this.listServices.deleteList(this.list_id)
    this.location.back()
  }
  
  updateList(){
    this.listServices.updateList(this.list)
    this.changed=false
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

}
