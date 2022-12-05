import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "../auth/auth-guard.service";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeResolverService } from "./recipe-resolver.service";
import { RecipeComponent } from "./recipe.component";
import { RecipesChangeComponent } from "./recipes-change/recipes-change.component";
import { StartRecipeComponent } from "./start-recipe/start-recipe.component";
 const recipeRouter:Routes=[
   {path:'recipe',component:RecipeComponent,children:[
    {path:'',component:StartRecipeComponent},
    {path:'new',component:RecipesChangeComponent},
    {path:':id',component:RecipeDetailsComponent,resolve:[RecipeResolverService]},
    {path:':id/edit',component:RecipesChangeComponent,resolve:[RecipeResolverService]}
/*canActivate:[AuthGuardService]*/,
]},/*,children:[
    {path:'',component:StartRecipeComponent},
    {path:'new ',component:RecipesChangeComponent},
     {path:':id',component:RecipeDetailsComponent,resolve:[RecipeResolverService]},
     {path:':id/edit ',component:RecipesChangeComponent,resolve:[RecipeResolverService]},

   ]}*/
] //,resolve:[RecipeResolverService]
@NgModule({
     imports:[RouterModule.forChild(recipeRouter)],
     exports:[RouterModule]
})
export class RecipeRoutingModule{

}