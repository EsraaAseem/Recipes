import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthRepository, AuthService } from "./auth.service";

@Component({
   selector:'app-auth',
   templateUrl:'./auth.component.html',
   styleUrls:['auth.component.css']

})
export class AuthComponent implements OnInit{
    isLogIn=false;
    isLoad=false;
    error:string=null;
    
constructor(private authservice:AuthService,private router:Router){}
ngOnInit(): void {
    
}
onSubmitForm(sub:NgForm){
  if(!sub.valid)
  {
    return;
  }
  let authobs:Observable<AuthRepository>;
  const email=sub.value.email;
  const password=sub.value.password;
  this.isLoad=true;
  if(this.isLogIn)
  {
    authobs= this.authservice.LogIn(email,password);
  }
  else{
    authobs= this.authservice.Signout(email,password);
  }

  authobs.subscribe(check=>{
    console.log(check);
        this.isLoad=false;
        this.router.navigate(['/recipe']);
   },errorMessage=>{
    this.error=errorMessage;
    console.log(errorMessage);
    this.isLoad=false;

   });
}
onSwitchMode(){
  this.isLogIn=!this.isLogIn;
}
}