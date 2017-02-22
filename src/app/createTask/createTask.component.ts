import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Task} from "../task";
import {AppService} from "../app.service";


@Component({
  moduleId: module.id,
  selector: 'create',
  templateUrl: './createTask.component.html',
  styleUrls: ['']
})

export class CreateComponent implements OnInit{
  task=new Task('','','','');
  myTasks:Task[];
  index:string=null;
  constructor(private service: AppService,private route: ActivatedRoute, private router: Router) {}
  ngOnInit(){

    this.route.params.subscribe((data:any)=> {
        this.index = data.id;
        this.service.getData().subscribe((data: any) => {
            this.myTasks=data;
            if (this.index!=null)
                this.task = this.myTasks.filter(x=>x._id==this.index)[0];

            }, err=>alert(err)
        );

    });
      // this.service.showArray().subscribe((data: any) => {
      //   alert(JSON.stringify(data))
      // }, err=>alert("wrong input")
      // );
      // this.service.showArray().then((data: any) => {
      //   alert(JSON.stringify(data))
      // }, err=>alert(err)
      // );

    // this.service.addTask().subscribe(data=> {alert(JSON.stringify(data))},err=>alert("na na")
    // )

  }
  pushTask() {
    // let obj={
    //   date: this.task.date,
    //   title: this.task.title,
    //   description: this.task.description,
    //   priority: this.task.priority
    // }
    if(this.index!=null){
      this.service.updateTask(this.task).subscribe(data=> {alert("data added successfully")},err=>alert("Error occured"));
        this.index=null;
    }
    else {
      this.service.addTask(this.task).subscribe(data=> {alert("data added successfully")},err=>alert("Error occured"));
    }
    this.router.navigate(['show'])
  }
}
