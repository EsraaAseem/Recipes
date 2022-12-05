import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/share/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(private recipeServe:RecipeService,private route:ActivatedRoute,private router:Router) { }
sub:Subscription;
recipes:Recipe[]=[];
  ngOnInit(): void {
    this.recipeServe.recipechange.subscribe((recipe:Recipe[])=>{
      this.recipes=recipe;
    });
   this.recipes =this.recipeServe.getRecipes();
 
}
AddRecipe(){
  this.router.navigate(['new'],{relativeTo:this.route})
}

}