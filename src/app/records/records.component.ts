import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  constructor(private user:UserService) { }

  ngOnInit() {
  }

}
