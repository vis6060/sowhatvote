import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {Big5partaComponent} from "./big5parta/big5parta.component";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatStepperModule} from "@angular/material/stepper";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
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



@NgModule({
  declarations: [
    Big5partaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: Big5partaComponent }]),
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
export class Step0Module { }
