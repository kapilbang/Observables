import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import { getSubjectService } from '../subjet.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit ,OnDestroy{
  ngOnDestroy(): void {
    this.mynumber.unsubscribe();
    this.myTimoutSub.unsubscribe();
  }
  id: number;
mynumber:Subscription;
myTimoutSub:Subscription;

value:string;
  

  constructor(private route: ActivatedRoute,private subjectService:getSubjectService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );

      const observal = Observable.interval(1000);

      this.mynumber=  observal.subscribe((data:number) => {
        console.log(data);
      }

      );

      const mytimOut = Observable.create((observer:Observer<string>) => {

        setTimeout(()=>{ 
          observer.next("First Value");
        },2000);

        setTimeout(()=>{ 
          observer.next("Second Value");
        },4000);

        setTimeout(()=>{ 
          observer.error("error")
        },5000);

      });

   this.myTimoutSub =  mytimOut.subscribe((data:string) =>
      {
        console.log(data);
      },
    (data:string)=>
    {
      console.log(data);
    },
   ()=>
   {
    console.log("No Data since it is completed");
   });


   this.subjectService.getData.subscribe((data:string)=>{
     console.log(data);
    this.value = data;
   })



  }

}
