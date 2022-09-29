import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {LoginboxComponent} from "./loginbox/loginbox.component";
import {AmplifyAuthenticatorModule} from "@aws-amplify/ui-angular";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    LoginboxComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: LoginboxComponent }]),
    AmplifyAuthenticatorModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
  ]
})
export class LoginModule { }
