import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatChipsModule} from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

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
import {AmplifyAuthenticatorModule} from "@aws-amplify/ui-angular";


Amplify.configure(awsconfig);
import aws_exports from "src/aws-exports";
Amplify.configure(aws_exports);
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { EntrypageComponent } from './entrypage/entrypage.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CookiebannerComponent } from './cookiebanner/cookiebanner.component';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
  //  LoginboxComponent,
   // Big5partaComponent,
  //  Big5partaeditComponent,
//    Big5partdComponent,
 //   Big5parteComponent,
//    Big5partfComponent,
  //  OccupationComponent,
 //   Industrylevel2newComponent,
    EntrypageComponent,
 //   TermsdialogboxComponent,
    CookiebannerComponent,
//    GiftcardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatSnackBarModule,
    AmplifyAuthenticatorModule,
    MatTabsModule,
    FlexLayoutModule,
    MatMenuModule,

    MatToolbarModule,

    MatChipsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatStepperModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,

    MatDialogModule,
  ],
  
// providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  providers: [],
  bootstrap: [AppComponent]
})
//@ts-ignore
export class AppModule { }
//@ts-ignore
