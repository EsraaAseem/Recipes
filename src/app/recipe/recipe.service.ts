import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../share/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

    private recipes:Recipe[]=[];
     recipechange=new Subject<Recipe[]>();
      constructor() { }
      getRecipes(){
        return this.recipes.slice();
      }
      setRecipe(recipe:Recipe[])
      {
        this.recipes=recipe;
        this.recipechange.next(this.recipes.slice());
      }
      AddRecipe(recipe:Recipe)
      {
        this.recipes.push(recipe);
        this.recipechange.next(this.recipes.slice());
      }
      getRecipe(index:number){
        return this.recipes[index];
      }
      EditRecipe(recipe:Recipe,index:number)
      {
        this.recipes[index]=recipe
        this.recipechange.next(this.recipes.slice());
      }
      DeleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipechange.next(this.recipes.slice());

      }
      
     
}
