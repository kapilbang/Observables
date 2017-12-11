import { Component, OnInit } from '@angular/core';
import { getSubjectService } from './subjet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  value : string;
  ngOnInit(): void {
    this.subjectService.getData.subscribe((data:string)=>{
      this.value = data;
     })
  }

  constructor(private subjectService:getSubjectService)
  {

  }
}
