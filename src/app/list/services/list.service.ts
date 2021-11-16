import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'
import { LIST } from '../list';

@Injectable({
  providedIn: 'root'
})

export class ListService {

  header = new HttpHeaders({ 'Content-Type': 'application/json' });
  options: any
  constructor(private http: HttpClient) {
    this.header.append('Content-Type', 'application/json');
    this.options = { headers: this.header }
  }

  getList(id: string) {
    return this.http.get<any>(`http://localhost:3000/api/lists/${id}`)
  }

  getTasks(id: string) {
    return this.http.get<any>(`http://localhost:3000/api/tasks/query/${id}`)
  }

  updateList(data: LIST) {
    // TODO : add options
    this.http.put<any>(`http://localhost:3000/api/lists/${data._id}`, data,this.options).subscribe(data => {
      return data;
    })
  }

  deleteList(id: string) {
    this.http.delete<any>(`http://localhost:3000/api/lists/${id}`).subscribe(data => {
      return data;
    })
  }
}
