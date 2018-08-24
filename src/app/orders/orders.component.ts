import { Component,Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent  {


form: FormGroup;
constructor(private fb: FormBuilder) {
  this.createForm();
  this.add();
}
createForm(){
  this.form = this.fb.group({
    fullName:[],
    orderNo:[],
    orderDate:[],
    items:this.fb.array([]),
    grandTotal:[{value:0}]
  });
  this.form.valueChanges.subscribe(data=>this.update(data));
}
update(data){
  let item = data.items;
  let grand = 0;

  for(let i of item){
    i.Total = i.Qty *i.Cost;
    grand +=i.Total;
  }
  this.form.value.grandTotal = grand;

}
remove(item){
  let i = this.items.controls.indexOf(item);

  if(i != -1) {
    this.items.controls.splice(i, 1);
    let item = this.form.get('items') as FormArray;
    let data = {items: item};
    this.update(data);
  }

}

get items(): FormArray{
  return <FormArray>this.form.get('items');
}

add(): void {

  this.items.push(this.buildOrder());
}
buildOrder():FormGroup {
  return this.fb.group(
    {
    Item: '',
    Qty:'',
    Cost:'',
    Total:'',
    }
  );

}
signUp() {
  console.log(JSON.stringify(this.form.value));
}

}
