import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  product_id :number;
  productName:Text;
  price:number;
  constructor() {

   }

  ngOnInit() {
  }
  submit(form){
    console.log(form)
  }
}
