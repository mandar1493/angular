import {  Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-like-child',
  templateUrl: './like-child.component.html',
  styleUrls: ['./like-child.component.css']
})
export class LikeChildComponent implements OnInit {
  // stars = [true, true, true, true, true];
  status:string;
  // tslint:disable-next-line:no-input-rename
  @Input ('selectedValue') isLike: boolean = true;
  @Output('ParametersChanged') ParametersChanged = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  toggle(){
     if (this.isLike = true){
      this.status = 'like';
     }
     else{
       this.status='dislike';
     }
     console.log('status: ' + this.status);
     this.ParametersChanged.emit(this.status);

  }



  }



