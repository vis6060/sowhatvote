import { Component,Injectable, OnInit,Output, EventEmitter,Directive, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from '@angular/forms';
import {MatStepperIntl} from '@angular/material/stepper';
import Amplify, {Auth, Analytics, Storage, AmazonPersonalizeProvider} from "aws-amplify";
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { API } from 'aws-amplify';
import { DatePipe } from '@angular/common';
import Predictions from "@aws-amplify/predictions";

import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().includes(filterValue));
};

@Component({
  selector: 'app-occupation-search',
  templateUrl: './occupation-search.component.html',
  styleUrls: ['./occupation-search.component.css']
})
export class OccupationSearchComponent implements OnInit {

  stateForm: FormGroup = this._formBuilder.group({stateGroup: '',});
  stateGroupOptions: Observable<StateGroup[]>;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(value)),
    );
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }
    return this.stateGroups;
  }

  //sends the occupation selection to the parent component
  @Output() newItemEvent = new EventEmitter<string>();
  occup= {} as StateGroup; //need to declare as a object that matches the export interface.  Also, need to use (ngModelChange) instead of (change) in the html.
  async occupstore(event:any) {
    this.newItemEvent.emit(JSON.stringify(this.occup.names));
  }


  stateGroups: StateGroup[] = [
    {
      letter: 'Management occupations',
      names: ["Business Owner", "Top executives",
        "Advertising",
        "Marketing",
        "Sales managers",
        "Promotions, Public relations and fundraising managers",
        "Administrative services and facilities managers",
        "Computer and information systems managers",
        "Financial managers",
        "Industrial production managers",
        "Purchasing managers",
        "Transportation, storage, and distribution managers",
        "Human resources managers",
        "Training and development managers",
        "Farmers, ranchers, and other agricultural managers",
      ],
    },
    {
      letter: 'Business and financial operations occupations',
      names: [
        "Agents and business managers of artists, performers, and athletes",
        "Buyers and purchasing agents",
        "Claims adjusters, appraisers, insurance, examiners, and investigators",
        "Farm labor contractors",
        "Logisticians",
        "Meeting, convention, fundraisers, and event planners",
        "Fundraisers",
        "Accountants and auditors",
        "Property appraisers and assessors",
        "Budget and credit analysts",
        "Personal financial advisors",
        "Insurance underwriters",
        "Financial examiners",
        "Credit counselors and loan officers",
        "Tax examiners, collectors and preparers, and revenue agents",
      ],
    },
    {
      letter: 'Computer and mathematical occupations',
      names: [
        "Computer and information research scientists or analyst",
        "Database and network administrators and architects",
        "Software and web developers, programmers, and testers",
        "Actuaries, Mathematicians, Data Scientists, Statisticians"
      ],
    },
    {
      letter: 'Architecture and engineering occupations',
      names: [
        "Architects, surveyors, and cartographers",
        "Aerospace Engineers",
        "Agricultural engineers",
        "Bioengineers and biomedical engineers",
        "Chemical engineers",
        "Civil engineers",
        "Computer hardware engineers",
        "Electrical and electronics engineers",
        "Environmental engineers",
        "Industrial engineers, including health and safety",
        "Marine engineers and naval architects",
        "Materials engineers",
        "Mechanical engineers",
        "Mining and geological engineers, including mining safety engineers",
        "Nuclear engineers",
        "Petroleum engineers",
        "Engineers, all other",
        "Drafters",
        "Engineering technologist or technicians, and mapping technicians"
      ],
    },
    {
      letter: 'Life, physical, and social science occupations',
      names: [
        "Agricultural and food scientists",
        "Biological scientists",
        "Conservation scientists and foresters",
        "Medical scientists",
        "Astronomers and physicists",
        "Chemists and materials scientists",
        "Environmental scientists and geoscientists",
        "Economists",
        "Clinical, counseling, and school psychologists",
        "Industrial-organizational psychologists",
        "Sociologists",
        "Urban and regional planners",
        "Social scientists and related workers",
        "Life, physical, and social science technicians",
        "Occupational health and safety specialists and technicians",
        "Anthropologists, Geographers, Historians, Political scientists",
        "Agricultural and food science technicians",
        "Biological technicians",
        "Chemical technicians",
        "Environmental science and geoscience technicians",
        "Nuclear technicians"
      ],
    },
    {
      letter: 'Community and social service occupations',
      names: [
        "Educational, guidance, and career counselors and advisors",
        "Marriage and family therapists",
        "Rehabilitation counselors",
        "Substance abuse, behavioral disorder, and mental health counselors",
        "Child, family, and school social workers",
        "Healthcare social workers",
        "Mental health and substance abuse social workers",
        "Health education specialists",
        "Probation officers and correctional treatment specialists",
        "Social and human service assistants",
        "Community health workers",
        "Community and social service specialists, all other",
        "Religious workers"
      ],
    },
    {
      letter: 'Legal occupations',
      names: [
        "Lawyers, judges, and related workers",
        "Legal support workers"
      ],
    },
    {
      letter: 'Educational instruction and library occupations',
      names: [
        "Postsecondary teachers",
        "Preschool and kindergarten teachers",
        "Elementary and middle school teachers",
        "Secondary school teachers",
        "Special education teachers",
        "Adult basic education, adult secondary education, and English as a Second Language instructors",
        "Librarians, curators, and archivists",
        "Farm and home management educators"
      ],
    },
    {
      letter: 'Arts, design, entertainment, sports, and media occupations',
      names: [
        "Fine artists, including painters, sculptors, and illustrators",
        "Commercial and industrial designers",
        "Fashion designers",
        "Floral designers",
        "Graphic designers",
        "Entertainers and performers, sports and related workers",
        "Media and communication workers",
        "Writers and editors",
        "Media and communication equipment workers",
      ],
    },
    {
      letter: 'Healthcare practitioners and technical occupations',
      names: [
        "Healthcare diagnosing or treating practitioners",
        "Therapists",
        "Veterinarians",
        "Registered nurses",
        "Nurse anesthetists",
        "Nurse practitioners",
        "Nurse midwives",
        "Audiologists",
        "Anesthesiologists",
        "Psychiatrists",
        "Acupuncturists and healthcare diagnosing or treating practitioners, all other",
        "Clinical laboratory technologists and technicians",
        "Cardiovascular technologists and technicians",
        "Diagnostic medical sonographers",
        "Radiologic, nuclear medicine technologists and technicians",
        "Emergency medical technicians and paramedics",
        "Health practitioner support technologists and technicians",
        "Licensed practical and licensed vocational nurses",
        "Opticians, dispensing",
        "Orthotists and prosthetists",
        "Hearing aid specialists",
        "Medical dosimetrists, medical records specialists, and health technologists and technicians, all other",
        "Health information technologists, medical registrars, surgical assistants, and healthcare practitioners and technical workers, all other",
        "Athletic trainers",
        "Genetic counselors",
      ],
    },
    {
      letter: 'Healthcare support occupations',
      names: [
        "Home health and personal care aides",
        "Nursing assistants, orderlies, and psychiatric aides",
        "Occupational therapy assistants and aides",
        "Physical therapist assistants and aides",
        "Massage therapists",
        "Dental, Medical assistants",
        "Phlebotomists",
        "Veterinary assistants and laboratory animal caretakers",
        "Medical equipment preparers",
      ],
    },
    {
      letter: 'Protective service occupations',
      names: [
        "Supervisors of protective service workers",
        "Firefighting and prevention workers",
        "Law enforcement workers",
        "Other protective service workers"
      ],
    },
    {
      letter: 'Food preparation and serving related occupations',
      names: [
        "Supervisors of food preparation and serving workers",
        "Cooks and food preparation workers",
        "Food and beverage serving workers",
      ],
    },
    {
      letter: 'Building and grounds cleaning and maintenance occupations',
      names: [
        "Building and grounds cleaning and maintenance occupations",
      ],
    },
    {
      letter: 'Personal care and service occupations',
      names: [
        "Supervisors of personal care and service workers",
        "Animal care and service workers",
        "Entertainment attendants and related workers",
        "Personal appearance workers (Barbers, hairdressers, hairstylists and cosmetologists, etc.)",
        "Childcare workers"
      ],
    },
    {
      letter: 'Sales and related occupations',
      names: [
        "Supervisors of sales workers",
        "Retail sales workers",
        "Sales representatives, services (insurance, advertising, securities/commodities, travel agents)",
        "Sales representatives, wholesale and manufacturing",
        "Real estate brokers and sales agents",
        "Other sales and related workers",
      ],
    },
    {
      letter: 'Office and administrative support occupations',
      names: [
        "Supervisors of office and administrative support workers",
        "Financial clerks",
        "Information and record clerks",
        "Material recording, scheduling, dispatching, and distributing workers",
        "Secretaries and administrative assistants",
        "Other office and administrative support workers"
      ],
    },
    {
      letter: 'Farming, fishing, and forestry occupations',
      names: [
        "Supervisors of farming, fishing, and forestry workers",
        "Agricultural workers",
        "Fishing and hunting workers",
        "Forest, conservation, and logging workers",
        "Logging workers",
      ],
    },
    {
      letter: 'Construction and extraction occupations',
      names: [
        "Supervisors of construction and extraction workers",
        "Construction trades workers",
        "Brickmasons, blockmasons, and stonemasons",
        "Carpet, floor, and tile installers and finishers",
        "Cement masons, concrete finishers, and terrazzo workers",
        "Construction equipment operators",
        "Drywall installers, ceiling tile installers, and tapers",
        "Pipelayers, plumbers, pipefitters, and steamfitters",
        "Extraction workers (mining, oil and gas, etc.)",
        "Helpers, construction trades",
        "Other construction and related workers"
      ],
    },
    {
      letter: 'Installation, maintenance, and repair occupations',
      names: [
        "Supervisors of installation, maintenance, and repair workers",
        "Electrical and electronic equipment mechanics, installers, and repairers",
        "Radio and telecommunications equipment installers and repairers",
        "Vehicle and mobile equipment mechanics, installers, and repairers",
        "Other installation, maintenance, and repair occupations",
      ],
    },
    {
      letter: 'Production occupations',
      names: [
        "Supervisors of production workers",
        "Assemblers and fabricators",
        "Food processing workers",
        "Molders and molding machine setters, operators, and tenders, metal and plastic",
        "Other production occupations",
        "Plant and system operators",
      ],
    },
    {
      letter: 'Transportation and material moving occupations',
      names: [
        "Supervisors of transportation and material moving workers",
        "Air transportation workers",
        "Motor vehicle operators (bus drivers, truck drivers, passenger vehicle drivers",
        "Rail transportation workers",
        "Water transportation workers",
        "Other transportation workers",
        "Material moving workers (crane, conveyor operators)"
      ],
    },
  ]

}
