import { DetailsComponent } from './details/details.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';


const routes: Routes = 
[
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:"Home",component:HomeComponent,canActivate:[AuthGuardService]},
  {path:"Login",component:LoginComponent},
  {path:"details/:id",component:DetailsComponent,canActivate:[AuthGuardService]},

  {path:"Registration",component:RegistrationComponent},
  {path:"**",component:NotfoundComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
