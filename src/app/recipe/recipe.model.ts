import { Ingredient } from "../share/ingredient.model";

export class Recipe{
     name:string;
     description:string;
     imgurl:string;
     ingredients:Ingredient[];
    constructor( n:string,  d:string , i:string, ing:Ingredient[]){
                 this.name=n,
                 this.description=d,
                 this.imgurl=i,
                 this.ingredients=ing
         }
}