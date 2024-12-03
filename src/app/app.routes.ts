import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { ProfileComponent } from './profile/profile.component';
import { SavedRecipieComponent } from './saved-recipie/saved-recipie.component';
import { ViewRecipieComponent } from './view-recipie/view-recipie.component';
import { PnfComponent } from './pnf/pnf.component';

export const routes: Routes = [
    //http://localhost:4200/
    {
        path:"",component:HomeComponent,title:"Home"
    },
   //http://localhost:4200/about
   {
    path:"about",component:AboutComponent,title:"About"
   },
    //http://localhost:4200/contact
    {
        path:"contact",component:ContactComponent,title:"Contact"
    },
     //http://localhost:4200/login
     {
        path:"login",component:LoginComponent,title:"Login"
    },
     //http://localhost:4200/register
     {
        path:"register",component:RegisterComponent,title:"Register"
    },
     //http://localhost:4200/recipies
     {
        path:"recipies",component:RecipiesComponent,title:"All recipes"
    },
     //http://localhost:4200/profile
     {
        path:"profile",component:ProfileComponent,title:"Profile"
    },
     //http://localhost:4200/saved-recipie
     {
        path:"saved-recipie",component:SavedRecipieComponent,title:"save recipies"
    },

     //http://localhost:4200/recipie/:id/view-recipie
     {
        path:"recipie/:id/view-recipie",component:ViewRecipieComponent,title:"view"
    },
      //http://localhost:4200/pnf
      {
        path:"**",component:PnfComponent,title:"pnf"
    },
];
