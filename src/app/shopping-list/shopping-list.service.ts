import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../share/ingredient.model";
@Injectable({
    providedIn:'root'
})
export class ShoppingListServe{
 showChange=new Subject<Ingredient[]>();
   EditIndex=new Subject<number>();
   private ingredients:Ingredient[]=[
    new Ingredient('tomato',3),
    new Ingredient('fish',6)
   ]
   getIngredients(){
    return this.ingredients.slice();
   }
    AddIngredient( ingredient:Ingredient){
        this.ingredients.push(ingredient);
     this.showChange.next(this.ingredients.slice());
    }
    AddIngredients( ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
     this.showChange.next(this.ingredients.slice());
    }
    onEdit(num:number){
        return this.ingredients[num];
    }
    EditIngredient(ingredient:Ingredient,index:number){
         this.ingredients[index]=ingredient;
         this.showChange.next(this.ingredients.slice());
    }
    DeleteIngredient(index:number){
       this.ingredients.splice(index,1);
       this.showChange.next(this.ingredients.slice());
    }
}