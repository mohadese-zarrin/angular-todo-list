import { Injectable,OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { LIST } from 'src/app/list/list';
// import { promises } from 'dns';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class MainListService {

  main_list={
    _id:'618ffa9ab455a725d83637eb'
  }
  // options="{Content-Type:application/json}"
  // header = new Headers()
  header = new HttpHeaders({ 'Content-Type': 'application/json' });
  options: any
  constructor(private http: HttpClient) {
    this.header.append('Content-Type', 'application/json');
    this.options = { headers: this.header }
  }

  getMinListId() {
    this.http.get<any>('http://localhost:3000/api/mainList').subscribe(res => {
      this.main_list = res;
      console.log(res, 'main list');
    })
  }
  storeList(data: LIST) {
    this.http.post<any>('http://localhost:3000/api/lists', data, this.options).subscribe(data => {
      return data;
    },
      err => {
        console.log(err.headers, 'eeerrrrrrorororo');
      })
  }
  getTasks() {
    // FIXME:get mainlist id from server(use async-await-promis)
    return this.http.get<any>(`http://localhost:3000/api/tasks/query/618ffa9ab455a725d83637eb`)
  }

  getLists() : Observable<any>{
    return this.http.get<any>(`http://localhost:3000/api/lists`)
  }

  getDoneTasks() {
    return this.http.get<any>(`http://localhost:3000/api/compeleted`)
  }

}
