import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/auth.guard';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: LandingpageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'landingpage', component: LandingpageComponent},
  {path: 'owner-dashboard', component: OwnerDashboardComponent, canActivate: [AuthGuard] },
  {path: 'user-dashboard', component: UserDashboardComponent, canActivate: [AuthGuard], children: [
    // {path: 'advts', component: AllAdvtComponent},
    // {path: 'advt/:category', component: CategoryAddComponent}
  ] }

];
export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
