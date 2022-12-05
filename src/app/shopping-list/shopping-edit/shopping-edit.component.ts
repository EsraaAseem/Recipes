import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/share/ingredient.model';
import { ShoppingListServe } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit ,OnDestroy{
  @ViewChild('in') form:NgForm;
    EditMode=false;
    ind:number;
    sub:Subscription;
    formedit:Ingredient;
  constructor(private slservice:ShoppingListServe) { }

  ngOnInit(): void {

    this.sub=this.slservice.EditIndex.subscribe((num:number)=>{
        this.ind=num;
        this.EditMode=true;
       this.formedit=this.slservice.onEdit(num);
        this.form.setValue({
          name:this.formedit.name,
          amount:this.formedit.amount
        })
    })
    
  }
  
  onAddIngredient(ingredient:NgForm){
    var ing=ingredient.value;
    const newIngredient=new Ingredient(ing.name,ing.amount)
    if(!this.EditMode)
    {
      this.slservice.AddIngredient(newIngredient);
      this.EditMode=false;
    }
    else{
      this.slservice.EditIngredient(newIngredient,this.ind);
      this.EditMode=true;
    }
    this.EditMode=false;
      ingredient.reset();
  }

  onClear(){
    this.form.reset();
    this.EditMode=false;
  }
  onDelete(){
    this.slservice.DeleteIngredient(this.ind);
     this.onClear();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
