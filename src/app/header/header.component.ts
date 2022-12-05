import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipe/recipe.model';
import { DataStorageService } from '../share/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,OnDestroy{
  public gfg = false;
   sub: Subscription;
   isAuth=false;
  constructor(private storage:DataStorageService,private authService:AuthService) { }

  ngOnInit(): void {
   this.sub=this.authService.user.subscribe(user=>{
    this.isAuth=!!user;
   })
  }
  onStorageDate(){
  this.storage.StorageDate();
  }
  onFetchRecipes(){
    this.storage.FetchData().subscribe();
  }
  onLogOut(){
    this.authService.LogOut();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
