import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from '../recipe/recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private hhtpClient:HttpClient,private recipeService:RecipeService,private authService:AuthService) { }
  StorageDate(){
    let recipes=this.recipeService.getRecipes();
     
  return this.authService.user.pipe(take(1),exhaustMap(user=>{
   return this.hhtpClient.put<Recipe>('https://recipes-project-b75d8-default-rtdb.firebaseio.com/recipes.json',recipes,
    {
      params:new HttpParams().set('auth',user.token)}
      )}))
  }
 FetchData(){

   /* return this.hhtpClient.get<Recipe[]>('https://recipes-project-b75d8-default-rtdb.firebaseio.com/recipes.json')
   .pipe(map(recipes=>{
    return recipes.map(recipe=>{
     return {...recipe,ingredients:recipe.ingredients?recipe.ingredients:[]};
    })
}),
tap(recipes=>{
 this.recipeService.setRecipe(recipes);
}))*/
 
  return  this.authService.user.pipe(take(1),exhaustMap(user=>{
      return this.hhtpClient.get<Recipe[]>('https://recipes-project-b75d8-default-rtdb.firebaseio.com/recipes.json',{
        params:new HttpParams().set('auth',user.token)
      })
     }),map(recipes=>{
      return recipes.map(recipe=>{
       return {...recipe,ingredients:recipe.ingredients?recipe.ingredients:[]};
      })
 }),
 tap(recipes=>{
   this.recipeService.setRecipe(recipes);
 }))
   
   
  }
}
