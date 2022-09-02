import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { LegacyAmplifyUiModule } from '@aws-amplify/ui-angular/legacy';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AmplifyAuthenticatorModule} from "@aws-amplify/ui-angular";


Amplify.configure(awsconfig);
import aws_exports from "src/aws-exports";
Amplify.configure(aws_exports);
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginboxComponent } from './loginbox/loginbox.component';
import { Big5partaComponent } from './big5parta/big5parta.component';
import { Big5partaeditComponent } from './big5partaedit/big5partaedit.component';
import { Big5partdComponent } from './big5partd/big5partd.component';
import { Big5parteComponent } from './big5parte/big5parte.component';
import { Big5partfComponent } from './big5partf/big5partf.component';
import { OccupationComponent } from './occupation/occupation.component';
import { Industrylevel2newComponent } from './industrylevel2new/industrylevel2new.component';

import { EntrypageComponent } from './entrypage/entrypage.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TermsdialogboxComponent } from './termsdialogbox/termsdialogbox.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CookiebannerComponent } from './cookiebanner/cookiebanner.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginboxComponent,
    Big5partaComponent,
    Big5partaeditComponent,
    Big5partdComponent,
    Big5parteComponent,
    Big5partfComponent,
    OccupationComponent,
    Industrylevel2newComponent,
    EntrypageComponent,
    TermsdialogboxComponent,
    CookiebannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 //   LegacyAmplifyUiModule,
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
    MatDialogModule,
    MatDividerModule,
    MatSnackBarModule
  ],
 // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  providers: [],
  bootstrap: [AppComponent]
})
//@ts-ignore
export class AppModule { }
//@ts-ignore
