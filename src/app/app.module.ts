import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CompanydetailsComponent } from './companydetails/companydetails.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component'; 
import { EmailComponent } from './email/email.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormComponent,
    PersonalDetailsComponent,
    CompanydetailsComponent,
    EmailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule

   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
