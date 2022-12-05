import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ShoppingListModule } from "../shopping-list/shopping-list.module";
import { ShoppingListServe } from "../shopping-list/shopping-list.service";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeComponent } from "./recipe.component";
import { RecipeRoutingModule } from "./recipe.routing.Module";
import { RecipesChangeComponent } from './recipes-change/recipes-change.component';
import { StartRecipeComponent } from './start-recipe/start-recipe.component';

@NgModule({
    declarations:[
  RecipeDetailsComponent,
  RecipeListComponent,
  RecipeItemComponent,
  RecipeComponent,
  RecipesChangeComponent,
  StartRecipeComponent,

    ],
imports:[CommonModule,RouterModule,RecipeRoutingModule,NgbModule,ReactiveFormsModule,ShoppingListModule]
})
export class RecipeModule{

}