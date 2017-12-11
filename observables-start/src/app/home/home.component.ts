import { Component, OnInit } from '@angular/core';
import { getSubjectService } from '../subjet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private subjectService:getSubjectService) { }

  ngOnInit() {
  }

  reloadData()
  {
    this.subjectService.getData.next("fkjdsfgdskjfgsdkjf");
  }

}
