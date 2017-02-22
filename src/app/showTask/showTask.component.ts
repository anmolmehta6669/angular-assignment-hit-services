import {Component, OnInit} from "@angular/core";
import {AppService} from "../app.service";
import {Task} from "../task";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
  selector: 'show',
  templateUrl: './showTask.component.html',
  styleUrls: ['']
})

export class ShowComponent implements OnInit{
  constructor(private service: AppService, private router: Router) {}
  myTask:Task[];
  ngOnInit(){
    this.service.getData().subscribe((data: any) => {
          this.myTask=data
        }, err=>alert(err)
    );
    // this.myTask=this.service.taskArray;
  }
  goToHome(task:Task){
    // this.service.taskArray.splice(this.service.taskArray.indexOf(task),1);
      this.service.removeTask(task._id).subscribe((data: any) => {
              alert("data removed successully");
          }, err=>alert(err)
      );
      this.router.navigate(['home']);
  }
  editing(id: string){

    this.router.navigate(['create',id])
  }
}
