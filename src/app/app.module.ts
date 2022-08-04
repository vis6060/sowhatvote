import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LegacyAmplifyUiModule } from '@aws-amplify/ui-angular/legacy';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';

import Amplify from "aws-amplify";
import awsconfig from "src/aws-exports";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AmplifyAuthenticatorModule} from "@aws-amplify/ui-angular";


Amplify.configure(awsconfig);
import aws_exports from "src/aws-exports";
Amplify.configure(aws_exports);
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {DirectAccessGuardService} from "./direct-access-guard.service";
import { AdAComponent } from './ad-a/ad-a.component';
import { LoginboxComponent } from './loginbox/loginbox.component';

@NgModule({
  declarations: [
    AppComponent,
    AdAComponent,
    LoginboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LegacyAmplifyUiModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatTabsModule,
    MatGridListModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatStepperModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatToolbarModule,
    AmplifyAuthenticatorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DirectAccessGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
