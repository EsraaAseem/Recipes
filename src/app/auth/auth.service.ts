import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, catchError, Subject, tap, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "./user.model";
export interface AuthRepository{
  idToken	:string;
  email:string;
  refreshToken:string;
  expiresIn:string;
  localId:string;
  registered?:boolean;
}
@Injectable({
    providedIn:'root',
})
export class AuthService{
   durationTime:any;
   user=new BehaviorSubject<User>(null);
  constructor(private httpClent:HttpClient,private router:Router){}
  Signout(email:string,password:string)
  {
      return this.httpClent.post<AuthRepository>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+environment.FirebaseKey,{
        email:email,
        password:password,
        returnSecureToken:true
       }).pipe(catchError(this.errorHandling),tap(resData=>{
        this.handlingAuthoritionCatch(resData.email,resData.localId,resData.idToken,+resData.expiresIn);
      }))
         }
  LogIn(email:string,password:string){
   return this.httpClent.post<AuthRepository>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+environment.FirebaseKey,{
    email:email,
    password:password,
    returnSecureToken:true
    }).pipe(catchError(this.errorHandling),tap(resData=>{
      this.handlingAuthoritionCatch(resData.email,resData.localId,resData.idToken,+resData.expiresIn);
    })
    )
  }
  LogOut(){
    this.user.next(null);
    this.router.navigate(['/auth'])
    localStorage.removeItem("userLog");
    if(this.durationTime)
    {
      clearTimeout(this.durationTime);
    }
    this.durationTime=null;
  }
  autoLogOut(expirationduration:number){
    this.durationTime=setTimeout(()=>{
        this.LogOut();
    },expirationduration)
  }
  autoLogIn(){
    const userData:{
      email:string;
      id:string;
      _token:string;
      _tokenExpressionData:string;
   }=JSON.parse(localStorage.getItem("userLog"))
   if(!this.user)
   {
    return;
   }
   const loadUser=new User(
    userData.email,
    userData.id,
    userData._token,
    new Date(userData._tokenExpressionData)
   );
   if(loadUser.token)
   {
    this.user.next(loadUser);
    const dur=new Date(userData._tokenExpressionData).getTime()-new Date().getTime();
    this.autoLogOut(dur);
   }
  }
  private handlingAuthoritionCatch(email:string,userId:string,token:string,expiresIn:number){
    var expiresData=new Date(new Date().getTime() +expiresIn*1000);
    const user = new User(email,userId,token,expiresData);
    this.user.next(user);
    
    this.autoLogOut(expiresIn * 1000);
    localStorage.setItem("userLog",JSON.stringify(user));

  }
 private errorHandling(errorRes:HttpErrorResponse){
  let errormessage="there is error is occured"
  if(!errorRes.error||!errorRes.error.error){
    return throwError(errormessage);
  }
  switch(errorRes.error.error.message){
      case 'EMAIL_EXISTS':
        errormessage="The email address is already exist"
        break;
        case 'EMAIL_NOT_FOUND':
          errormessage="There is no user record corresponding to this identifier";
          break;
          case 'INVALID_PASSWORD':
              errormessage=" The password is invalid ";
              break;
              case 'USER_DISABLED':
              errormessage=" The user account has been disabled by an administrator.";
                  break;
  }
  return throwError(errormessage);
 }
}