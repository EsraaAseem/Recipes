import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";
const shoppingRoute:Routes=[
    {path:'shopping-list',component:ShoppingListComponent}
]
@NgModule({
        imports:[RouterModule.forChild(shoppingRoute)],
        exports:[RouterModule]
})
export class ShoppingListRoutingModule{

}