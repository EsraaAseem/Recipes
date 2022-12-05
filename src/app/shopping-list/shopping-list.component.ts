import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../share/ingredient.model';
import { ShoppingListServe } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit ,OnDestroy{
 ingredients:Ingredient[]=[];
 private sub:Subscription;
  constructor( private slService:ShoppingListServe) { }

  ngOnInit(): void {
   this.ingredients= this.slService.getIngredients();
  this.sub= this.slService.showChange.subscribe((ingredients:Ingredient[])=>{
    this.ingredients=ingredients;
   })
  }
  onEdititem(num:number){
   this.slService.EditIndex.next(num);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
