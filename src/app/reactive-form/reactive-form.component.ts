import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      productId:['',Validators.required,Validators.minLength(5)],
      productName:['',Validators.required,Validators.pattern("A-Za-z*")],
      price:['',Validators.required,Validators.min(0)]
       })
  }
  ngOnInit() {
  }
  submit(){
    console.log(this.form.value);
  }
}
