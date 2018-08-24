import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';

@Component({
  selector: 'app-starchild',
  templateUrl: './starchild.component.html',
  styleUrls: ['./starchild.component.css']
})
export class StarchildComponent implements OnInit {
 // stars = [true, true, true, true, true];
 ratings: number;
 // tslint:disable-next-line:no-input-rename
 @Input ('selectedValue') stars: boolean[] = [true, true, true, true, true];
 @Output('ParametersChanged') ParametersChanged = new EventEmitter();
 constructor() { }
 ngOnInit() {
 }

 setStar(a) {
   // console.log('a:' + a);
   this.ratings = a + 1;
   for (let x = 0; x <= 4; x++) {
      if (x <= a) {
       this.stars[x] = false;
     } else {
       this.stars[x] = true;
     }
   }
   console.log('rating: ' + this.ratings);
   this.ParametersChanged.emit(this.ratings);
 }
}
