import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatStepperModule} from "@angular/material/stepper";
import {MatIconModule} from "@angular/material/icon";
import {MatChipsModule} from "@angular/material/chips";
import {MatTabsModule} from "@angular/material/tabs";
import {MatGridListModule} from "@angular/material/grid-list";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatToolbarModule} from "@angular/material/toolbar";
import {AmplifyAuthenticatorModule} from "@aws-amplify/ui-angular";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDividerModule} from "@angular/material/divider";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {Big5parteComponent} from "./big5parte/big5parte.component";

import Amplify from "aws-amplify";
import awsconfig from "src/aws-exports";
Amplify.configure(awsconfig);
import aws_exports from "src/aws-exports";
Amplify.configure(aws_exports);

import  {AmazonAIPredictionsProvider} from '@aws-amplify/predictions';
Amplify.addPluggable(new AmazonAIPredictionsProvider());

@NgModule({
  declarations: [
    Big5parteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Big5parteComponent }]),
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatStepperModule,
    ReactiveFormsModule,
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
    MatDialogModule,
    MatDividerModule,
    MatSnackBarModule,
  ]
})
export class Step4Module { }
