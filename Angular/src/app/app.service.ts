import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class products{
    baseUrl = "http://localhost:5000";

    constructor(private http:HttpClient){
        console.log('Task Service Initialized...');
    }

   getTasks(){
        return this.http.get(`${this.baseUrl}/products`).subscribe(result => {

        });
      }

    addTask(id: string, name: string){
        const userFormObj = {
          id: id,
          name: name
        }
        // var headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.baseUrl}/add-products`, userFormObj).subscribe(result => {
          console.log(result);
        });
      }

    // deleteTask(id: String){
    //     return this.http.delete('/api/task/', id).subscribe(result => {

    //     });
    // }

    // updateStatus(task: string){
    //     var headers = new Headers();
    //     headers.append('Content-Type', 'application/json');
    //     return this.http.put('/api/task/'+task._id, JSON.stringify(task), {headers: headers})
    //         .map(res => res.json());
    // }
}
