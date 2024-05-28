import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { CustumersComponent } from './custumers/custumers.component';
import { NewCustumorComponent } from './new-custumor/new-custumor.component';
import { CustumoraccountComponent } from './custumoraccount/custumoraccount.component';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { AuthorizationGuard } from './guards/authorization.guard';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import {AuthenticationGuard} from "./guards/authentification.guard";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'admin', component: AdminTemplateComponent, canActivate: [AuthenticationGuard], children: [
      { path: 'custumors', component: CustumersComponent },
      { path: 'accounts', component: AccountsComponent },
      { path: 'new-Custumor', component: NewCustumorComponent, canActivate: [AuthorizationGuard], data: { role: 'ADMIN' } },
      { path: 'CustumorAccount/:id', component: CustumoraccountComponent },
      { path: 'notAuthorized', component: NotAuthorizedComponent },
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
