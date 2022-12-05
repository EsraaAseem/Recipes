import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/share/ingredient.model';
import { ShoppingListServe } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  id:number;
  recipe:Recipe;
  constructor(private shoppingservice:ShoppingListServe,private recipeService:RecipeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
      this.recipe=this.recipeService.getRecipe(this.id);
    })
  }
  AddIngredient(){
    this.shoppingservice.AddIngredients(this.recipe.ingredients)
  }
  EditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route})
}
onDelete(){
  this.recipeService.DeleteRecipe(this.id);
  this.router.navigate(['../'],{relativeTo:this.route})
}

}
