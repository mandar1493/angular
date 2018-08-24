import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.css']
})
export class MarksheetComponent implements OnInit {

  public eng :number;
  public math:number;
  public sci: number;
  public his:number;
  public total:number;
  public avg: number;
  public name: Text;
  public result: string;


getReport(){
  this.total = this.eng + this.math +this.sci +this.his;
  this.avg = this.total / 4;

  if(this.eng<40 || this.math<40 ||this.sci<40 ||this.his<40){
    this.result = "Fail";
  }
  else{
    this.result = "Pass";
  }
}

  constructor() { }

  ngOnInit() {
  }

}
