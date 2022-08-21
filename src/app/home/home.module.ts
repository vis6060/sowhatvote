import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
//import {MatButtonModule} from "@angular/material/button";
import { HomeComponent } from './home/home.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatGridListModule} from "@angular/material/grid-list";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatStepperModule} from "@angular/material/stepper";
import {MatInputModule} from "@angular/material/input";
import {MatExpansionModule} from '@angular/material/expansion';
import { OccupationSearchComponent } from './occupation-search/occupation-search.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
@NgModule({
  declarations: [
    HomeComponent,
    OccupationSearchComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatExpansionModule,
    MatChipsModule,
    MatDividerModule
  ]
})
export class HomeModule { }
