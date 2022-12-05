import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public gfg = false;
   constructor(private AuthService:AuthService){}
   ngOnInit(): void {
    this.AuthService.autoLogIn();
  }
;
   
}
  
