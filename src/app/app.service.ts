import {Injectable} from "@angular/core";
import {Task} from "./task";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map'
import {Http, Headers} from "@angular/http";
import {retry} from "rxjs/operator/retry";
//import {Observable} from "rxjs/Observable";
// import 'rxjs/add/observable/of'

@Injectable()

export class AppService {
  constructor(private http: Http){}
  // showArray(){
  //   return Observable.of<any>(this.taskArray)
  // }
   getData(): Observable<any>{
     // return Promise.resolve<any>(this.taskArray)
    // return Promise.reject(Error("hahaha"))
   let jsonHeaders=new Headers({'Content-Type':'application/json'});
   return this.http.get('http://localhost:9000/get/all',{headers: jsonHeaders})
     .map(response=>{
       return this.extractData(response)
     });}


    updateTask(task: Task): Observable<any>{
        // return Promise.resolve<any>(this.taskArray)
        // return Promise.reject(Error("hahaha"))
        let obj={
            _id:task._id,
            date:task.date,
            title:task.title,
            description:task.description,
            priority:task.priority
        }
        let jsonHeaders=new Headers({'Content-Type':'application/json'});
        return this.http.post('http://localhost:9000/update',obj,{headers: jsonHeaders});

    }

     addTask(task: Task): Observable<any>{
     // return Promise.resolve<any>(this.taskArray)
    // return Promise.reject(Error("hahaha"))
       let obj={
         date:task.date,
         title:task.title,
         description:task.description,
         priority:task.priority
       }
   let jsonHeaders=new Headers({'Content-Type':'application/json'});
   return this.http.post('http://localhost:9000/add',obj,{headers: jsonHeaders});

  }

  removeTask(id: string):Observable<any>{
      let jsonHeaders=new Headers({'Content-Type':'application/json'});
      return this.http.get('http://localhost:9000/remove/'+id,{headers: jsonHeaders});
  }
  extractData(res: any){
    let body= res.json();
    return body;
  }

}
