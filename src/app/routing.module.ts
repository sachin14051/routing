import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./shared/components/dashboard/dashboard.component";
import { UsersComponent } from "./shared/components/users/users.component";
import { ProductsComponent } from "./shared/components/products/products.component";
import { PageErrorComponent } from "./shared/components/page-error/page-error.component";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./shared/components/home/home.component";
import { UserComponent } from "./shared/components/user/user.component";

 const routes :Routes=[
    {path :"" , component : DashboardComponent},
    {path :"home" , component : HomeComponent},
    {path :"users" , component : UsersComponent},
    {path : "users/:userId", component:UserComponent},
    {path :"products" , component : ProductsComponent},
    {path :"pageNotFound" , component : PageErrorComponent},
    {path : "**" , redirectTo : "pageNotFound"}

]


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class RoutingModule {

}