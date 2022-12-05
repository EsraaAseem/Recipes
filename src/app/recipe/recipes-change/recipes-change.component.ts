import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-change',
  templateUrl: './recipes-change.component.html',
  styleUrls: ['./recipes-change.component.css']
})
export class RecipesChangeComponent implements OnInit {
  recipeForm:FormGroup;
  EditMode=false;
  index:number;
  constructor(private recipeService:RecipeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.index=+params['id'];
      this.EditMode=params['id']!=null;
      this.privateform();
    })
  }
  AddnewIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount':new FormControl(null,[Validators.required,Validators.min(1)])
    })
    )
  } 
  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
    private privateform(){
     let recipeName='';
     let recipeImg=' ';
     let recipeDescrption=' ';
     let recipeIngredients=new FormArray([]);
     if(this.EditMode)
     {
          const recipe=this.recipeService.getRecipe(this.index)
          recipeName=recipe.name;
          recipeDescrption=recipe.description;
          recipeImg=recipe.imgurl;
          if(recipe['ingredients'])
          {
             for(let ingredient of recipe.ingredients){
                  recipeIngredients.push(new FormGroup({
                      'name':new FormControl(ingredient.name),
                      'amount':new FormControl(ingredient.amount)
                  }))
             }
          }
     };
       this.recipeForm=new FormGroup({
        'name':new FormControl(recipeName,Validators.required),
        'imgurl':new FormControl(recipeImg,Validators.required),
        'description':new FormControl(recipeDescrption,Validators.required),
        'ingredients':recipeIngredients,
       })


    }

    onSubmit(){
      if(this.EditMode)
      {
             this.recipeService.EditRecipe(this.recipeForm.value,this.index);
             this.EditMode=true;
      }
      else{
        this.recipeService.AddRecipe(this.recipeForm.value)
        this.EditMode=false;

      }
      this.EditMode=false;
      this.onCancel();
    }
    onCancel(){
      this.router.navigate(['../'],{relativeTo:this.route})
    }
    onDelIng(ind:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(ind);
    }
    
}
