import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  recievedValue: number;
  num: number;
  selValue: number;
  starList: boolean[] = [true, true, true, true, true];
  constructor() { }
  ngOnInit() {
  }
  RecievedParameters(value) {
   this.recievedValue = value;
  }
  rate(num) {
    for (let i = 0; i <= 4; i++) {
      if (i < num) {
          this.starList[i] = false;
      } else {
        this.starList[i] = true;
      }
    }
   }

}
