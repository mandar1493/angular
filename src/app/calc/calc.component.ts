import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  public num1:number;
  public num2:number;
  public result:number;

  add(){
  this.result = this.num1 + this.num2;
  }
  sub(){
    this.result = this.num1 - this.num2;
    }
  mult(){
      this.result = this.num1 * this.num2;
      }
  div(){
        this.result = this.num1 / this.num2;
      }


  constructor() { }

  ngOnInit() {
  }

}
