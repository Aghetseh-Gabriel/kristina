import { RouterModule,Routes } from '@angular/router';
import  {NgModule} from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RestaurantdashComponent } from './restaurantdash/restaurantdash.component';
import { MaterialComponent } from './material/material.component';


const routes: Routes = [
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {path: '', redirectTo: 'signup',pathMatch:'full'},
   
    {
        path: 'restaurantdash',
        component: RestaurantdashComponent
    },
    {
        path: 'material',
        component: MaterialComponent
    }
];

NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export {routes};
class AppRoutingModule{}
