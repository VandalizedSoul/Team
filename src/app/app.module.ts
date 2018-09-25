import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { StartComponent } from './start/start.component';
import { DefaultpageComponent } from './defaultpage/defaultpage.component';
import { FindComponent } from './find/find.component';
import { FinddetailsComponent } from './finddetails/finddetails.component';
import { FormsModule }   from '@angular/forms';
import {Global} from './user'
const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full'},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'start', component: StartComponent},
  {path: 'find', component: FindComponent},
  {path: 'finddetails/:id', pathMatch: 'full', component: FinddetailsComponent},
  { path: '**', component: DefaultpageComponent},
];  


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    StartComponent,
    DefaultpageComponent,
    FindComponent,
    FinddetailsComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes),FormsModule
  ],
  exports: [RouterModule],
  providers: [Global],
  bootstrap: [AppComponent]
})
export class AppModule { }
