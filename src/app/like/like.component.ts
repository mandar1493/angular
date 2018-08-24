import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  recievedValue: Text ;
  islike: boolean = true;

  constructor() { }
  ngOnInit() {
  }

  RecievedParameters(value) {
   this.recievedValue = value;
  }
  toggle() {
    this.islike != this.islike;
   }
}
