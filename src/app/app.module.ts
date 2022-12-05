import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app.routing.module';
import { RecipeModule } from './recipe/recipe.module';
import { RouterModule } from '@angular/router';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import{HttpClientModule, HTTP_INTERCEPTORS}from'@angular/common/http';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './share/loading-spinner/loading-spinner.component';
import { FormsModule, NgForm } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { AuthInterService } from './auth/authinter.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    RecipeModule,
    ShoppingListModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [/*{provide:HTTP_INTERCEPTORS,useClass:AuthInterService,multi:true}*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
