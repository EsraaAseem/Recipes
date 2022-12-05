import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
 const appRouter:Routes=[
 /*  {path:'',redirectTo:'recipe',pathMatch:'full'},*/
   {path:'',redirectTo:'/recipe',pathMatch:'full'}, 
   {path:'auth',component:AuthComponent}

] 
@NgModule({
     imports:[RouterModule.forRoot(appRouter)],
     exports:[RouterModule]
})
export class AppRoutingModule{
}