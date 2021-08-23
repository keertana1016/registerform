import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { EmailComponent } from './email/email.component';
import { FormComponent } from './form/form.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path:'',
    component:FormComponent
  },
  {
    path:'welcome',
    component:WelcomeComponent
  },
  {
   path:'companydetails',
   component:CompanydetailsComponent
  },
  {
    path:'email',
    component:EmailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
