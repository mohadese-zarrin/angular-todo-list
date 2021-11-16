import { Injectable } from '@angular/core';
import { TASK } from '../task'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { MainListService } from '../../main-list/services/main-list.service'


@Injectable({
  providedIn: 'root'
})

export class TaskService {

  header = new HttpHeaders({ 'Content-Type': 'application/json' });
  options: any
  main_list={
    _id:"618ffa9ab455a725d83637eb"
  }

  constructor(private http: HttpClient, private mainListService: MainListService) {
    this.header.append('Content-Type', 'application/json');
    this.options = { headers: this.header }
  }

  getMinListId() {
    this.http.get<any>('http://localhost:3000/api/mainList').subscribe(res => {
      this.main_list = res;
      console.log(res, 'main list');
    })
  }

  storeTask(data: TASK) {
    this.http.post<any>('http://localhost:3000/api/tasks', data, this.options).subscribe(data => {
      return data;
    },
      err => {
        console.log(err.headers, 'eeerrrrrrorororo');
      })
  }
  getTask(id: string) {
    this.http.get<any>(`http://localhost:3000/api/tasks/${id}`).subscribe(data => {
      return data;
    })
  }

  deleteTask(task:TASK) {
    this.http.delete<any>(`http://localhost:3000/api/tasks/${task._id}`).subscribe(data => {
      return data;
    })
  }
  doneTask(task:TASK){
    let newTask = {done:true}
    this.http.put<any>(`http://localhost:3000/api/tasks/${task._id}`,newTask,this.options).subscribe(data => {
      return data;
    })
  }
  getDoneTasks(){
    return this.http.get<any>('http://localhost:3000/api/compeleted')
  }

  moveTaskToMain(task: TASK) {
    let newTask = {_id:this.main_list._id}
    this.http.put<any>(`http://localhost:3000/api/tasks/${task._id}`, { newTask },this.options).subscribe(data => {
      return data;
    })
  }

  updateTask(task: TASK) {
    console.log('in service');
    
    this.http.put<any>(`http://localhost:3000/api/tasks/${task._id}`,task,this.options).subscribe(data => {
      return data;
    })

  }
}
