/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateTodo: OnCreateTodoSubscription;
  onUpdateTodo: OnUpdateTodoSubscription;
  onDeleteTodo: OnDeleteTodoSubscription;
};

export type CreateDatinguserdbStagingInput = {
  age: string;
  countyuser: string;
  education: string;
  email: string;
  emailshareagree: string;
  facebookbusername: string;
  industrylevel2: string;
  loyalty: string;
  menteeagree: string;
  mentoragree: string;
  occup: string;
  profilename: string;
  s3file: string;
  stateuser: string;
  userdescription: string;
  userid: string;
  veteran: string;
  unsubscribematchingme: string;
  newWidth: string;
  newHeight: string;
  gender: string;
};

export type DatinguserdbStaging = {
  __typename: "DatinguserdbStaging";
  age: string;
  countyuser: string;
  education: string;
  email: string;
  emailshareagree: string;
  facebookbusername: string;
  industrylevel2: string;
  loyalty: string;
  menteeagree: string;
  mentoragree: string;
  occup: string;
  profilename: string;
  s3file: string;
  stateuser: string;
  userdescription: string;
  userid: string;
  veteran: string;
  unsubscribematchingme: string;
  newWidth: string;
  newHeight: string;
  gender: string;
};

export type DeleteDatinguserdbStagingInput = {
  userid: string;
};

export type UpdateDatinguserdbStagingInput = {
  age?: string | null;
  countyuser?: string | null;
  education?: string | null;
  email?: string | null;
  emailshareagree?: string | null;
  facebookbusername?: string | null;
  industrylevel2?: string | null;
  loyalty?: string | null;
  menteeagree?: string | null;
  mentoragree?: string | null;
  occup?: string | null;
  profilename?: string | null;
  s3file?: string | null;
  stateuser?: string | null;
  userdescription?: string | null;
  userid: string;
  veteran?: string | null;
  unsubscribematchingme: string;
  newWidth: string;
  newHeight: string;
  gender: string;
};

export type DatingitemtrackingStaging = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type TableDatinginteractionStagingFilterInput = {
  eventtype?: TableStringFilterInput | null;
  interestcategory?: TableStringFilterInput | null;
  itemid?: TableStringFilterInput | null;
  timestamp?: TableStringFilterInput | null;
  userid?: TableStringFilterInput | null;
};

export type TableStringFilterInput = {
  beginsWith?: string | null;
  between?: Array<string | null> | null;
  contains?: string | null;
  eq?: string | null;
  ge?: string | null;
  gt?: string | null;
  le?: string | null;
  lt?: string | null;
  ne?: string | null;
  notContains?: string | null;
};

export type DatinginteractionStagingtab3 = {
  __typename: "DatinginteractionStagingtab3";
  eventtype?: string | null;
  interestcategory?: Array<string | null> | null;
  itemid?: string | null;
  timestamp?: string | null;
  userid?: string | null;
};

export type HouseCandsFilterInput = {
  Incumbent?: TableStringFilterInput | null;
  CandName?: TableStringFilterInput | null;
  State?: TableStringFilterInput | null;
  Office?: TableStringFilterInput | null;
};

export type HouseCandsConnection = {
  __typename: "HouseCandsConnection";
  items?: Array<HouseCands | null> | null;
  justcands?: Array<string | null> | null;
};

export type HouseCands = {
  __typename: "HouseCands";
  CandName: string;
  District?: string | null;
  Party?: string | null;
  State?: string | null;
  Website?: string | null;
  s3file?: string | null;
  PictureAttribution?: string | null;
  Coms?: string | null;
  Motto?: string | null;
  OverallYea?: string | null;
  OverallNay?: string | null;
  CAgricultureYea?: string | null;
  CAgricultureNay?: string | null;
  CFinancialYea?: string | null;
  CFinancialNay?: string | null;
  CEducationYea?: string | null;
  CEducationNay?: string | null;
  CAppropriationsYea?: string | null;
  CAppropriationsNay?: string | null;
  CAdminstrationYea?: string | null;
  CAdminstrationNay?: string | null;
  CForeignYea?: string | null;
  CForeignNay?: string | null;
  CTransportationYea?: string | null;
  CTransportationNay?: string | null;
  CVeteransYea?: string | null;
  CVeteransNay?: string | null;
  CClimateYea?: string | null;
  CClimateNay?: string | null;
  CEnergyYea?: string | null;
  CEnergyNay?: string | null;
  CEthicsYea?: string | null;
  CEthicsNay?: string | null;
  CWaysYea?: string | null;
  CWaysNay?: string | null;
  CScienceYea?: string | null;
  CScienceNay?: string | null;
  CArmedYea?: string | null;
  CArmedNay?: string | null;
  CJudiciaryYea?: string | null;
  CJudiciaryNay?: string | null;
  CHomelandYea?: string | null;
  CHomelandNay?: string | null;
  CBudgetYea?: string | null;
  CBudgetNay?: string | null;
  CNaturalYea?: string | null;
  CNaturalNay?: string | null;
  COversightYea?: string | null;
  COversightNay?: string | null;
  CSmallYea?: string | null;
  CSmallNay?: string | null;
  CTaxationYea?: string | null;
  CTaxationNay?: string | null;
  CIntelligenceYea?: string | null;
  CIntelligenceNay?: string | null;
  CAgricultureFuture?: string | null;
  CFinancialFuture?: string | null;
  CEducationFuture?: string | null;
  CAppropriationsFuture?: string | null;
  CAdminstrationFuture?: string | null;
  CForeignFuture?: string | null;
  CTransportationFuture?: string | null;
  CVeteransFuture?: string | null;
  CClimateFuture?: string | null;
  CEnergyFuture?: string | null;
  CEthicsFuture?: string | null;
  CWaysFuture?: string | null;
  CScienceFuture?: string | null;
  CArmedFuture?: string | null;
  CJudiciaryFuture?: string | null;
  CHomelandFuture?: string | null;
  CBudgetFuture?: string | null;
  CNaturalFuture?: string | null;
  COversightFuture?: string | null;
  CSmallFuture?: string | null;
  CTaxationFuture?: string | null;
  CIntelligenceFuture?: string | null;
  IBorderYea?: string | null;
  IBorderNay?: string | null;
  IImmigrationYea?: string | null;
  IImmigrationNay?: string | null;
  IAbortionYes?: string | null;
  IAbortionNay?: string | null;
  ITransgenderYea?: string | null;
  ITransgenderNay?: string | null;
  ISafetyYea?: string | null;
  ISafetyNay?: string | null;
  IEducationYea?: string | null;
  IEducationNay?: string | null;
  IVeteransYea?: string | null;
  IVeteransNay?: string | null;
  IClimateYea?: string | null;
  IClimateNay?: string | null;
  IMentalYea?: string | null;
  IMentalNay?: string | null;
  IGunsYea?: string | null;
  IGunsNay?: string | null;
  ICostYea?: string | null;
  ICostNay?: string | null;
  IFarmersYea?: string | null;
  IFarmersNay?: string | null;
  IEconomyYea?: string | null;
  IEconomyNay?: string | null;
  IHealthcareYea?: string | null;
  IHealthcareNay?: string | null;
  IInfrastructureYea?: string | null;
  IInfrastructureNay?: string | null;
  IEnergyYea?: string | null;
  IEnergyNay?: string | null;
  INaturalYea?: string | null;
  INaturalNay?: string | null;
  ICannabisYea?: string | null;
  ICannabisNay?: string | null;
  ITaxesYea?: string | null;
  ITaxesNay?: string | null;
  ISeniorsYea?: string | null;
  ISeniorsNay?: string | null;
  IManufacturingYea?: string | null;
  IManufacturingNay?: string | null;
  IHousingYea?: string | null;
  IHousingNay?: string | null;
  IDefenceYea?: string | null;
  IDefenceNay?: string | null;
  IFinanceYea?: string | null;
  IFinanceNay?: string | null;
};

export type ComCateg = {
  __typename: "ComCateg";
  comcateg?: string | null;
};

export type IssCateg = {
  __typename: "IssCateg";
  VotedIdsFlagArray?: Array<string | null> | null;
  isscateg?: string | null;
  comcateg?: string | null;
  prefercateg?: string | null;
  searchcateg?: string | null;
};

export type ComPreferOut = {
  __typename: "ComPreferOut";
  numberarray?: Array<number | null> | null;
  candarray?: Array<string | null> | null;
};

export type CreateTodoInput = {
  id?: string | null;
  name: string;
  description?: string | null;
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelTodoConditionInput | null> | null;
  or?: Array<ModelTodoConditionInput | null> | null;
  not?: ModelTodoConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Todo = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTodoInput = {
  id: string;
  name?: string | null;
  description?: string | null;
};

export type DeleteTodoInput = {
  id: string;
};

export type TableDatinguserdbStagingFilterInput = {
  age?: TableStringFilterInput | null;
  countyuser?: TableStringFilterInput | null;
  education?: TableStringFilterInput | null;
  email?: TableStringFilterInput | null;
  emailshareagree?: TableStringFilterInput | null;
  facebookbusername?: TableStringFilterInput | null;
  industrylevel2?: TableStringFilterInput | null;
  loyalty?: TableStringFilterInput | null;
  menteeagree?: TableStringFilterInput | null;
  mentoragree?: TableStringFilterInput | null;
  occup?: TableStringFilterInput | null;
  profilename?: TableStringFilterInput | null;
  s3file?: TableStringFilterInput | null;
  stateuser?: TableStringFilterInput | null;
  userdescription?: TableStringFilterInput | null;
  userid?: TableStringFilterInput | null;
  veteran?: TableStringFilterInput | null;
  unsubscribematchingme?: TableStringFilterInput | null;
  newWidth?: TableStringFilterInput | null;
  newHeight?: TableStringFilterInput | null;
  lastmeetupviewdate?: TableIntFilterInput | null;
  timestamp?: TableStringFilterInput | null;
  gender?: TableStringFilterInput | null;
  profilecompPartF?: TableStringFilterInput | null;
};

export type TableIntFilterInput = {
  ge?: number | null;
  gt?: number | null;
};

export type PaginatedDatinguserdbStagings = {
  __typename: "PaginatedDatinguserdbStagings";
  DatinguserdbStagings: Array<DatinguserdbStaging>;
  InitialSearchArraySize: string;
  FilteredSearchArraySize: string;
  nextToken?: string | null;
};

export type LoyaltyDatinguserdbStagings = {
  __typename: "LoyaltyDatinguserdbStagings";
  DatinguserdbStagings?: Array<DatinguserdbStaging> | null;
  arraytabs?: Array<string | null> | null;
  arrayindexes?: Array<number | null> | null;
  nextToken?: string | null;
};

export type Loyaltytab3B6CIndex = {
  __typename: "Loyaltytab3B6CIndex";
  tab13B6Cname?: string | null;
  indextab13B6C?: number | null;
};

export type DatinguserdbStagingConnection = {
  __typename: "DatinguserdbStagingConnection";
  items?: Array<DatinguserdbStaging | null> | null;
  nextToken?: string | null;
};

export type DatingitemtrackingStagingConnection = {
  __typename: "DatingitemtrackingStagingConnection";
  items?: Array<DatingitemtrackingStaging | null> | null;
  nextToken?: string | null;
};

export type TableDatingitemtrackingStagingFilterInput = {
  userid?: TableStringFilterInput | null;
};

export type SenateCands = {
  __typename: "SenateCands";
  CandName?: string | null;
  Party?: string | null;
  State?: string | null;
  Website?: string | null;
  ImageKey?: string | null;
  PictureAttribution?: string | null;
  Coms?: Array<string | null> | null;
  Issues?: Array<string | null> | null;
  Motto?: string | null;
  OverallYea?: string | null;
  OverallNay?: string | null;
  CAgricultureYea?: string | null;
  CAgricultureNay?: string | null;
  AgricultureFuture?: string | null;
  CAppropriationsYea?: string | null;
  CAppropriationsNay?: string | null;
  AppropriationsFuture?: string | null;
  CArmedYea?: string | null;
  CArmedNay?: string | null;
  ArmedFuture?: string | null;
  CBankingYea?: string | null;
  CBankingNay?: string | null;
  BankingFuture?: string | null;
  CBudgetYea?: string | null;
  CBudgetNay?: string | null;
  BudgetFuture?: string | null;
  CCommerceYea?: string | null;
  CCommerceNay?: string | null;
  CommerceFuture?: string | null;
  CEnergyYea?: string | null;
  CEnergyNay?: string | null;
  EnergyFuture?: string | null;
  CEnvironmentYea?: string | null;
  CEnvironmentNay?: string | null;
  EnvironmentFuture?: string | null;
  CFinanceYea?: string | null;
  CFinanceNay?: string | null;
  FinanceFuture?: string | null;
  CForeignYea?: string | null;
  CForeignNay?: string | null;
  ForeignFuture?: string | null;
  CHealthYea?: string | null;
  CHealthNay?: string | null;
  HealthFuture?: string | null;
  CHomelandYea?: string | null;
  CHomelandNay?: string | null;
  HomelandFuture?: string | null;
  CIndianYea?: string | null;
  CIndianNay?: string | null;
  IndianFuture?: string | null;
  CPrintingYea?: string | null;
  CPrintingNay?: string | null;
  PrintingFuture?: string | null;
  CTaxationYea?: string | null;
  CTaxationNay?: string | null;
  TaxationFuture?: string | null;
  CLibraryYea?: string | null;
  CLibraryNay?: string | null;
  LibraryFuture?: string | null;
  CEconomicYea?: string | null;
  CEconomicNay?: string | null;
  EconomicFuture?: string | null;
  CJudiciaryYea?: string | null;
  CJudiciaryNay?: string | null;
  JudiciaryFuture?: string | null;
  CRulesYea?: string | null;
  CRulesNay?: string | null;
  RulesFuture?: string | null;
  CEthicsYea?: string | null;
  CEthicsNay?: string | null;
  EthicsFuture?: string | null;
  CIntelligenceYea?: string | null;
  CIntelligenceNay?: string | null;
  IntelligenceFuture?: string | null;
  CBusinessYea?: string | null;
  CBusinessNay?: string | null;
  BusinessFuture?: string | null;
  CAgingYea?: string | null;
  CAgingNay?: string | null;
  AgingFuture?: string | null;
  CVeteranYea?: string | null;
  CVeteranNay?: string | null;
  VeteranFuture?: string | null;
  IBorderYea?: string | null;
  IBorderNay?: string | null;
  IImmigrationYea?: string | null;
  IImmigrationNay?: string | null;
  IAbortionYes?: string | null;
  IAbortionNay?: string | null;
  ITransgenderYea?: string | null;
  ITransgenderNay?: string | null;
  ISafetyYea?: string | null;
  ISafetyNay?: string | null;
  IEducationYea?: string | null;
  IEducationNay?: string | null;
  IVeteransYea?: string | null;
  IVeteransNay?: string | null;
  IClimateYea?: string | null;
  IClimateNay?: string | null;
  IMentalYea?: string | null;
  IMentalNay?: string | null;
  IGunsYea?: string | null;
  IGunsNay?: string | null;
  ICostYea?: string | null;
  ICostNay?: string | null;
  IFarmersYea?: string | null;
  IFarmersNay?: string | null;
  IEconomyYea?: string | null;
  IEconomyNay?: string | null;
  IHealthcareYea?: string | null;
  IHealthcareNay?: string | null;
  IInfrastructureYea?: string | null;
  IInfrastructureNay?: string | null;
  IEnergyYea?: string | null;
  IEnergyNay?: string | null;
  INaturalYea?: string | null;
  INaturalNay?: string | null;
  ICannabisYea?: string | null;
  ICannabisNay?: string | null;
  ITaxesYea?: string | null;
  ITaxesNay?: string | null;
  ISeniorsYea?: string | null;
  ISeniorsNay?: string | null;
  IManufacturingYea?: string | null;
  IManufacturingNay?: string | null;
  IHousingYea?: string | null;
  IHousingNay?: string | null;
  IDefenceYea?: string | null;
  IDefenceNay?: string | null;
  IFinanceYea?: string | null;
  IFinanceNay?: string | null;
};

export type StateCands = {
  __typename: "StateCands";
  CandName?: string | null;
  Office?: string | null;
  Party?: string | null;
  State?: string | null;
  District?: string | null;
  Website?: string | null;
  s3file?: string | null;
  PictureAttribution?: Array<string | null> | null;
  Coms?: string | null;
  Motto?: string | null;
  OverallYea?: string | null;
  OverallNay?: string | null;
  IBorderYea?: string | null;
  IBorderNay?: string | null;
  IImmigrationYea?: string | null;
  IImmigrationNay?: string | null;
  IAbortionYes?: string | null;
  IAbortionNay?: string | null;
  ITransgenderYea?: string | null;
  ITransgenderNay?: string | null;
  IVotingYea?: string | null;
  IVotingNay?: string | null;
  IElectionYea?: string | null;
  IElectionNay?: string | null;
  ISafetyYea?: string | null;
  ISafetyNay?: string | null;
  IEducationYea?: string | null;
  IEducationNay?: string | null;
  IVeteransYea?: string | null;
  IVeteransNay?: string | null;
  IClimateYea?: string | null;
  IClimateNay?: string | null;
  IHomelessnessYea?: string | null;
  IHomelessnessNay?: string | null;
  IMentalYea?: string | null;
  IMentalNay?: string | null;
  IGunsYea?: string | null;
  IGunsNay?: string | null;
  ICostYea?: string | null;
  ICostNay?: string | null;
  IFarmersYea?: string | null;
  IFarmersNay?: string | null;
  IPermanentYea?: string | null;
  IPermanentNay?: string | null;
  IEconomyYea?: string | null;
  IEconomyNay?: string | null;
  IHealthcareYea?: string | null;
  IHealthcareNay?: string | null;
  IInfrastructureYea?: string | null;
  IInfrastructureNay?: string | null;
  IEnergyYea?: string | null;
  IEnergyNay?: string | null;
  ICannabisYea?: string | null;
  ICannabisNay?: string | null;
  ITaxesYea?: string | null;
  ITaxesNay?: string | null;
  ILandsYea?: string | null;
  ILandsNay?: string | null;
  ISeniorsYea?: string | null;
  ISeniorsNay?: string | null;
  IManufacturingYea?: string | null;
  IManufacturingNay?: string | null;
  IHousingYea?: string | null;
  IHousingNay?: string | null;
};

export type DatinginteractionStaging = {
  __typename: "DatinginteractionStaging";
  eventtype: string;
  interestcategory: string;
  itemid: string;
  timestamp: string;
  userid: string;
};

export type DatinginteractionStagingConnection = {
  __typename: "DatinginteractionStagingConnection";
  items?: Array<DatinginteractionStaging | null> | null;
  nextToken?: string | null;
};

export type VotedIdsFlags = {
  __typename: "VotedIdsFlags";
  VotedIdsFlagArray?: Array<string | null> | null;
};

export type VotedIdsFlagsIssue = {
  __typename: "VotedIdsFlagsIssue";
  VotedIdsFlagArray?: Array<number | null> | null;
  VotedIdsFlagArrayCand?: Array<string | null> | null;
  futurecomcandsvotedon?: Array<string | null> | null;
  FutureComPreferArray?: Array<string | null> | null;
  FutureComCandViewed?: number | null;
};

export type TableSearchFilterCands = {
  LastName?: TableStringFilterInput | null;
  StateCand?: TableStringFilterInput | null;
};

export type CandNameOutArray = {
  __typename: "CandNameOutArray";
  items?: Array<CandNameOut | null> | null;
};

export type CandNameOut = {
  __typename: "CandNameOut";
  CandName?: string | null;
  District?: string | null;
  Party?: string | null;
  StateCand?: string | null;
  Website?: string | null;
  s3file?: string | null;
  PictureAttribution?: string | null;
  Coms?: string | null;
  Motto?: string | null;
  OverallYea?: string | null;
  OverallNay?: string | null;
  FirstComPrefer?: Array<number | null> | null;
  SecondComPrefer?: Array<number | null> | null;
  ThirdComPrefer?: Array<number | null> | null;
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelTodoFilterInput | null> | null;
  or?: Array<ModelTodoFilterInput | null> | null;
  not?: ModelTodoFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection";
  items: Array<Todo | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionTodoFilterInput | null> | null;
  or?: Array<ModelSubscriptionTodoFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type CreateDatinguserdbStagingMutation = {
  __typename: "DatinguserdbStaging";
  age: string;
  countyuser: string;
  education: string;
  email: string;
  emailshareagree: string;
  facebookbusername: string;
  industrylevel2: string;
  loyalty: string;
  menteeagree: string;
  mentoragree: string;
  occup: string;
  profilename: string;
  s3file: string;
  stateuser: string;
  userdescription: string;
  userid: string;
  veteran: string;
  unsubscribematchingme: string;
  newWidth: string;
  newHeight: string;
  gender: string;
};

export type DeleteDatinguserdbStagingMutation = {
  __typename: "DatinguserdbStaging";
  age: string;
  countyuser: string;
  education: string;
  email: string;
  emailshareagree: string;
  facebookbusername: string;
  industrylevel2: string;
  loyalty: string;
  menteeagree: string;
  mentoragree: string;
  occup: string;
  profilename: string;
  s3file: string;
  stateuser: string;
  userdescription: string;
  userid: string;
  veteran: string;
  unsubscribematchingme: string;
  newWidth: string;
  newHeight: string;
  gender: string;
};

export type UpdateDatinguserdbStagingMutation = {
  __typename: "DatinguserdbStaging";
  age: string;
  countyuser: string;
  education: string;
  email: string;
  emailshareagree: string;
  facebookbusername: string;
  industrylevel2: string;
  loyalty: string;
  menteeagree: string;
  mentoragree: string;
  occup: string;
  profilename: string;
  s3file: string;
  stateuser: string;
  userdescription: string;
  userid: string;
  veteran: string;
  unsubscribematchingme: string;
  newWidth: string;
  newHeight: string;
  gender: string;
};

export type UpdateDatinguserdbStaging1Mutation = {
  __typename: "DatinguserdbStaging";
  age: string;
  countyuser: string;
  education: string;
  email: string;
  emailshareagree: string;
  facebookbusername: string;
  industrylevel2: string;
  loyalty: string;
  menteeagree: string;
  mentoragree: string;
  occup: string;
  profilename: string;
  s3file: string;
  stateuser: string;
  userdescription: string;
  userid: string;
  veteran: string;
  unsubscribematchingme: string;
  newWidth: string;
  newHeight: string;
  gender: string;
};

export type UpdateConnectButtonMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type UpdateAcceptRequestatb3ButtonMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type UpdateDeclineRequestatb3ButtonMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type NextButtonDatingitemtrackingStagingtab1AMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type BackinitializeButtonDatingitemtrackingStagingtab1AMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type NextButtonDatingitemtrackingStagingtab1BMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type BackinitializeButtonDatingitemtrackingStagingtab1BMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type NextButtonDatingitemtrackingStagingtab1CMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type BackinitializeButtonDatingitemtrackingStagingtab1CMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type NextButtonDatingitemtrackingStagingtab2Mutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type BackinitializeButtonDatingitemtrackingStagingtab2Mutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type NextButtonDatingitemtrackingStagingtab3Mutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type BackinitializeButtonDatingitemtrackingStagingtab3Mutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type NextButtonDatingitemtrackingStagingtab3BMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type BackinitializeButtonDatingitemtrackingStagingtab3BMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type NextButtonDatingitemtrackingStagingtab6Mutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type BackinitializeButtonDatingitemtrackingStagingtab6Mutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type NextButtonDatingitemtrackingStagingtab6BMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type BackinitializeButtonDatingitemtrackingStagingtab6BMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type NextButtonDatingitemtrackingStagingtab6CMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type BackinitializeButtonDatingitemtrackingStagingtab6CMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type NextButtonDatingitemtrackingStagingtab5Mutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type BackinitializeButtonDatingitemtrackingStagingtab5Mutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type UpdateDatingitemtrackingStagingMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type UpdateDatingitemtrackingStagingSmallerArraysMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type CreateDatingitemtrackingOneBigArrayMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type RemoveDatingitemtrackingStagingtab1BMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type RemoveDatingitemtrackingStagingtab1AMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type RemoveDatingitemtrackingStagingtab1CMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type ListDatinguserdbStagingsQueryMutation = {
  __typename: "DatinginteractionStagingtab3";
  eventtype?: string | null;
  interestcategory?: Array<string | null> | null;
  itemid?: string | null;
  timestamp?: string | null;
  userid?: string | null;
};

export type Updatetab3Expiration30daysMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type Updatetab6Expiration30daysMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type UpdateDislikeButtonMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type UpdateCandsArrayOneTimeMutation = {
  __typename: "HouseCandsConnection";
  items?: Array<{
    __typename: "HouseCands";
    CandName: string;
    District?: string | null;
    Party?: string | null;
    State?: string | null;
    Website?: string | null;
    s3file?: string | null;
    PictureAttribution?: string | null;
    Coms?: string | null;
    Motto?: string | null;
    OverallYea?: string | null;
    OverallNay?: string | null;
    CAgricultureYea?: string | null;
    CAgricultureNay?: string | null;
    CFinancialYea?: string | null;
    CFinancialNay?: string | null;
    CEducationYea?: string | null;
    CEducationNay?: string | null;
    CAppropriationsYea?: string | null;
    CAppropriationsNay?: string | null;
    CAdminstrationYea?: string | null;
    CAdminstrationNay?: string | null;
    CForeignYea?: string | null;
    CForeignNay?: string | null;
    CTransportationYea?: string | null;
    CTransportationNay?: string | null;
    CVeteransYea?: string | null;
    CVeteransNay?: string | null;
    CClimateYea?: string | null;
    CClimateNay?: string | null;
    CEnergyYea?: string | null;
    CEnergyNay?: string | null;
    CEthicsYea?: string | null;
    CEthicsNay?: string | null;
    CWaysYea?: string | null;
    CWaysNay?: string | null;
    CScienceYea?: string | null;
    CScienceNay?: string | null;
    CArmedYea?: string | null;
    CArmedNay?: string | null;
    CJudiciaryYea?: string | null;
    CJudiciaryNay?: string | null;
    CHomelandYea?: string | null;
    CHomelandNay?: string | null;
    CBudgetYea?: string | null;
    CBudgetNay?: string | null;
    CNaturalYea?: string | null;
    CNaturalNay?: string | null;
    COversightYea?: string | null;
    COversightNay?: string | null;
    CSmallYea?: string | null;
    CSmallNay?: string | null;
    CTaxationYea?: string | null;
    CTaxationNay?: string | null;
    CIntelligenceYea?: string | null;
    CIntelligenceNay?: string | null;
    CAgricultureFuture?: string | null;
    CFinancialFuture?: string | null;
    CEducationFuture?: string | null;
    CAppropriationsFuture?: string | null;
    CAdminstrationFuture?: string | null;
    CForeignFuture?: string | null;
    CTransportationFuture?: string | null;
    CVeteransFuture?: string | null;
    CClimateFuture?: string | null;
    CEnergyFuture?: string | null;
    CEthicsFuture?: string | null;
    CWaysFuture?: string | null;
    CScienceFuture?: string | null;
    CArmedFuture?: string | null;
    CJudiciaryFuture?: string | null;
    CHomelandFuture?: string | null;
    CBudgetFuture?: string | null;
    CNaturalFuture?: string | null;
    COversightFuture?: string | null;
    CSmallFuture?: string | null;
    CTaxationFuture?: string | null;
    CIntelligenceFuture?: string | null;
    IBorderYea?: string | null;
    IBorderNay?: string | null;
    IImmigrationYea?: string | null;
    IImmigrationNay?: string | null;
    IAbortionYes?: string | null;
    IAbortionNay?: string | null;
    ITransgenderYea?: string | null;
    ITransgenderNay?: string | null;
    ISafetyYea?: string | null;
    ISafetyNay?: string | null;
    IEducationYea?: string | null;
    IEducationNay?: string | null;
    IVeteransYea?: string | null;
    IVeteransNay?: string | null;
    IClimateYea?: string | null;
    IClimateNay?: string | null;
    IMentalYea?: string | null;
    IMentalNay?: string | null;
    IGunsYea?: string | null;
    IGunsNay?: string | null;
    ICostYea?: string | null;
    ICostNay?: string | null;
    IFarmersYea?: string | null;
    IFarmersNay?: string | null;
    IEconomyYea?: string | null;
    IEconomyNay?: string | null;
    IHealthcareYea?: string | null;
    IHealthcareNay?: string | null;
    IInfrastructureYea?: string | null;
    IInfrastructureNay?: string | null;
    IEnergyYea?: string | null;
    IEnergyNay?: string | null;
    INaturalYea?: string | null;
    INaturalNay?: string | null;
    ICannabisYea?: string | null;
    ICannabisNay?: string | null;
    ITaxesYea?: string | null;
    ITaxesNay?: string | null;
    ISeniorsYea?: string | null;
    ISeniorsNay?: string | null;
    IManufacturingYea?: string | null;
    IManufacturingNay?: string | null;
    IHousingYea?: string | null;
    IHousingNay?: string | null;
    IDefenceYea?: string | null;
    IDefenceNay?: string | null;
    IFinanceYea?: string | null;
    IFinanceNay?: string | null;
  } | null> | null;
  justcands?: Array<string | null> | null;
};

export type InitializetabhouseinstateMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type NextButtontabhouseinstateMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type NextButtontabsenateinstateMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type NextButtontabgoverninstateMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type BackinitializeButtontabhouseinstateMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type BackinitializeButtontabsenateinstateMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type BackinitializeButtontabgoverninstateMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type OverallResultUpdatetabhouseinstateMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type ComResultUpdatetabhouseinstateMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type IssResultUpdatetabhouseinstateMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type OverallResultUpdatetabsenateinstateMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type OverallResultUpdatetabgoverninstateMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type ComResultUpdatetabsenateinstateMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type ComResultUpdatetabgoverninstateMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type IssResultUpdatetabsenateinstateMutation = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type GetCommiteeCategMutation = {
  __typename: "ComCateg";
  comcateg?: string | null;
};

export type GetIssueCategMutation = {
  __typename: "IssCateg";
  VotedIdsFlagArray?: Array<string | null> | null;
  isscateg?: string | null;
  comcateg?: string | null;
  prefercateg?: string | null;
  searchcateg?: string | null;
};

export type GetIssueCategsenateMutation = {
  __typename: "IssCateg";
  VotedIdsFlagArray?: Array<string | null> | null;
  isscateg?: string | null;
  comcateg?: string | null;
  prefercateg?: string | null;
  searchcateg?: string | null;
};

export type GetIssueCateggovernMutation = {
  __typename: "IssCateg";
  VotedIdsFlagArray?: Array<string | null> | null;
  isscateg?: string | null;
  comcateg?: string | null;
  prefercateg?: string | null;
  searchcateg?: string | null;
};

export type GetPreferCategMutation = {
  __typename: "ComCateg";
  comcateg?: string | null;
};

export type FutureComPreferResultMutation = {
  __typename: "ComCateg";
  comcateg?: string | null;
};

export type FutureComPreferResultsenateMutation = {
  __typename: "ComCateg";
  comcateg?: string | null;
};

export type ComPreferInitializeAMutation = {
  __typename: "ComPreferOut";
  numberarray?: Array<number | null> | null;
  candarray?: Array<string | null> | null;
};

export type ComPreferInitializeAsenateMutation = {
  __typename: "ComPreferOut";
  numberarray?: Array<number | null> | null;
  candarray?: Array<string | null> | null;
};

export type CreateTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type AllDatinguserdbStagingsByCountyAgeQuery = {
  __typename: "PaginatedDatinguserdbStagings";
  DatinguserdbStagings: Array<{
    __typename: "DatinguserdbStaging";
    age: string;
    countyuser: string;
    education: string;
    email: string;
    emailshareagree: string;
    facebookbusername: string;
    industrylevel2: string;
    loyalty: string;
    menteeagree: string;
    mentoragree: string;
    occup: string;
    profilename: string;
    s3file: string;
    stateuser: string;
    userdescription: string;
    userid: string;
    veteran: string;
    unsubscribematchingme: string;
    newWidth: string;
    newHeight: string;
    gender: string;
  }>;
  InitialSearchArraySize: string;
  FilteredSearchArraySize: string;
  nextToken?: string | null;
};

export type AllDatinguserdbStagingsByCountyAge1Query = {
  __typename: "PaginatedDatinguserdbStagings";
  DatinguserdbStagings: Array<{
    __typename: "DatinguserdbStaging";
    age: string;
    countyuser: string;
    education: string;
    email: string;
    emailshareagree: string;
    facebookbusername: string;
    industrylevel2: string;
    loyalty: string;
    menteeagree: string;
    mentoragree: string;
    occup: string;
    profilename: string;
    s3file: string;
    stateuser: string;
    userdescription: string;
    userid: string;
    veteran: string;
    unsubscribematchingme: string;
    newWidth: string;
    newHeight: string;
    gender: string;
  }>;
  InitialSearchArraySize: string;
  FilteredSearchArraySize: string;
  nextToken?: string | null;
};

export type AllDatinguserdbStagingsByStateAgeQuery = {
  __typename: "PaginatedDatinguserdbStagings";
  DatinguserdbStagings: Array<{
    __typename: "DatinguserdbStaging";
    age: string;
    countyuser: string;
    education: string;
    email: string;
    emailshareagree: string;
    facebookbusername: string;
    industrylevel2: string;
    loyalty: string;
    menteeagree: string;
    mentoragree: string;
    occup: string;
    profilename: string;
    s3file: string;
    stateuser: string;
    userdescription: string;
    userid: string;
    veteran: string;
    unsubscribematchingme: string;
    newWidth: string;
    newHeight: string;
    gender: string;
  }>;
  InitialSearchArraySize: string;
  FilteredSearchArraySize: string;
  nextToken?: string | null;
};

export type AllDatinguserdbStagingsByStateAge1Query = {
  __typename: "PaginatedDatinguserdbStagings";
  DatinguserdbStagings: Array<{
    __typename: "DatinguserdbStaging";
    age: string;
    countyuser: string;
    education: string;
    email: string;
    emailshareagree: string;
    facebookbusername: string;
    industrylevel2: string;
    loyalty: string;
    menteeagree: string;
    mentoragree: string;
    occup: string;
    profilename: string;
    s3file: string;
    stateuser: string;
    userdescription: string;
    userid: string;
    veteran: string;
    unsubscribematchingme: string;
    newWidth: string;
    newHeight: string;
    gender: string;
  }>;
  InitialSearchArraySize: string;
  FilteredSearchArraySize: string;
  nextToken?: string | null;
};

export type AllDatinguserdbStagingsByCountyGenderQuery = {
  __typename: "PaginatedDatinguserdbStagings";
  DatinguserdbStagings: Array<{
    __typename: "DatinguserdbStaging";
    age: string;
    countyuser: string;
    education: string;
    email: string;
    emailshareagree: string;
    facebookbusername: string;
    industrylevel2: string;
    loyalty: string;
    menteeagree: string;
    mentoragree: string;
    occup: string;
    profilename: string;
    s3file: string;
    stateuser: string;
    userdescription: string;
    userid: string;
    veteran: string;
    unsubscribematchingme: string;
    newWidth: string;
    newHeight: string;
    gender: string;
  }>;
  InitialSearchArraySize: string;
  FilteredSearchArraySize: string;
  nextToken?: string | null;
};

export type AllDatinguserdbStagingsByCountyGender1Query = {
  __typename: "PaginatedDatinguserdbStagings";
  DatinguserdbStagings: Array<{
    __typename: "DatinguserdbStaging";
    age: string;
    countyuser: string;
    education: string;
    email: string;
    emailshareagree: string;
    facebookbusername: string;
    industrylevel2: string;
    loyalty: string;
    menteeagree: string;
    mentoragree: string;
    occup: string;
    profilename: string;
    s3file: string;
    stateuser: string;
    userdescription: string;
    userid: string;
    veteran: string;
    unsubscribematchingme: string;
    newWidth: string;
    newHeight: string;
    gender: string;
  }>;
  InitialSearchArraySize: string;
  FilteredSearchArraySize: string;
  nextToken?: string | null;
};

export type AllDatinguserdbStagingsByStateGenderQuery = {
  __typename: "PaginatedDatinguserdbStagings";
  DatinguserdbStagings: Array<{
    __typename: "DatinguserdbStaging";
    age: string;
    countyuser: string;
    education: string;
    email: string;
    emailshareagree: string;
    facebookbusername: string;
    industrylevel2: string;
    loyalty: string;
    menteeagree: string;
    mentoragree: string;
    occup: string;
    profilename: string;
    s3file: string;
    stateuser: string;
    userdescription: string;
    userid: string;
    veteran: string;
    unsubscribematchingme: string;
    newWidth: string;
    newHeight: string;
    gender: string;
  }>;
  InitialSearchArraySize: string;
  FilteredSearchArraySize: string;
  nextToken?: string | null;
};

export type AllDatinguserdbStagingsByStateGender1Query = {
  __typename: "PaginatedDatinguserdbStagings";
  DatinguserdbStagings: Array<{
    __typename: "DatinguserdbStaging";
    age: string;
    countyuser: string;
    education: string;
    email: string;
    emailshareagree: string;
    facebookbusername: string;
    industrylevel2: string;
    loyalty: string;
    menteeagree: string;
    mentoragree: string;
    occup: string;
    profilename: string;
    s3file: string;
    stateuser: string;
    userdescription: string;
    userid: string;
    veteran: string;
    unsubscribematchingme: string;
    newWidth: string;
    newHeight: string;
    gender: string;
  }>;
  InitialSearchArraySize: string;
  FilteredSearchArraySize: string;
  nextToken?: string | null;
};

export type AllDatinguserdbStagingsByOccupIndusQuery = {
  __typename: "PaginatedDatinguserdbStagings";
  DatinguserdbStagings: Array<{
    __typename: "DatinguserdbStaging";
    age: string;
    countyuser: string;
    education: string;
    email: string;
    emailshareagree: string;
    facebookbusername: string;
    industrylevel2: string;
    loyalty: string;
    menteeagree: string;
    mentoragree: string;
    occup: string;
    profilename: string;
    s3file: string;
    stateuser: string;
    userdescription: string;
    userid: string;
    veteran: string;
    unsubscribematchingme: string;
    newWidth: string;
    newHeight: string;
    gender: string;
  }>;
  InitialSearchArraySize: string;
  FilteredSearchArraySize: string;
  nextToken?: string | null;
};

export type AllDatinguserdbStagingsByOccupIndus1Query = {
  __typename: "PaginatedDatinguserdbStagings";
  DatinguserdbStagings: Array<{
    __typename: "DatinguserdbStaging";
    age: string;
    countyuser: string;
    education: string;
    email: string;
    emailshareagree: string;
    facebookbusername: string;
    industrylevel2: string;
    loyalty: string;
    menteeagree: string;
    mentoragree: string;
    occup: string;
    profilename: string;
    s3file: string;
    stateuser: string;
    userdescription: string;
    userid: string;
    veteran: string;
    unsubscribematchingme: string;
    newWidth: string;
    newHeight: string;
    gender: string;
  }>;
  InitialSearchArraySize: string;
  FilteredSearchArraySize: string;
  nextToken?: string | null;
};

export type AllDatinguserdbStagingsByOccupStateQuery = {
  __typename: "PaginatedDatinguserdbStagings";
  DatinguserdbStagings: Array<{
    __typename: "DatinguserdbStaging";
    age: string;
    countyuser: string;
    education: string;
    email: string;
    emailshareagree: string;
    facebookbusername: string;
    industrylevel2: string;
    loyalty: string;
    menteeagree: string;
    mentoragree: string;
    occup: string;
    profilename: string;
    s3file: string;
    stateuser: string;
    userdescription: string;
    userid: string;
    veteran: string;
    unsubscribematchingme: string;
    newWidth: string;
    newHeight: string;
    gender: string;
  }>;
  InitialSearchArraySize: string;
  FilteredSearchArraySize: string;
  nextToken?: string | null;
};

export type AllDatinguserdbStagingsByOccupState1Query = {
  __typename: "PaginatedDatinguserdbStagings";
  DatinguserdbStagings: Array<{
    __typename: "DatinguserdbStaging";
    age: string;
    countyuser: string;
    education: string;
    email: string;
    emailshareagree: string;
    facebookbusername: string;
    industrylevel2: string;
    loyalty: string;
    menteeagree: string;
    mentoragree: string;
    occup: string;
    profilename: string;
    s3file: string;
    stateuser: string;
    userdescription: string;
    userid: string;
    veteran: string;
    unsubscribematchingme: string;
    newWidth: string;
    newHeight: string;
    gender: string;
  }>;
  InitialSearchArraySize: string;
  FilteredSearchArraySize: string;
  nextToken?: string | null;
};

export type AllDatinguserdbStagingsByStateIndusQuery = {
  __typename: "PaginatedDatinguserdbStagings";
  DatinguserdbStagings: Array<{
    __typename: "DatinguserdbStaging";
    age: string;
    countyuser: string;
    education: string;
    email: string;
    emailshareagree: string;
    facebookbusername: string;
    industrylevel2: string;
    loyalty: string;
    menteeagree: string;
    mentoragree: string;
    occup: string;
    profilename: string;
    s3file: string;
    stateuser: string;
    userdescription: string;
    userid: string;
    veteran: string;
    unsubscribematchingme: string;
    newWidth: string;
    newHeight: string;
    gender: string;
  }>;
  InitialSearchArraySize: string;
  FilteredSearchArraySize: string;
  nextToken?: string | null;
};

export type AllDatinguserdbStagingsByStateIndus1Query = {
  __typename: "PaginatedDatinguserdbStagings";
  DatinguserdbStagings: Array<{
    __typename: "DatinguserdbStaging";
    age: string;
    countyuser: string;
    education: string;
    email: string;
    emailshareagree: string;
    facebookbusername: string;
    industrylevel2: string;
    loyalty: string;
    menteeagree: string;
    mentoragree: string;
    occup: string;
    profilename: string;
    s3file: string;
    stateuser: string;
    userdescription: string;
    userid: string;
    veteran: string;
    unsubscribematchingme: string;
    newWidth: string;
    newHeight: string;
    gender: string;
  }>;
  InitialSearchArraySize: string;
  FilteredSearchArraySize: string;
  nextToken?: string | null;
};

export type AllDatinguserdbStagingsByGenderLoyaltyQuery = {
  __typename: "LoyaltyDatinguserdbStagings";
  DatinguserdbStagings?: Array<{
    __typename: "DatinguserdbStaging";
    age: string;
    countyuser: string;
    education: string;
    email: string;
    emailshareagree: string;
    facebookbusername: string;
    industrylevel2: string;
    loyalty: string;
    menteeagree: string;
    mentoragree: string;
    occup: string;
    profilename: string;
    s3file: string;
    stateuser: string;
    userdescription: string;
    userid: string;
    veteran: string;
    unsubscribematchingme: string;
    newWidth: string;
    newHeight: string;
    gender: string;
  }> | null;
  arraytabs?: Array<string | null> | null;
  arrayindexes?: Array<number | null> | null;
  nextToken?: string | null;
};

export type AllDatinguserdbStagingsByStateLoyaltyQuery = {
  __typename: "LoyaltyDatinguserdbStagings";
  DatinguserdbStagings?: Array<{
    __typename: "DatinguserdbStaging";
    age: string;
    countyuser: string;
    education: string;
    email: string;
    emailshareagree: string;
    facebookbusername: string;
    industrylevel2: string;
    loyalty: string;
    menteeagree: string;
    mentoragree: string;
    occup: string;
    profilename: string;
    s3file: string;
    stateuser: string;
    userdescription: string;
    userid: string;
    veteran: string;
    unsubscribematchingme: string;
    newWidth: string;
    newHeight: string;
    gender: string;
  }> | null;
  arraytabs?: Array<string | null> | null;
  arrayindexes?: Array<number | null> | null;
  nextToken?: string | null;
};

export type GetLoyaltytab3B6CindexQuery = {
  __typename: "Loyaltytab3B6CIndex";
  tab13B6Cname?: string | null;
  indextab13B6C?: number | null;
};

export type GetDatinguserdbStagingQuery = {
  __typename: "DatinguserdbStaging";
  age: string;
  countyuser: string;
  education: string;
  email: string;
  emailshareagree: string;
  facebookbusername: string;
  industrylevel2: string;
  loyalty: string;
  menteeagree: string;
  mentoragree: string;
  occup: string;
  profilename: string;
  s3file: string;
  stateuser: string;
  userdescription: string;
  userid: string;
  veteran: string;
  unsubscribematchingme: string;
  newWidth: string;
  newHeight: string;
  gender: string;
};

export type GetDatinguserdbStagingsfacebookQuery = {
  __typename: "LoyaltyDatinguserdbStagings";
  DatinguserdbStagings?: Array<{
    __typename: "DatinguserdbStaging";
    age: string;
    countyuser: string;
    education: string;
    email: string;
    emailshareagree: string;
    facebookbusername: string;
    industrylevel2: string;
    loyalty: string;
    menteeagree: string;
    mentoragree: string;
    occup: string;
    profilename: string;
    s3file: string;
    stateuser: string;
    userdescription: string;
    userid: string;
    veteran: string;
    unsubscribematchingme: string;
    newWidth: string;
    newHeight: string;
    gender: string;
  }> | null;
  arraytabs?: Array<string | null> | null;
  arrayindexes?: Array<number | null> | null;
  nextToken?: string | null;
};

export type GetBatchDatinguserdbStagingQuery = {
  __typename: "PaginatedDatinguserdbStagings";
  DatinguserdbStagings: Array<{
    __typename: "DatinguserdbStaging";
    age: string;
    countyuser: string;
    education: string;
    email: string;
    emailshareagree: string;
    facebookbusername: string;
    industrylevel2: string;
    loyalty: string;
    menteeagree: string;
    mentoragree: string;
    occup: string;
    profilename: string;
    s3file: string;
    stateuser: string;
    userdescription: string;
    userid: string;
    veteran: string;
    unsubscribematchingme: string;
    newWidth: string;
    newHeight: string;
    gender: string;
  }>;
  InitialSearchArraySize: string;
  FilteredSearchArraySize: string;
  nextToken?: string | null;
};

export type ListDatinguserdbStagingsQuery = {
  __typename: "DatinguserdbStagingConnection";
  items?: Array<{
    __typename: "DatinguserdbStaging";
    age: string;
    countyuser: string;
    education: string;
    email: string;
    emailshareagree: string;
    facebookbusername: string;
    industrylevel2: string;
    loyalty: string;
    menteeagree: string;
    mentoragree: string;
    occup: string;
    profilename: string;
    s3file: string;
    stateuser: string;
    userdescription: string;
    userid: string;
    veteran: string;
    unsubscribematchingme: string;
    newWidth: string;
    newHeight: string;
    gender: string;
  } | null> | null;
  nextToken?: string | null;
};

export type ListDatinguserdbStagingsOneBigArray1AQuery = {
  __typename: "DatingitemtrackingStagingConnection";
  items?: Array<{
    __typename: "DatingitemtrackingStaging";
    userid?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type ListDatinguserdbStagingsOneBigArrayQuery = {
  __typename: "DatingitemtrackingStagingConnection";
  items?: Array<{
    __typename: "DatingitemtrackingStaging";
    userid?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type ListDatinguserdbStagingsOneBigArray1CQuery = {
  __typename: "DatingitemtrackingStagingConnection";
  items?: Array<{
    __typename: "DatingitemtrackingStaging";
    userid?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetDatingitemtrackingStagingQuery = {
  __typename: "DatingitemtrackingStaging";
  userid?: string | null;
};

export type ListDatingitemtrackingStagingsQuery = {
  __typename: "DatingitemtrackingStagingConnection";
  items?: Array<{
    __typename: "DatingitemtrackingStaging";
    userid?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetHouseCandsQuery = {
  __typename: "HouseCands";
  CandName: string;
  District?: string | null;
  Party?: string | null;
  State?: string | null;
  Website?: string | null;
  s3file?: string | null;
  PictureAttribution?: string | null;
  Coms?: string | null;
  Motto?: string | null;
  OverallYea?: string | null;
  OverallNay?: string | null;
  CAgricultureYea?: string | null;
  CAgricultureNay?: string | null;
  CFinancialYea?: string | null;
  CFinancialNay?: string | null;
  CEducationYea?: string | null;
  CEducationNay?: string | null;
  CAppropriationsYea?: string | null;
  CAppropriationsNay?: string | null;
  CAdminstrationYea?: string | null;
  CAdminstrationNay?: string | null;
  CForeignYea?: string | null;
  CForeignNay?: string | null;
  CTransportationYea?: string | null;
  CTransportationNay?: string | null;
  CVeteransYea?: string | null;
  CVeteransNay?: string | null;
  CClimateYea?: string | null;
  CClimateNay?: string | null;
  CEnergyYea?: string | null;
  CEnergyNay?: string | null;
  CEthicsYea?: string | null;
  CEthicsNay?: string | null;
  CWaysYea?: string | null;
  CWaysNay?: string | null;
  CScienceYea?: string | null;
  CScienceNay?: string | null;
  CArmedYea?: string | null;
  CArmedNay?: string | null;
  CJudiciaryYea?: string | null;
  CJudiciaryNay?: string | null;
  CHomelandYea?: string | null;
  CHomelandNay?: string | null;
  CBudgetYea?: string | null;
  CBudgetNay?: string | null;
  CNaturalYea?: string | null;
  CNaturalNay?: string | null;
  COversightYea?: string | null;
  COversightNay?: string | null;
  CSmallYea?: string | null;
  CSmallNay?: string | null;
  CTaxationYea?: string | null;
  CTaxationNay?: string | null;
  CIntelligenceYea?: string | null;
  CIntelligenceNay?: string | null;
  CAgricultureFuture?: string | null;
  CFinancialFuture?: string | null;
  CEducationFuture?: string | null;
  CAppropriationsFuture?: string | null;
  CAdminstrationFuture?: string | null;
  CForeignFuture?: string | null;
  CTransportationFuture?: string | null;
  CVeteransFuture?: string | null;
  CClimateFuture?: string | null;
  CEnergyFuture?: string | null;
  CEthicsFuture?: string | null;
  CWaysFuture?: string | null;
  CScienceFuture?: string | null;
  CArmedFuture?: string | null;
  CJudiciaryFuture?: string | null;
  CHomelandFuture?: string | null;
  CBudgetFuture?: string | null;
  CNaturalFuture?: string | null;
  COversightFuture?: string | null;
  CSmallFuture?: string | null;
  CTaxationFuture?: string | null;
  CIntelligenceFuture?: string | null;
  IBorderYea?: string | null;
  IBorderNay?: string | null;
  IImmigrationYea?: string | null;
  IImmigrationNay?: string | null;
  IAbortionYes?: string | null;
  IAbortionNay?: string | null;
  ITransgenderYea?: string | null;
  ITransgenderNay?: string | null;
  ISafetyYea?: string | null;
  ISafetyNay?: string | null;
  IEducationYea?: string | null;
  IEducationNay?: string | null;
  IVeteransYea?: string | null;
  IVeteransNay?: string | null;
  IClimateYea?: string | null;
  IClimateNay?: string | null;
  IMentalYea?: string | null;
  IMentalNay?: string | null;
  IGunsYea?: string | null;
  IGunsNay?: string | null;
  ICostYea?: string | null;
  ICostNay?: string | null;
  IFarmersYea?: string | null;
  IFarmersNay?: string | null;
  IEconomyYea?: string | null;
  IEconomyNay?: string | null;
  IHealthcareYea?: string | null;
  IHealthcareNay?: string | null;
  IInfrastructureYea?: string | null;
  IInfrastructureNay?: string | null;
  IEnergyYea?: string | null;
  IEnergyNay?: string | null;
  INaturalYea?: string | null;
  INaturalNay?: string | null;
  ICannabisYea?: string | null;
  ICannabisNay?: string | null;
  ITaxesYea?: string | null;
  ITaxesNay?: string | null;
  ISeniorsYea?: string | null;
  ISeniorsNay?: string | null;
  IManufacturingYea?: string | null;
  IManufacturingNay?: string | null;
  IHousingYea?: string | null;
  IHousingNay?: string | null;
  IDefenceYea?: string | null;
  IDefenceNay?: string | null;
  IFinanceYea?: string | null;
  IFinanceNay?: string | null;
};

export type GetSenateCandsQuery = {
  __typename: "SenateCands";
  CandName?: string | null;
  Party?: string | null;
  State?: string | null;
  Website?: string | null;
  ImageKey?: string | null;
  PictureAttribution?: string | null;
  Coms?: Array<string | null> | null;
  Issues?: Array<string | null> | null;
  Motto?: string | null;
  OverallYea?: string | null;
  OverallNay?: string | null;
  CAgricultureYea?: string | null;
  CAgricultureNay?: string | null;
  AgricultureFuture?: string | null;
  CAppropriationsYea?: string | null;
  CAppropriationsNay?: string | null;
  AppropriationsFuture?: string | null;
  CArmedYea?: string | null;
  CArmedNay?: string | null;
  ArmedFuture?: string | null;
  CBankingYea?: string | null;
  CBankingNay?: string | null;
  BankingFuture?: string | null;
  CBudgetYea?: string | null;
  CBudgetNay?: string | null;
  BudgetFuture?: string | null;
  CCommerceYea?: string | null;
  CCommerceNay?: string | null;
  CommerceFuture?: string | null;
  CEnergyYea?: string | null;
  CEnergyNay?: string | null;
  EnergyFuture?: string | null;
  CEnvironmentYea?: string | null;
  CEnvironmentNay?: string | null;
  EnvironmentFuture?: string | null;
  CFinanceYea?: string | null;
  CFinanceNay?: string | null;
  FinanceFuture?: string | null;
  CForeignYea?: string | null;
  CForeignNay?: string | null;
  ForeignFuture?: string | null;
  CHealthYea?: string | null;
  CHealthNay?: string | null;
  HealthFuture?: string | null;
  CHomelandYea?: string | null;
  CHomelandNay?: string | null;
  HomelandFuture?: string | null;
  CIndianYea?: string | null;
  CIndianNay?: string | null;
  IndianFuture?: string | null;
  CPrintingYea?: string | null;
  CPrintingNay?: string | null;
  PrintingFuture?: string | null;
  CTaxationYea?: string | null;
  CTaxationNay?: string | null;
  TaxationFuture?: string | null;
  CLibraryYea?: string | null;
  CLibraryNay?: string | null;
  LibraryFuture?: string | null;
  CEconomicYea?: string | null;
  CEconomicNay?: string | null;
  EconomicFuture?: string | null;
  CJudiciaryYea?: string | null;
  CJudiciaryNay?: string | null;
  JudiciaryFuture?: string | null;
  CRulesYea?: string | null;
  CRulesNay?: string | null;
  RulesFuture?: string | null;
  CEthicsYea?: string | null;
  CEthicsNay?: string | null;
  EthicsFuture?: string | null;
  CIntelligenceYea?: string | null;
  CIntelligenceNay?: string | null;
  IntelligenceFuture?: string | null;
  CBusinessYea?: string | null;
  CBusinessNay?: string | null;
  BusinessFuture?: string | null;
  CAgingYea?: string | null;
  CAgingNay?: string | null;
  AgingFuture?: string | null;
  CVeteranYea?: string | null;
  CVeteranNay?: string | null;
  VeteranFuture?: string | null;
  IBorderYea?: string | null;
  IBorderNay?: string | null;
  IImmigrationYea?: string | null;
  IImmigrationNay?: string | null;
  IAbortionYes?: string | null;
  IAbortionNay?: string | null;
  ITransgenderYea?: string | null;
  ITransgenderNay?: string | null;
  ISafetyYea?: string | null;
  ISafetyNay?: string | null;
  IEducationYea?: string | null;
  IEducationNay?: string | null;
  IVeteransYea?: string | null;
  IVeteransNay?: string | null;
  IClimateYea?: string | null;
  IClimateNay?: string | null;
  IMentalYea?: string | null;
  IMentalNay?: string | null;
  IGunsYea?: string | null;
  IGunsNay?: string | null;
  ICostYea?: string | null;
  ICostNay?: string | null;
  IFarmersYea?: string | null;
  IFarmersNay?: string | null;
  IEconomyYea?: string | null;
  IEconomyNay?: string | null;
  IHealthcareYea?: string | null;
  IHealthcareNay?: string | null;
  IInfrastructureYea?: string | null;
  IInfrastructureNay?: string | null;
  IEnergyYea?: string | null;
  IEnergyNay?: string | null;
  INaturalYea?: string | null;
  INaturalNay?: string | null;
  ICannabisYea?: string | null;
  ICannabisNay?: string | null;
  ITaxesYea?: string | null;
  ITaxesNay?: string | null;
  ISeniorsYea?: string | null;
  ISeniorsNay?: string | null;
  IManufacturingYea?: string | null;
  IManufacturingNay?: string | null;
  IHousingYea?: string | null;
  IHousingNay?: string | null;
  IDefenceYea?: string | null;
  IDefenceNay?: string | null;
  IFinanceYea?: string | null;
  IFinanceNay?: string | null;
};

export type GetStateCandsQuery = {
  __typename: "StateCands";
  CandName?: string | null;
  Office?: string | null;
  Party?: string | null;
  State?: string | null;
  District?: string | null;
  Website?: string | null;
  s3file?: string | null;
  PictureAttribution?: Array<string | null> | null;
  Coms?: string | null;
  Motto?: string | null;
  OverallYea?: string | null;
  OverallNay?: string | null;
  IBorderYea?: string | null;
  IBorderNay?: string | null;
  IImmigrationYea?: string | null;
  IImmigrationNay?: string | null;
  IAbortionYes?: string | null;
  IAbortionNay?: string | null;
  ITransgenderYea?: string | null;
  ITransgenderNay?: string | null;
  IVotingYea?: string | null;
  IVotingNay?: string | null;
  IElectionYea?: string | null;
  IElectionNay?: string | null;
  ISafetyYea?: string | null;
  ISafetyNay?: string | null;
  IEducationYea?: string | null;
  IEducationNay?: string | null;
  IVeteransYea?: string | null;
  IVeteransNay?: string | null;
  IClimateYea?: string | null;
  IClimateNay?: string | null;
  IHomelessnessYea?: string | null;
  IHomelessnessNay?: string | null;
  IMentalYea?: string | null;
  IMentalNay?: string | null;
  IGunsYea?: string | null;
  IGunsNay?: string | null;
  ICostYea?: string | null;
  ICostNay?: string | null;
  IFarmersYea?: string | null;
  IFarmersNay?: string | null;
  IPermanentYea?: string | null;
  IPermanentNay?: string | null;
  IEconomyYea?: string | null;
  IEconomyNay?: string | null;
  IHealthcareYea?: string | null;
  IHealthcareNay?: string | null;
  IInfrastructureYea?: string | null;
  IInfrastructureNay?: string | null;
  IEnergyYea?: string | null;
  IEnergyNay?: string | null;
  ICannabisYea?: string | null;
  ICannabisNay?: string | null;
  ITaxesYea?: string | null;
  ITaxesNay?: string | null;
  ILandsYea?: string | null;
  ILandsNay?: string | null;
  ISeniorsYea?: string | null;
  ISeniorsNay?: string | null;
  IManufacturingYea?: string | null;
  IManufacturingNay?: string | null;
  IHousingYea?: string | null;
  IHousingNay?: string | null;
};

export type GetDatinginteractionStagingQuery = {
  __typename: "DatinginteractionStaging";
  eventtype: string;
  interestcategory: string;
  itemid: string;
  timestamp: string;
  userid: string;
};

export type ListDatinginteractionStagingsQuery = {
  __typename: "DatinginteractionStagingConnection";
  items?: Array<{
    __typename: "DatinginteractionStaging";
    eventtype: string;
    interestcategory: string;
    itemid: string;
    timestamp: string;
    userid: string;
  } | null> | null;
  nextToken?: string | null;
};

export type ListVotedIdsflagshouseQuery = {
  __typename: "VotedIdsFlags";
  VotedIdsFlagArray?: Array<string | null> | null;
};

export type ListVotedIdsIssuesflagshouseQuery = {
  __typename: "VotedIdsFlagsIssue";
  VotedIdsFlagArray?: Array<number | null> | null;
  VotedIdsFlagArrayCand?: Array<string | null> | null;
  futurecomcandsvotedon?: Array<string | null> | null;
  FutureComPreferArray?: Array<string | null> | null;
  FutureComCandViewed?: number | null;
};

export type ListVotedIdsIssuesflagssenateQuery = {
  __typename: "VotedIdsFlagsIssue";
  VotedIdsFlagArray?: Array<number | null> | null;
  VotedIdsFlagArrayCand?: Array<string | null> | null;
  futurecomcandsvotedon?: Array<string | null> | null;
  FutureComPreferArray?: Array<string | null> | null;
  FutureComCandViewed?: number | null;
};

export type ListVotedIdsIssuesflagsgovernQuery = {
  __typename: "VotedIdsFlagsIssue";
  VotedIdsFlagArray?: Array<number | null> | null;
  VotedIdsFlagArrayCand?: Array<string | null> | null;
  futurecomcandsvotedon?: Array<string | null> | null;
  FutureComPreferArray?: Array<string | null> | null;
  FutureComCandViewed?: number | null;
};

export type SearchHouseCandInstateQuery = {
  __typename: "CandNameOutArray";
  items?: Array<{
    __typename: "CandNameOut";
    CandName?: string | null;
    District?: string | null;
    Party?: string | null;
    StateCand?: string | null;
    Website?: string | null;
    s3file?: string | null;
    PictureAttribution?: string | null;
    Coms?: string | null;
    Motto?: string | null;
    OverallYea?: string | null;
    OverallNay?: string | null;
    FirstComPrefer?: Array<number | null> | null;
    SecondComPrefer?: Array<number | null> | null;
    ThirdComPrefer?: Array<number | null> | null;
  } | null> | null;
};

export type SearchsenateCandInstateQuery = {
  __typename: "CandNameOutArray";
  items?: Array<{
    __typename: "CandNameOut";
    CandName?: string | null;
    District?: string | null;
    Party?: string | null;
    StateCand?: string | null;
    Website?: string | null;
    s3file?: string | null;
    PictureAttribution?: string | null;
    Coms?: string | null;
    Motto?: string | null;
    OverallYea?: string | null;
    OverallNay?: string | null;
    FirstComPrefer?: Array<number | null> | null;
    SecondComPrefer?: Array<number | null> | null;
    ThirdComPrefer?: Array<number | null> | null;
  } | null> | null;
};

export type GetTodoQuery = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTodosQuery = {
  __typename: "ModelTodoConnection";
  items: Array<{
    __typename: "Todo";
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateDatinguserdbStaging(
    input: CreateDatinguserdbStagingInput
  ): Promise<CreateDatinguserdbStagingMutation> {
    const statement = `mutation CreateDatinguserdbStaging($input: CreateDatinguserdbStagingInput!) {
        createDatinguserdbStaging(input: $input) {
          __typename
          age
          countyuser
          education
          email
          emailshareagree
          facebookbusername
          industrylevel2
          loyalty
          menteeagree
          mentoragree
          occup
          profilename
          s3file
          stateuser
          userdescription
          userid
          veteran
          unsubscribematchingme
          newWidth
          newHeight
          gender
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDatinguserdbStagingMutation>(
      response.data.createDatinguserdbStaging
    );
  }
  async DeleteDatinguserdbStaging(
    input: DeleteDatinguserdbStagingInput
  ): Promise<DeleteDatinguserdbStagingMutation> {
    const statement = `mutation DeleteDatinguserdbStaging($input: DeleteDatinguserdbStagingInput!) {
        deleteDatinguserdbStaging(input: $input) {
          __typename
          age
          countyuser
          education
          email
          emailshareagree
          facebookbusername
          industrylevel2
          loyalty
          menteeagree
          mentoragree
          occup
          profilename
          s3file
          stateuser
          userdescription
          userid
          veteran
          unsubscribematchingme
          newWidth
          newHeight
          gender
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDatinguserdbStagingMutation>(
      response.data.deleteDatinguserdbStaging
    );
  }
  async UpdateDatinguserdbStaging(
    input: UpdateDatinguserdbStagingInput
  ): Promise<UpdateDatinguserdbStagingMutation> {
    const statement = `mutation UpdateDatinguserdbStaging($input: UpdateDatinguserdbStagingInput!) {
        updateDatinguserdbStaging(input: $input) {
          __typename
          age
          countyuser
          education
          email
          emailshareagree
          facebookbusername
          industrylevel2
          loyalty
          menteeagree
          mentoragree
          occup
          profilename
          s3file
          stateuser
          userdescription
          userid
          veteran
          unsubscribematchingme
          newWidth
          newHeight
          gender
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDatinguserdbStagingMutation>(
      response.data.updateDatinguserdbStaging
    );
  }
  async UpdateDatinguserdbStaging1(
    userid: string,
    age: string
  ): Promise<UpdateDatinguserdbStaging1Mutation> {
    const statement = `mutation UpdateDatinguserdbStaging1($userid: String!, $age: String!) {
        updateDatinguserdbStaging1(userid: $userid, age: $age) {
          __typename
          age
          countyuser
          education
          email
          emailshareagree
          facebookbusername
          industrylevel2
          loyalty
          menteeagree
          mentoragree
          occup
          profilename
          s3file
          stateuser
          userdescription
          userid
          veteran
          unsubscribematchingme
          newWidth
          newHeight
          gender
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid,
      age
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDatinguserdbStaging1Mutation>(
      response.data.updateDatinguserdbStaging1
    );
  }
  async UpdateConnectButton(
    userid: string,
    itemid?: string,
    uuid?: string,
    interestcategory?: Array<string | null>,
    timestamp?: string,
    timeunix?: number
  ): Promise<UpdateConnectButtonMutation> {
    const statement = `mutation UpdateConnectButton($userid: String!, $itemid: String, $uuid: String, $interestcategory: [String], $timestamp: String, $timeunix: Float) {
        updateConnectButton(userid: $userid, itemid: $itemid, uuid: $uuid, interestcategory: $interestcategory, timestamp: $timestamp, timeunix: $timeunix) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    if (uuid) {
      gqlAPIServiceArguments.uuid = uuid;
    }
    if (interestcategory) {
      gqlAPIServiceArguments.interestcategory = interestcategory;
    }
    if (timestamp) {
      gqlAPIServiceArguments.timestamp = timestamp;
    }
    if (timeunix) {
      gqlAPIServiceArguments.timeunix = timeunix;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateConnectButtonMutation>response.data.updateConnectButton;
  }
  async UpdateAcceptRequestatb3Button(
    userid: string,
    itemid?: string,
    uuid?: string,
    interestcategory?: Array<string | null>,
    timestamp?: string,
    timeunix?: number
  ): Promise<UpdateAcceptRequestatb3ButtonMutation> {
    const statement = `mutation UpdateAcceptRequestatb3Button($userid: String!, $itemid: String, $uuid: String, $interestcategory: [String], $timestamp: String, $timeunix: Float) {
        updateAcceptRequestatb3Button(userid: $userid, itemid: $itemid, uuid: $uuid, interestcategory: $interestcategory, timestamp: $timestamp, timeunix: $timeunix) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    if (uuid) {
      gqlAPIServiceArguments.uuid = uuid;
    }
    if (interestcategory) {
      gqlAPIServiceArguments.interestcategory = interestcategory;
    }
    if (timestamp) {
      gqlAPIServiceArguments.timestamp = timestamp;
    }
    if (timeunix) {
      gqlAPIServiceArguments.timeunix = timeunix;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAcceptRequestatb3ButtonMutation>(
      response.data.updateAcceptRequestatb3Button
    );
  }
  async UpdateDeclineRequestatb3Button(
    userid: string,
    itemid?: string,
    uuid?: string,
    interestcategory?: Array<string | null>,
    timestamp?: string,
    timeunix?: number
  ): Promise<UpdateDeclineRequestatb3ButtonMutation> {
    const statement = `mutation UpdateDeclineRequestatb3Button($userid: String!, $itemid: String, $uuid: String, $interestcategory: [String], $timestamp: String, $timeunix: Float) {
        updateDeclineRequestatb3Button(userid: $userid, itemid: $itemid, uuid: $uuid, interestcategory: $interestcategory, timestamp: $timestamp, timeunix: $timeunix) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    if (uuid) {
      gqlAPIServiceArguments.uuid = uuid;
    }
    if (interestcategory) {
      gqlAPIServiceArguments.interestcategory = interestcategory;
    }
    if (timestamp) {
      gqlAPIServiceArguments.timestamp = timestamp;
    }
    if (timeunix) {
      gqlAPIServiceArguments.timeunix = timeunix;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDeclineRequestatb3ButtonMutation>(
      response.data.updateDeclineRequestatb3Button
    );
  }
  async NextButtonDatingitemtrackingStagingtab1A(
    userid: string,
    itemid?: string
  ): Promise<NextButtonDatingitemtrackingStagingtab1AMutation> {
    const statement = `mutation NextButtonDatingitemtrackingStagingtab1A($userid: String!, $itemid: String) {
        nextButtonDatingitemtrackingStagingtab1A(userid: $userid, itemid: $itemid) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <NextButtonDatingitemtrackingStagingtab1AMutation>(
      response.data.nextButtonDatingitemtrackingStagingtab1A
    );
  }
  async BackinitializeButtonDatingitemtrackingStagingtab1A(
    userid: string,
    itemid?: string,
    index?: number
  ): Promise<BackinitializeButtonDatingitemtrackingStagingtab1AMutation> {
    const statement = `mutation BackinitializeButtonDatingitemtrackingStagingtab1A($userid: String!, $itemid: String, $index: Int) {
        backinitializeButtonDatingitemtrackingStagingtab1A(userid: $userid, itemid: $itemid, index: $index) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    if (index) {
      gqlAPIServiceArguments.index = index;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <BackinitializeButtonDatingitemtrackingStagingtab1AMutation>(
      response.data.backinitializeButtonDatingitemtrackingStagingtab1A
    );
  }
  async NextButtonDatingitemtrackingStagingtab1B(
    userid: string,
    itemid?: string
  ): Promise<NextButtonDatingitemtrackingStagingtab1BMutation> {
    const statement = `mutation NextButtonDatingitemtrackingStagingtab1B($userid: String!, $itemid: String) {
        nextButtonDatingitemtrackingStagingtab1B(userid: $userid, itemid: $itemid) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <NextButtonDatingitemtrackingStagingtab1BMutation>(
      response.data.nextButtonDatingitemtrackingStagingtab1B
    );
  }
  async BackinitializeButtonDatingitemtrackingStagingtab1B(
    userid: string,
    itemid?: string,
    index?: number
  ): Promise<BackinitializeButtonDatingitemtrackingStagingtab1BMutation> {
    const statement = `mutation BackinitializeButtonDatingitemtrackingStagingtab1B($userid: String!, $itemid: String, $index: Int) {
        backinitializeButtonDatingitemtrackingStagingtab1B(userid: $userid, itemid: $itemid, index: $index) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    if (index) {
      gqlAPIServiceArguments.index = index;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <BackinitializeButtonDatingitemtrackingStagingtab1BMutation>(
      response.data.backinitializeButtonDatingitemtrackingStagingtab1B
    );
  }
  async NextButtonDatingitemtrackingStagingtab1C(
    userid: string,
    itemid?: string
  ): Promise<NextButtonDatingitemtrackingStagingtab1CMutation> {
    const statement = `mutation NextButtonDatingitemtrackingStagingtab1C($userid: String!, $itemid: String) {
        nextButtonDatingitemtrackingStagingtab1C(userid: $userid, itemid: $itemid) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <NextButtonDatingitemtrackingStagingtab1CMutation>(
      response.data.nextButtonDatingitemtrackingStagingtab1C
    );
  }
  async BackinitializeButtonDatingitemtrackingStagingtab1C(
    userid: string,
    itemid?: string,
    index?: number
  ): Promise<BackinitializeButtonDatingitemtrackingStagingtab1CMutation> {
    const statement = `mutation BackinitializeButtonDatingitemtrackingStagingtab1C($userid: String!, $itemid: String, $index: Int) {
        backinitializeButtonDatingitemtrackingStagingtab1C(userid: $userid, itemid: $itemid, index: $index) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    if (index) {
      gqlAPIServiceArguments.index = index;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <BackinitializeButtonDatingitemtrackingStagingtab1CMutation>(
      response.data.backinitializeButtonDatingitemtrackingStagingtab1C
    );
  }
  async NextButtonDatingitemtrackingStagingtab2(
    userid: string,
    itemid?: string
  ): Promise<NextButtonDatingitemtrackingStagingtab2Mutation> {
    const statement = `mutation NextButtonDatingitemtrackingStagingtab2($userid: String!, $itemid: String) {
        nextButtonDatingitemtrackingStagingtab2(userid: $userid, itemid: $itemid) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <NextButtonDatingitemtrackingStagingtab2Mutation>(
      response.data.nextButtonDatingitemtrackingStagingtab2
    );
  }
  async BackinitializeButtonDatingitemtrackingStagingtab2(
    userid: string,
    itemid?: string,
    index?: number
  ): Promise<BackinitializeButtonDatingitemtrackingStagingtab2Mutation> {
    const statement = `mutation BackinitializeButtonDatingitemtrackingStagingtab2($userid: String!, $itemid: String, $index: Int) {
        backinitializeButtonDatingitemtrackingStagingtab2(userid: $userid, itemid: $itemid, index: $index) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    if (index) {
      gqlAPIServiceArguments.index = index;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <BackinitializeButtonDatingitemtrackingStagingtab2Mutation>(
      response.data.backinitializeButtonDatingitemtrackingStagingtab2
    );
  }
  async NextButtonDatingitemtrackingStagingtab3(
    userid: string,
    itemid?: string
  ): Promise<NextButtonDatingitemtrackingStagingtab3Mutation> {
    const statement = `mutation NextButtonDatingitemtrackingStagingtab3($userid: String!, $itemid: String) {
        nextButtonDatingitemtrackingStagingtab3(userid: $userid, itemid: $itemid) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <NextButtonDatingitemtrackingStagingtab3Mutation>(
      response.data.nextButtonDatingitemtrackingStagingtab3
    );
  }
  async BackinitializeButtonDatingitemtrackingStagingtab3(
    userid: string,
    itemid?: string,
    index?: number
  ): Promise<BackinitializeButtonDatingitemtrackingStagingtab3Mutation> {
    const statement = `mutation BackinitializeButtonDatingitemtrackingStagingtab3($userid: String!, $itemid: String, $index: Int) {
        backinitializeButtonDatingitemtrackingStagingtab3(userid: $userid, itemid: $itemid, index: $index) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    if (index) {
      gqlAPIServiceArguments.index = index;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <BackinitializeButtonDatingitemtrackingStagingtab3Mutation>(
      response.data.backinitializeButtonDatingitemtrackingStagingtab3
    );
  }
  async NextButtonDatingitemtrackingStagingtab3B(
    userid: string,
    itemid?: string
  ): Promise<NextButtonDatingitemtrackingStagingtab3BMutation> {
    const statement = `mutation NextButtonDatingitemtrackingStagingtab3B($userid: String!, $itemid: String) {
        nextButtonDatingitemtrackingStagingtab3B(userid: $userid, itemid: $itemid) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <NextButtonDatingitemtrackingStagingtab3BMutation>(
      response.data.nextButtonDatingitemtrackingStagingtab3B
    );
  }
  async BackinitializeButtonDatingitemtrackingStagingtab3B(
    userid: string,
    itemid?: string,
    index?: number
  ): Promise<BackinitializeButtonDatingitemtrackingStagingtab3BMutation> {
    const statement = `mutation BackinitializeButtonDatingitemtrackingStagingtab3B($userid: String!, $itemid: String, $index: Int) {
        backinitializeButtonDatingitemtrackingStagingtab3B(userid: $userid, itemid: $itemid, index: $index) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    if (index) {
      gqlAPIServiceArguments.index = index;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <BackinitializeButtonDatingitemtrackingStagingtab3BMutation>(
      response.data.backinitializeButtonDatingitemtrackingStagingtab3B
    );
  }
  async NextButtonDatingitemtrackingStagingtab6(
    userid: string,
    itemid?: string
  ): Promise<NextButtonDatingitemtrackingStagingtab6Mutation> {
    const statement = `mutation NextButtonDatingitemtrackingStagingtab6($userid: String!, $itemid: String) {
        nextButtonDatingitemtrackingStagingtab6(userid: $userid, itemid: $itemid) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <NextButtonDatingitemtrackingStagingtab6Mutation>(
      response.data.nextButtonDatingitemtrackingStagingtab6
    );
  }
  async BackinitializeButtonDatingitemtrackingStagingtab6(
    userid: string,
    itemid?: string,
    index?: number
  ): Promise<BackinitializeButtonDatingitemtrackingStagingtab6Mutation> {
    const statement = `mutation BackinitializeButtonDatingitemtrackingStagingtab6($userid: String!, $itemid: String, $index: Int) {
        backinitializeButtonDatingitemtrackingStagingtab6(userid: $userid, itemid: $itemid, index: $index) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    if (index) {
      gqlAPIServiceArguments.index = index;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <BackinitializeButtonDatingitemtrackingStagingtab6Mutation>(
      response.data.backinitializeButtonDatingitemtrackingStagingtab6
    );
  }
  async NextButtonDatingitemtrackingStagingtab6B(
    userid: string,
    itemid?: string
  ): Promise<NextButtonDatingitemtrackingStagingtab6BMutation> {
    const statement = `mutation NextButtonDatingitemtrackingStagingtab6B($userid: String!, $itemid: String) {
        nextButtonDatingitemtrackingStagingtab6B(userid: $userid, itemid: $itemid) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <NextButtonDatingitemtrackingStagingtab6BMutation>(
      response.data.nextButtonDatingitemtrackingStagingtab6B
    );
  }
  async BackinitializeButtonDatingitemtrackingStagingtab6B(
    userid: string,
    itemid?: string,
    index?: number
  ): Promise<BackinitializeButtonDatingitemtrackingStagingtab6BMutation> {
    const statement = `mutation BackinitializeButtonDatingitemtrackingStagingtab6B($userid: String!, $itemid: String, $index: Int) {
        backinitializeButtonDatingitemtrackingStagingtab6B(userid: $userid, itemid: $itemid, index: $index) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    if (index) {
      gqlAPIServiceArguments.index = index;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <BackinitializeButtonDatingitemtrackingStagingtab6BMutation>(
      response.data.backinitializeButtonDatingitemtrackingStagingtab6B
    );
  }
  async NextButtonDatingitemtrackingStagingtab6C(
    userid: string,
    itemid?: string
  ): Promise<NextButtonDatingitemtrackingStagingtab6CMutation> {
    const statement = `mutation NextButtonDatingitemtrackingStagingtab6C($userid: String!, $itemid: String) {
        nextButtonDatingitemtrackingStagingtab6C(userid: $userid, itemid: $itemid) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <NextButtonDatingitemtrackingStagingtab6CMutation>(
      response.data.nextButtonDatingitemtrackingStagingtab6C
    );
  }
  async BackinitializeButtonDatingitemtrackingStagingtab6C(
    userid: string,
    itemid?: string,
    index?: number
  ): Promise<BackinitializeButtonDatingitemtrackingStagingtab6CMutation> {
    const statement = `mutation BackinitializeButtonDatingitemtrackingStagingtab6C($userid: String!, $itemid: String, $index: Int) {
        backinitializeButtonDatingitemtrackingStagingtab6C(userid: $userid, itemid: $itemid, index: $index) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    if (index) {
      gqlAPIServiceArguments.index = index;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <BackinitializeButtonDatingitemtrackingStagingtab6CMutation>(
      response.data.backinitializeButtonDatingitemtrackingStagingtab6C
    );
  }
  async NextButtonDatingitemtrackingStagingtab5(
    userid: string,
    itemid?: string
  ): Promise<NextButtonDatingitemtrackingStagingtab5Mutation> {
    const statement = `mutation NextButtonDatingitemtrackingStagingtab5($userid: String!, $itemid: String) {
        nextButtonDatingitemtrackingStagingtab5(userid: $userid, itemid: $itemid) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <NextButtonDatingitemtrackingStagingtab5Mutation>(
      response.data.nextButtonDatingitemtrackingStagingtab5
    );
  }
  async BackinitializeButtonDatingitemtrackingStagingtab5(
    userid: string,
    itemid?: string,
    index?: number
  ): Promise<BackinitializeButtonDatingitemtrackingStagingtab5Mutation> {
    const statement = `mutation BackinitializeButtonDatingitemtrackingStagingtab5($userid: String!, $itemid: String, $index: Int) {
        backinitializeButtonDatingitemtrackingStagingtab5(userid: $userid, itemid: $itemid, index: $index) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    if (index) {
      gqlAPIServiceArguments.index = index;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <BackinitializeButtonDatingitemtrackingStagingtab5Mutation>(
      response.data.backinitializeButtonDatingitemtrackingStagingtab5
    );
  }
  async UpdateDatingitemtrackingStaging(
    userid: Array<string>,
    itemidupdate: Array<string>
  ): Promise<UpdateDatingitemtrackingStagingMutation> {
    const statement = `mutation UpdateDatingitemtrackingStaging($userid: [String!]!, $itemidupdate: [String!]!) {
        updateDatingitemtrackingStaging(userid: $userid, itemidupdate: $itemidupdate) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid,
      itemidupdate
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDatingitemtrackingStagingMutation>(
      response.data.updateDatingitemtrackingStaging
    );
  }
  async UpdateDatingitemtrackingStagingSmallerArrays(
    userid: Array<string>,
    itemidupdate: Array<string>
  ): Promise<UpdateDatingitemtrackingStagingSmallerArraysMutation> {
    const statement = `mutation UpdateDatingitemtrackingStagingSmallerArrays($userid: [String!]!, $itemidupdate: [String!]!) {
        updateDatingitemtrackingStagingSmallerArrays(userid: $userid, itemidupdate: $itemidupdate) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid,
      itemidupdate
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDatingitemtrackingStagingSmallerArraysMutation>(
      response.data.updateDatingitemtrackingStagingSmallerArrays
    );
  }
  async CreateDatingitemtrackingOneBigArray(
    userid: string,
    onebigitemidupdate: Array<string>
  ): Promise<CreateDatingitemtrackingOneBigArrayMutation> {
    const statement = `mutation CreateDatingitemtrackingOneBigArray($userid: String!, $onebigitemidupdate: [String!]!) {
        createDatingitemtrackingOneBigArray(userid: $userid, onebigitemidupdate: $onebigitemidupdate) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid,
      onebigitemidupdate
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDatingitemtrackingOneBigArrayMutation>(
      response.data.createDatingitemtrackingOneBigArray
    );
  }
  async RemoveDatingitemtrackingStagingtab1B(
    userid: string,
    itemid?: string
  ): Promise<RemoveDatingitemtrackingStagingtab1BMutation> {
    const statement = `mutation RemoveDatingitemtrackingStagingtab1B($userid: String!, $itemid: String) {
        removeDatingitemtrackingStagingtab1B(userid: $userid, itemid: $itemid) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <RemoveDatingitemtrackingStagingtab1BMutation>(
      response.data.removeDatingitemtrackingStagingtab1B
    );
  }
  async RemoveDatingitemtrackingStagingtab1A(
    userid: string,
    itemid?: string
  ): Promise<RemoveDatingitemtrackingStagingtab1AMutation> {
    const statement = `mutation RemoveDatingitemtrackingStagingtab1A($userid: String!, $itemid: String) {
        removeDatingitemtrackingStagingtab1A(userid: $userid, itemid: $itemid) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <RemoveDatingitemtrackingStagingtab1AMutation>(
      response.data.removeDatingitemtrackingStagingtab1A
    );
  }
  async RemoveDatingitemtrackingStagingtab1C(
    userid: string,
    itemid?: string
  ): Promise<RemoveDatingitemtrackingStagingtab1CMutation> {
    const statement = `mutation RemoveDatingitemtrackingStagingtab1C($userid: String!, $itemid: String) {
        removeDatingitemtrackingStagingtab1C(userid: $userid, itemid: $itemid) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <RemoveDatingitemtrackingStagingtab1CMutation>(
      response.data.removeDatingitemtrackingStagingtab1C
    );
  }
  async ListDatinguserdbStagingsQuery(
    userid?: string,
    itemid?: string,
    filter?: TableDatinginteractionStagingFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDatinguserdbStagingsQueryMutation> {
    const statement = `mutation ListDatinguserdbStagingsQuery($userid: String, $itemid: String, $filter: TableDatinginteractionStagingFilterInput, $limit: Int, $nextToken: String) {
        listDatinguserdbStagingsQuery(userid: $userid, itemid: $itemid, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          eventtype
          interestcategory
          itemid
          timestamp
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userid) {
      gqlAPIServiceArguments.userid = userid;
    }
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDatinguserdbStagingsQueryMutation>(
      response.data.listDatinguserdbStagingsQuery
    );
  }
  async Updatetab3Expiration30days(
    userid?: string,
    itemid?: string
  ): Promise<Updatetab3Expiration30daysMutation> {
    const statement = `mutation Updatetab3Expiration30days($userid: String, $itemid: String) {
        updatetab3Expiration30days(userid: $userid, itemid: $itemid) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userid) {
      gqlAPIServiceArguments.userid = userid;
    }
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <Updatetab3Expiration30daysMutation>(
      response.data.updatetab3Expiration30days
    );
  }
  async Updatetab6Expiration30days(
    userid?: string,
    itemid?: string
  ): Promise<Updatetab6Expiration30daysMutation> {
    const statement = `mutation Updatetab6Expiration30days($userid: String, $itemid: String) {
        updatetab6Expiration30days(userid: $userid, itemid: $itemid) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userid) {
      gqlAPIServiceArguments.userid = userid;
    }
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <Updatetab6Expiration30daysMutation>(
      response.data.updatetab6Expiration30days
    );
  }
  async UpdateDislikeButton(
    userid: string,
    itemid?: string,
    uuid?: string,
    timestamp?: string,
    timeunix?: number
  ): Promise<UpdateDislikeButtonMutation> {
    const statement = `mutation UpdateDislikeButton($userid: String!, $itemid: String, $uuid: String, $timestamp: String, $timeunix: Float) {
        updateDislikeButton(userid: $userid, itemid: $itemid, uuid: $uuid, timestamp: $timestamp, timeunix: $timeunix) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    if (uuid) {
      gqlAPIServiceArguments.uuid = uuid;
    }
    if (timestamp) {
      gqlAPIServiceArguments.timestamp = timestamp;
    }
    if (timeunix) {
      gqlAPIServiceArguments.timeunix = timeunix;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDislikeButtonMutation>response.data.updateDislikeButton;
  }
  async UpdateCandsArrayOneTime(
    filter?: HouseCandsFilterInput
  ): Promise<UpdateCandsArrayOneTimeMutation> {
    const statement = `mutation UpdateCandsArrayOneTime($filter: HouseCandsFilterInput) {
        updateCandsArrayOneTime(filter: $filter) {
          __typename
          items {
            __typename
            CandName
            District
            Party
            State
            Website
            s3file
            PictureAttribution
            Coms
            Motto
            OverallYea
            OverallNay
            CAgricultureYea
            CAgricultureNay
            CFinancialYea
            CFinancialNay
            CEducationYea
            CEducationNay
            CAppropriationsYea
            CAppropriationsNay
            CAdminstrationYea
            CAdminstrationNay
            CForeignYea
            CForeignNay
            CTransportationYea
            CTransportationNay
            CVeteransYea
            CVeteransNay
            CClimateYea
            CClimateNay
            CEnergyYea
            CEnergyNay
            CEthicsYea
            CEthicsNay
            CWaysYea
            CWaysNay
            CScienceYea
            CScienceNay
            CArmedYea
            CArmedNay
            CJudiciaryYea
            CJudiciaryNay
            CHomelandYea
            CHomelandNay
            CBudgetYea
            CBudgetNay
            CNaturalYea
            CNaturalNay
            COversightYea
            COversightNay
            CSmallYea
            CSmallNay
            CTaxationYea
            CTaxationNay
            CIntelligenceYea
            CIntelligenceNay
            CAgricultureFuture
            CFinancialFuture
            CEducationFuture
            CAppropriationsFuture
            CAdminstrationFuture
            CForeignFuture
            CTransportationFuture
            CVeteransFuture
            CClimateFuture
            CEnergyFuture
            CEthicsFuture
            CWaysFuture
            CScienceFuture
            CArmedFuture
            CJudiciaryFuture
            CHomelandFuture
            CBudgetFuture
            CNaturalFuture
            COversightFuture
            CSmallFuture
            CTaxationFuture
            CIntelligenceFuture
            IBorderYea
            IBorderNay
            IImmigrationYea
            IImmigrationNay
            IAbortionYes
            IAbortionNay
            ITransgenderYea
            ITransgenderNay
            ISafetyYea
            ISafetyNay
            IEducationYea
            IEducationNay
            IVeteransYea
            IVeteransNay
            IClimateYea
            IClimateNay
            IMentalYea
            IMentalNay
            IGunsYea
            IGunsNay
            ICostYea
            ICostNay
            IFarmersYea
            IFarmersNay
            IEconomyYea
            IEconomyNay
            IHealthcareYea
            IHealthcareNay
            IInfrastructureYea
            IInfrastructureNay
            IEnergyYea
            IEnergyNay
            INaturalYea
            INaturalNay
            ICannabisYea
            ICannabisNay
            ITaxesYea
            ITaxesNay
            ISeniorsYea
            ISeniorsNay
            IManufacturingYea
            IManufacturingNay
            IHousingYea
            IHousingNay
            IDefenceYea
            IDefenceNay
            IFinanceYea
            IFinanceNay
          }
          justcands
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCandsArrayOneTimeMutation>(
      response.data.updateCandsArrayOneTime
    );
  }
  async Initializetabhouseinstate(
    userid1?: string,
    userid2?: string,
    state?: string
  ): Promise<InitializetabhouseinstateMutation> {
    const statement = `mutation Initializetabhouseinstate($userid1: String, $userid2: String, $state: String) {
        initializetabhouseinstate(userid1: $userid1, userid2: $userid2, state: $state) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userid1) {
      gqlAPIServiceArguments.userid1 = userid1;
    }
    if (userid2) {
      gqlAPIServiceArguments.userid2 = userid2;
    }
    if (state) {
      gqlAPIServiceArguments.state = state;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <InitializetabhouseinstateMutation>(
      response.data.initializetabhouseinstate
    );
  }
  async NextButtontabhouseinstate(
    userid: string,
    itemid?: string
  ): Promise<NextButtontabhouseinstateMutation> {
    const statement = `mutation NextButtontabhouseinstate($userid: String!, $itemid: String) {
        nextButtontabhouseinstate(userid: $userid, itemid: $itemid) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <NextButtontabhouseinstateMutation>(
      response.data.nextButtontabhouseinstate
    );
  }
  async NextButtontabsenateinstate(
    userid: string,
    itemid?: string
  ): Promise<NextButtontabsenateinstateMutation> {
    const statement = `mutation NextButtontabsenateinstate($userid: String!, $itemid: String) {
        nextButtontabsenateinstate(userid: $userid, itemid: $itemid) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <NextButtontabsenateinstateMutation>(
      response.data.nextButtontabsenateinstate
    );
  }
  async NextButtontabgoverninstate(
    userid: string,
    itemid?: string
  ): Promise<NextButtontabgoverninstateMutation> {
    const statement = `mutation NextButtontabgoverninstate($userid: String!, $itemid: String) {
        nextButtontabgoverninstate(userid: $userid, itemid: $itemid) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <NextButtontabgoverninstateMutation>(
      response.data.nextButtontabgoverninstate
    );
  }
  async BackinitializeButtontabhouseinstate(
    userid: string,
    itemid?: string,
    index?: number
  ): Promise<BackinitializeButtontabhouseinstateMutation> {
    const statement = `mutation BackinitializeButtontabhouseinstate($userid: String!, $itemid: String, $index: Int) {
        backinitializeButtontabhouseinstate(userid: $userid, itemid: $itemid, index: $index) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    if (index) {
      gqlAPIServiceArguments.index = index;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <BackinitializeButtontabhouseinstateMutation>(
      response.data.backinitializeButtontabhouseinstate
    );
  }
  async BackinitializeButtontabsenateinstate(
    userid: string,
    itemid?: string,
    index?: number
  ): Promise<BackinitializeButtontabsenateinstateMutation> {
    const statement = `mutation BackinitializeButtontabsenateinstate($userid: String!, $itemid: String, $index: Int) {
        backinitializeButtontabsenateinstate(userid: $userid, itemid: $itemid, index: $index) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    if (index) {
      gqlAPIServiceArguments.index = index;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <BackinitializeButtontabsenateinstateMutation>(
      response.data.backinitializeButtontabsenateinstate
    );
  }
  async BackinitializeButtontabgoverninstate(
    userid: string,
    itemid?: string,
    index?: number
  ): Promise<BackinitializeButtontabgoverninstateMutation> {
    const statement = `mutation BackinitializeButtontabgoverninstate($userid: String!, $itemid: String, $index: Int) {
        backinitializeButtontabgoverninstate(userid: $userid, itemid: $itemid, index: $index) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    if (index) {
      gqlAPIServiceArguments.index = index;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <BackinitializeButtontabgoverninstateMutation>(
      response.data.backinitializeButtontabgoverninstate
    );
  }
  async OverallResultUpdatetabhouseinstate(
    candname: string,
    userid?: string,
    isssel?: string,
    isscateg?: string,
    points?: number
  ): Promise<OverallResultUpdatetabhouseinstateMutation> {
    const statement = `mutation OverallResultUpdatetabhouseinstate($candname: String!, $userid: String, $isssel: String, $isscateg: String, $points: Int) {
        overallResultUpdatetabhouseinstate(candname: $candname, userid: $userid, isssel: $isssel, isscateg: $isscateg, points: $points) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      candname
    };
    if (userid) {
      gqlAPIServiceArguments.userid = userid;
    }
    if (isssel) {
      gqlAPIServiceArguments.isssel = isssel;
    }
    if (isscateg) {
      gqlAPIServiceArguments.isscateg = isscateg;
    }
    if (points) {
      gqlAPIServiceArguments.points = points;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <OverallResultUpdatetabhouseinstateMutation>(
      response.data.overallResultUpdatetabhouseinstate
    );
  }
  async ComResultUpdatetabhouseinstate(
    candname: string,
    userid?: string,
    comsel?: string,
    comcateg?: string,
    points?: number
  ): Promise<ComResultUpdatetabhouseinstateMutation> {
    const statement = `mutation ComResultUpdatetabhouseinstate($candname: String!, $userid: String, $comsel: String, $comcateg: String, $points: Int) {
        comResultUpdatetabhouseinstate(candname: $candname, userid: $userid, comsel: $comsel, comcateg: $comcateg, points: $points) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      candname
    };
    if (userid) {
      gqlAPIServiceArguments.userid = userid;
    }
    if (comsel) {
      gqlAPIServiceArguments.comsel = comsel;
    }
    if (comcateg) {
      gqlAPIServiceArguments.comcateg = comcateg;
    }
    if (points) {
      gqlAPIServiceArguments.points = points;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ComResultUpdatetabhouseinstateMutation>(
      response.data.comResultUpdatetabhouseinstate
    );
  }
  async IssResultUpdatetabhouseinstate(
    candname: string,
    userid?: string,
    isssel?: string,
    isscateg?: string,
    points?: number
  ): Promise<IssResultUpdatetabhouseinstateMutation> {
    const statement = `mutation IssResultUpdatetabhouseinstate($candname: String!, $userid: String, $isssel: String, $isscateg: String, $points: Int) {
        issResultUpdatetabhouseinstate(candname: $candname, userid: $userid, isssel: $isssel, isscateg: $isscateg, points: $points) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      candname
    };
    if (userid) {
      gqlAPIServiceArguments.userid = userid;
    }
    if (isssel) {
      gqlAPIServiceArguments.isssel = isssel;
    }
    if (isscateg) {
      gqlAPIServiceArguments.isscateg = isscateg;
    }
    if (points) {
      gqlAPIServiceArguments.points = points;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <IssResultUpdatetabhouseinstateMutation>(
      response.data.issResultUpdatetabhouseinstate
    );
  }
  async OverallResultUpdatetabsenateinstate(
    candname: string,
    userid?: string,
    isssel?: string,
    isscateg?: string,
    points?: number
  ): Promise<OverallResultUpdatetabsenateinstateMutation> {
    const statement = `mutation OverallResultUpdatetabsenateinstate($candname: String!, $userid: String, $isssel: String, $isscateg: String, $points: Int) {
        overallResultUpdatetabsenateinstate(candname: $candname, userid: $userid, isssel: $isssel, isscateg: $isscateg, points: $points) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      candname
    };
    if (userid) {
      gqlAPIServiceArguments.userid = userid;
    }
    if (isssel) {
      gqlAPIServiceArguments.isssel = isssel;
    }
    if (isscateg) {
      gqlAPIServiceArguments.isscateg = isscateg;
    }
    if (points) {
      gqlAPIServiceArguments.points = points;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <OverallResultUpdatetabsenateinstateMutation>(
      response.data.overallResultUpdatetabsenateinstate
    );
  }
  async OverallResultUpdatetabgoverninstate(
    candname: string,
    userid?: string,
    isssel?: string,
    isscateg?: string,
    points?: number
  ): Promise<OverallResultUpdatetabgoverninstateMutation> {
    const statement = `mutation OverallResultUpdatetabgoverninstate($candname: String!, $userid: String, $isssel: String, $isscateg: String, $points: Int) {
        overallResultUpdatetabgoverninstate(candname: $candname, userid: $userid, isssel: $isssel, isscateg: $isscateg, points: $points) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      candname
    };
    if (userid) {
      gqlAPIServiceArguments.userid = userid;
    }
    if (isssel) {
      gqlAPIServiceArguments.isssel = isssel;
    }
    if (isscateg) {
      gqlAPIServiceArguments.isscateg = isscateg;
    }
    if (points) {
      gqlAPIServiceArguments.points = points;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <OverallResultUpdatetabgoverninstateMutation>(
      response.data.overallResultUpdatetabgoverninstate
    );
  }
  async ComResultUpdatetabsenateinstate(
    candname: string,
    userid?: string,
    comsel?: string,
    comcateg?: string,
    points?: number
  ): Promise<ComResultUpdatetabsenateinstateMutation> {
    const statement = `mutation ComResultUpdatetabsenateinstate($candname: String!, $userid: String, $comsel: String, $comcateg: String, $points: Int) {
        comResultUpdatetabsenateinstate(candname: $candname, userid: $userid, comsel: $comsel, comcateg: $comcateg, points: $points) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      candname
    };
    if (userid) {
      gqlAPIServiceArguments.userid = userid;
    }
    if (comsel) {
      gqlAPIServiceArguments.comsel = comsel;
    }
    if (comcateg) {
      gqlAPIServiceArguments.comcateg = comcateg;
    }
    if (points) {
      gqlAPIServiceArguments.points = points;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ComResultUpdatetabsenateinstateMutation>(
      response.data.comResultUpdatetabsenateinstate
    );
  }
  async ComResultUpdatetabgoverninstate(
    candname: string,
    userid?: string,
    comsel?: string,
    comcateg?: string,
    points?: number
  ): Promise<ComResultUpdatetabgoverninstateMutation> {
    const statement = `mutation ComResultUpdatetabgoverninstate($candname: String!, $userid: String, $comsel: String, $comcateg: String, $points: Int) {
        comResultUpdatetabgoverninstate(candname: $candname, userid: $userid, comsel: $comsel, comcateg: $comcateg, points: $points) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      candname
    };
    if (userid) {
      gqlAPIServiceArguments.userid = userid;
    }
    if (comsel) {
      gqlAPIServiceArguments.comsel = comsel;
    }
    if (comcateg) {
      gqlAPIServiceArguments.comcateg = comcateg;
    }
    if (points) {
      gqlAPIServiceArguments.points = points;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ComResultUpdatetabgoverninstateMutation>(
      response.data.comResultUpdatetabgoverninstate
    );
  }
  async IssResultUpdatetabsenateinstate(
    candname: string,
    userid?: string,
    isssel?: string,
    isscateg?: string,
    points?: number
  ): Promise<IssResultUpdatetabsenateinstateMutation> {
    const statement = `mutation IssResultUpdatetabsenateinstate($candname: String!, $userid: String, $isssel: String, $isscateg: String, $points: Int) {
        issResultUpdatetabsenateinstate(candname: $candname, userid: $userid, isssel: $isssel, isscateg: $isscateg, points: $points) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      candname
    };
    if (userid) {
      gqlAPIServiceArguments.userid = userid;
    }
    if (isssel) {
      gqlAPIServiceArguments.isssel = isssel;
    }
    if (isscateg) {
      gqlAPIServiceArguments.isscateg = isscateg;
    }
    if (points) {
      gqlAPIServiceArguments.points = points;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <IssResultUpdatetabsenateinstateMutation>(
      response.data.issResultUpdatetabsenateinstate
    );
  }
  async GetCommiteeCateg(userid?: string): Promise<GetCommiteeCategMutation> {
    const statement = `mutation GetCommiteeCateg($userid: String) {
        getCommiteeCateg(userid: $userid) {
          __typename
          comcateg
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userid) {
      gqlAPIServiceArguments.userid = userid;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommiteeCategMutation>response.data.getCommiteeCateg;
  }
  async GetIssueCateg(userid?: string): Promise<GetIssueCategMutation> {
    const statement = `mutation GetIssueCateg($userid: String) {
        getIssueCateg(userid: $userid) {
          __typename
          VotedIdsFlagArray
          isscateg
          comcateg
          prefercateg
          searchcateg
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userid) {
      gqlAPIServiceArguments.userid = userid;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetIssueCategMutation>response.data.getIssueCateg;
  }
  async GetIssueCategsenate(
    userid?: string,
    candname?: string
  ): Promise<GetIssueCategsenateMutation> {
    const statement = `mutation GetIssueCategsenate($userid: String, $candname: String) {
        getIssueCategsenate(userid: $userid, candname: $candname) {
          __typename
          VotedIdsFlagArray
          isscateg
          comcateg
          prefercateg
          searchcateg
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userid) {
      gqlAPIServiceArguments.userid = userid;
    }
    if (candname) {
      gqlAPIServiceArguments.candname = candname;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetIssueCategsenateMutation>response.data.getIssueCategsenate;
  }
  async GetIssueCateggovern(
    userid?: string,
    candname?: string
  ): Promise<GetIssueCateggovernMutation> {
    const statement = `mutation GetIssueCateggovern($userid: String, $candname: String) {
        getIssueCateggovern(userid: $userid, candname: $candname) {
          __typename
          VotedIdsFlagArray
          isscateg
          comcateg
          prefercateg
          searchcateg
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userid) {
      gqlAPIServiceArguments.userid = userid;
    }
    if (candname) {
      gqlAPIServiceArguments.candname = candname;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetIssueCateggovernMutation>response.data.getIssueCateggovern;
  }
  async GetPreferCateg(userid?: string): Promise<GetPreferCategMutation> {
    const statement = `mutation GetPreferCateg($userid: String) {
        getPreferCateg(userid: $userid) {
          __typename
          comcateg
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userid) {
      gqlAPIServiceArguments.userid = userid;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPreferCategMutation>response.data.getPreferCateg;
  }
  async FutureComPreferResult(
    candname?: string,
    userid?: string,
    FirstComPrefer?: Array<number | null>,
    SecondComPrefer?: Array<number | null>,
    ThirdComPrefer?: Array<number | null>,
    FutureCom1?: string,
    FutureCom2?: string,
    FutureCom3?: string,
    points?: number
  ): Promise<FutureComPreferResultMutation> {
    const statement = `mutation FutureComPreferResult($candname: String, $userid: String, $FirstComPrefer: [Int], $SecondComPrefer: [Int], $ThirdComPrefer: [Int], $FutureCom1: String, $FutureCom2: String, $FutureCom3: String, $points: Int) {
        futureComPreferResult(candname: $candname, userid: $userid, FirstComPrefer: $FirstComPrefer, SecondComPrefer: $SecondComPrefer, ThirdComPrefer: $ThirdComPrefer, FutureCom1: $FutureCom1, FutureCom2: $FutureCom2, FutureCom3: $FutureCom3, points: $points) {
          __typename
          comcateg
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (candname) {
      gqlAPIServiceArguments.candname = candname;
    }
    if (userid) {
      gqlAPIServiceArguments.userid = userid;
    }
    if (FirstComPrefer) {
      gqlAPIServiceArguments.FirstComPrefer = FirstComPrefer;
    }
    if (SecondComPrefer) {
      gqlAPIServiceArguments.SecondComPrefer = SecondComPrefer;
    }
    if (ThirdComPrefer) {
      gqlAPIServiceArguments.ThirdComPrefer = ThirdComPrefer;
    }
    if (FutureCom1) {
      gqlAPIServiceArguments.FutureCom1 = FutureCom1;
    }
    if (FutureCom2) {
      gqlAPIServiceArguments.FutureCom2 = FutureCom2;
    }
    if (FutureCom3) {
      gqlAPIServiceArguments.FutureCom3 = FutureCom3;
    }
    if (points) {
      gqlAPIServiceArguments.points = points;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <FutureComPreferResultMutation>response.data.futureComPreferResult;
  }
  async FutureComPreferResultsenate(
    candname?: string,
    userid?: string,
    FirstComPrefer?: Array<number | null>,
    SecondComPrefer?: Array<number | null>,
    ThirdComPrefer?: Array<number | null>,
    FutureCom1?: string,
    FutureCom2?: string,
    FutureCom3?: string,
    points?: number
  ): Promise<FutureComPreferResultsenateMutation> {
    const statement = `mutation FutureComPreferResultsenate($candname: String, $userid: String, $FirstComPrefer: [Int], $SecondComPrefer: [Int], $ThirdComPrefer: [Int], $FutureCom1: String, $FutureCom2: String, $FutureCom3: String, $points: Int) {
        futureComPreferResultsenate(candname: $candname, userid: $userid, FirstComPrefer: $FirstComPrefer, SecondComPrefer: $SecondComPrefer, ThirdComPrefer: $ThirdComPrefer, FutureCom1: $FutureCom1, FutureCom2: $FutureCom2, FutureCom3: $FutureCom3, points: $points) {
          __typename
          comcateg
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (candname) {
      gqlAPIServiceArguments.candname = candname;
    }
    if (userid) {
      gqlAPIServiceArguments.userid = userid;
    }
    if (FirstComPrefer) {
      gqlAPIServiceArguments.FirstComPrefer = FirstComPrefer;
    }
    if (SecondComPrefer) {
      gqlAPIServiceArguments.SecondComPrefer = SecondComPrefer;
    }
    if (ThirdComPrefer) {
      gqlAPIServiceArguments.ThirdComPrefer = ThirdComPrefer;
    }
    if (FutureCom1) {
      gqlAPIServiceArguments.FutureCom1 = FutureCom1;
    }
    if (FutureCom2) {
      gqlAPIServiceArguments.FutureCom2 = FutureCom2;
    }
    if (FutureCom3) {
      gqlAPIServiceArguments.FutureCom3 = FutureCom3;
    }
    if (points) {
      gqlAPIServiceArguments.points = points;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <FutureComPreferResultsenateMutation>(
      response.data.futureComPreferResultsenate
    );
  }
  async ComPreferInitializeA(
    slno?: string
  ): Promise<ComPreferInitializeAMutation> {
    const statement = `mutation ComPreferInitializeA($slno: String) {
        comPreferInitializeA(slno: $slno) {
          __typename
          numberarray
          candarray
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (slno) {
      gqlAPIServiceArguments.slno = slno;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ComPreferInitializeAMutation>response.data.comPreferInitializeA;
  }
  async ComPreferInitializeAsenate(
    slno?: string
  ): Promise<ComPreferInitializeAsenateMutation> {
    const statement = `mutation ComPreferInitializeAsenate($slno: String) {
        comPreferInitializeAsenate(slno: $slno) {
          __typename
          numberarray
          candarray
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (slno) {
      gqlAPIServiceArguments.slno = slno;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ComPreferInitializeAsenateMutation>(
      response.data.comPreferInitializeAsenate
    );
  }
  async CreateTodo(
    input: CreateTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<CreateTodoMutation> {
    const statement = `mutation CreateTodo($input: CreateTodoInput!, $condition: ModelTodoConditionInput) {
        createTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTodoMutation>response.data.createTodo;
  }
  async UpdateTodo(
    input: UpdateTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<UpdateTodoMutation> {
    const statement = `mutation UpdateTodo($input: UpdateTodoInput!, $condition: ModelTodoConditionInput) {
        updateTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTodoMutation>response.data.updateTodo;
  }
  async DeleteTodo(
    input: DeleteTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<DeleteTodoMutation> {
    const statement = `mutation DeleteTodo($input: DeleteTodoInput!, $condition: ModelTodoConditionInput) {
        deleteTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTodoMutation>response.data.deleteTodo;
  }
  async AllDatinguserdbStagingsByCountyAge(
    countyuser: string,
    searcharray?: Array<string>,
    agevalue?: string,
    ageflag?: string,
    filter?: TableDatinguserdbStagingFilterInput,
    count?: number,
    nextToken?: string
  ): Promise<AllDatinguserdbStagingsByCountyAgeQuery> {
    const statement = `query AllDatinguserdbStagingsByCountyAge($searcharray: [String!], $agevalue: String, $ageflag: String, $filter: TableDatinguserdbStagingFilterInput, $countyuser: String!, $count: Int, $nextToken: String) {
        allDatinguserdbStagingsByCountyAge(searcharray: $searcharray, agevalue: $agevalue, ageflag: $ageflag, filter: $filter, countyuser: $countyuser, count: $count, nextToken: $nextToken) {
          __typename
          DatinguserdbStagings {
            __typename
            age
            countyuser
            education
            email
            emailshareagree
            facebookbusername
            industrylevel2
            loyalty
            menteeagree
            mentoragree
            occup
            profilename
            s3file
            stateuser
            userdescription
            userid
            veteran
            unsubscribematchingme
            newWidth
            newHeight
            gender
          }
          InitialSearchArraySize
          FilteredSearchArraySize
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      countyuser
    };
    if (searcharray) {
      gqlAPIServiceArguments.searcharray = searcharray;
    }
    if (agevalue) {
      gqlAPIServiceArguments.agevalue = agevalue;
    }
    if (ageflag) {
      gqlAPIServiceArguments.ageflag = ageflag;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (count) {
      gqlAPIServiceArguments.count = count;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AllDatinguserdbStagingsByCountyAgeQuery>(
      response.data.allDatinguserdbStagingsByCountyAge
    );
  }
  async AllDatinguserdbStagingsByCountyAge1(
    userid: string,
    countyuser: string,
    agevalue?: string,
    ageflag?: string,
    filter?: TableDatinguserdbStagingFilterInput,
    count?: number,
    nextToken?: string
  ): Promise<AllDatinguserdbStagingsByCountyAge1Query> {
    const statement = `query AllDatinguserdbStagingsByCountyAge1($userid: String!, $agevalue: String, $ageflag: String, $filter: TableDatinguserdbStagingFilterInput, $countyuser: String!, $count: Int, $nextToken: String) {
        allDatinguserdbStagingsByCountyAge1(userid: $userid, agevalue: $agevalue, ageflag: $ageflag, filter: $filter, countyuser: $countyuser, count: $count, nextToken: $nextToken) {
          __typename
          DatinguserdbStagings {
            __typename
            age
            countyuser
            education
            email
            emailshareagree
            facebookbusername
            industrylevel2
            loyalty
            menteeagree
            mentoragree
            occup
            profilename
            s3file
            stateuser
            userdescription
            userid
            veteran
            unsubscribematchingme
            newWidth
            newHeight
            gender
          }
          InitialSearchArraySize
          FilteredSearchArraySize
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid,
      countyuser
    };
    if (agevalue) {
      gqlAPIServiceArguments.agevalue = agevalue;
    }
    if (ageflag) {
      gqlAPIServiceArguments.ageflag = ageflag;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (count) {
      gqlAPIServiceArguments.count = count;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AllDatinguserdbStagingsByCountyAge1Query>(
      response.data.allDatinguserdbStagingsByCountyAge1
    );
  }
  async AllDatinguserdbStagingsByStateAge(
    stateuser: string,
    searcharray?: Array<string>,
    agevalue?: string,
    ageflag?: string,
    filter?: TableDatinguserdbStagingFilterInput,
    count?: number,
    nextToken?: string
  ): Promise<AllDatinguserdbStagingsByStateAgeQuery> {
    const statement = `query AllDatinguserdbStagingsByStateAge($searcharray: [String!], $agevalue: String, $ageflag: String, $filter: TableDatinguserdbStagingFilterInput, $stateuser: String!, $count: Int, $nextToken: String) {
        allDatinguserdbStagingsByStateAge(searcharray: $searcharray, agevalue: $agevalue, ageflag: $ageflag, filter: $filter, stateuser: $stateuser, count: $count, nextToken: $nextToken) {
          __typename
          DatinguserdbStagings {
            __typename
            age
            countyuser
            education
            email
            emailshareagree
            facebookbusername
            industrylevel2
            loyalty
            menteeagree
            mentoragree
            occup
            profilename
            s3file
            stateuser
            userdescription
            userid
            veteran
            unsubscribematchingme
            newWidth
            newHeight
            gender
          }
          InitialSearchArraySize
          FilteredSearchArraySize
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      stateuser
    };
    if (searcharray) {
      gqlAPIServiceArguments.searcharray = searcharray;
    }
    if (agevalue) {
      gqlAPIServiceArguments.agevalue = agevalue;
    }
    if (ageflag) {
      gqlAPIServiceArguments.ageflag = ageflag;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (count) {
      gqlAPIServiceArguments.count = count;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AllDatinguserdbStagingsByStateAgeQuery>(
      response.data.allDatinguserdbStagingsByStateAge
    );
  }
  async AllDatinguserdbStagingsByStateAge1(
    userid: string,
    stateuser: string,
    agevalue?: string,
    ageflag?: string,
    filter?: TableDatinguserdbStagingFilterInput,
    count?: number,
    nextToken?: string
  ): Promise<AllDatinguserdbStagingsByStateAge1Query> {
    const statement = `query AllDatinguserdbStagingsByStateAge1($userid: String!, $agevalue: String, $ageflag: String, $filter: TableDatinguserdbStagingFilterInput, $stateuser: String!, $count: Int, $nextToken: String) {
        allDatinguserdbStagingsByStateAge1(userid: $userid, agevalue: $agevalue, ageflag: $ageflag, filter: $filter, stateuser: $stateuser, count: $count, nextToken: $nextToken) {
          __typename
          DatinguserdbStagings {
            __typename
            age
            countyuser
            education
            email
            emailshareagree
            facebookbusername
            industrylevel2
            loyalty
            menteeagree
            mentoragree
            occup
            profilename
            s3file
            stateuser
            userdescription
            userid
            veteran
            unsubscribematchingme
            newWidth
            newHeight
            gender
          }
          InitialSearchArraySize
          FilteredSearchArraySize
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid,
      stateuser
    };
    if (agevalue) {
      gqlAPIServiceArguments.agevalue = agevalue;
    }
    if (ageflag) {
      gqlAPIServiceArguments.ageflag = ageflag;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (count) {
      gqlAPIServiceArguments.count = count;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AllDatinguserdbStagingsByStateAge1Query>(
      response.data.allDatinguserdbStagingsByStateAge1
    );
  }
  async AllDatinguserdbStagingsByCountyGender(
    countyuser: string,
    searcharray?: Array<string>,
    gendervalue?: string,
    genderflag?: string,
    filter?: TableDatinguserdbStagingFilterInput,
    count?: number,
    nextToken?: string
  ): Promise<AllDatinguserdbStagingsByCountyGenderQuery> {
    const statement = `query AllDatinguserdbStagingsByCountyGender($searcharray: [String!], $gendervalue: String, $genderflag: String, $filter: TableDatinguserdbStagingFilterInput, $countyuser: String!, $count: Int, $nextToken: String) {
        allDatinguserdbStagingsByCountyGender(searcharray: $searcharray, gendervalue: $gendervalue, genderflag: $genderflag, filter: $filter, countyuser: $countyuser, count: $count, nextToken: $nextToken) {
          __typename
          DatinguserdbStagings {
            __typename
            age
            countyuser
            education
            email
            emailshareagree
            facebookbusername
            industrylevel2
            loyalty
            menteeagree
            mentoragree
            occup
            profilename
            s3file
            stateuser
            userdescription
            userid
            veteran
            unsubscribematchingme
            newWidth
            newHeight
            gender
          }
          InitialSearchArraySize
          FilteredSearchArraySize
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      countyuser
    };
    if (searcharray) {
      gqlAPIServiceArguments.searcharray = searcharray;
    }
    if (gendervalue) {
      gqlAPIServiceArguments.gendervalue = gendervalue;
    }
    if (genderflag) {
      gqlAPIServiceArguments.genderflag = genderflag;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (count) {
      gqlAPIServiceArguments.count = count;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AllDatinguserdbStagingsByCountyGenderQuery>(
      response.data.allDatinguserdbStagingsByCountyGender
    );
  }
  async AllDatinguserdbStagingsByCountyGender1(
    userid: string,
    countyuser: string,
    gendervalue?: string,
    genderflag?: string,
    filter?: TableDatinguserdbStagingFilterInput,
    count?: number,
    nextToken?: string
  ): Promise<AllDatinguserdbStagingsByCountyGender1Query> {
    const statement = `query AllDatinguserdbStagingsByCountyGender1($userid: String!, $gendervalue: String, $genderflag: String, $filter: TableDatinguserdbStagingFilterInput, $countyuser: String!, $count: Int, $nextToken: String) {
        allDatinguserdbStagingsByCountyGender1(userid: $userid, gendervalue: $gendervalue, genderflag: $genderflag, filter: $filter, countyuser: $countyuser, count: $count, nextToken: $nextToken) {
          __typename
          DatinguserdbStagings {
            __typename
            age
            countyuser
            education
            email
            emailshareagree
            facebookbusername
            industrylevel2
            loyalty
            menteeagree
            mentoragree
            occup
            profilename
            s3file
            stateuser
            userdescription
            userid
            veteran
            unsubscribematchingme
            newWidth
            newHeight
            gender
          }
          InitialSearchArraySize
          FilteredSearchArraySize
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid,
      countyuser
    };
    if (gendervalue) {
      gqlAPIServiceArguments.gendervalue = gendervalue;
    }
    if (genderflag) {
      gqlAPIServiceArguments.genderflag = genderflag;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (count) {
      gqlAPIServiceArguments.count = count;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AllDatinguserdbStagingsByCountyGender1Query>(
      response.data.allDatinguserdbStagingsByCountyGender1
    );
  }
  async AllDatinguserdbStagingsByStateGender(
    stateuser: string,
    searcharray?: Array<string>,
    gendervalue?: string,
    genderflag?: string,
    filter?: TableDatinguserdbStagingFilterInput,
    count?: number,
    nextToken?: string
  ): Promise<AllDatinguserdbStagingsByStateGenderQuery> {
    const statement = `query AllDatinguserdbStagingsByStateGender($searcharray: [String!], $gendervalue: String, $genderflag: String, $filter: TableDatinguserdbStagingFilterInput, $stateuser: String!, $count: Int, $nextToken: String) {
        allDatinguserdbStagingsByStateGender(searcharray: $searcharray, gendervalue: $gendervalue, genderflag: $genderflag, filter: $filter, stateuser: $stateuser, count: $count, nextToken: $nextToken) {
          __typename
          DatinguserdbStagings {
            __typename
            age
            countyuser
            education
            email
            emailshareagree
            facebookbusername
            industrylevel2
            loyalty
            menteeagree
            mentoragree
            occup
            profilename
            s3file
            stateuser
            userdescription
            userid
            veteran
            unsubscribematchingme
            newWidth
            newHeight
            gender
          }
          InitialSearchArraySize
          FilteredSearchArraySize
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      stateuser
    };
    if (searcharray) {
      gqlAPIServiceArguments.searcharray = searcharray;
    }
    if (gendervalue) {
      gqlAPIServiceArguments.gendervalue = gendervalue;
    }
    if (genderflag) {
      gqlAPIServiceArguments.genderflag = genderflag;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (count) {
      gqlAPIServiceArguments.count = count;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AllDatinguserdbStagingsByStateGenderQuery>(
      response.data.allDatinguserdbStagingsByStateGender
    );
  }
  async AllDatinguserdbStagingsByStateGender1(
    userid: string,
    stateuser: string,
    gendervalue?: string,
    genderflag?: string,
    filter?: TableDatinguserdbStagingFilterInput,
    count?: number,
    nextToken?: string
  ): Promise<AllDatinguserdbStagingsByStateGender1Query> {
    const statement = `query AllDatinguserdbStagingsByStateGender1($userid: String!, $gendervalue: String, $genderflag: String, $filter: TableDatinguserdbStagingFilterInput, $stateuser: String!, $count: Int, $nextToken: String) {
        allDatinguserdbStagingsByStateGender1(userid: $userid, gendervalue: $gendervalue, genderflag: $genderflag, filter: $filter, stateuser: $stateuser, count: $count, nextToken: $nextToken) {
          __typename
          DatinguserdbStagings {
            __typename
            age
            countyuser
            education
            email
            emailshareagree
            facebookbusername
            industrylevel2
            loyalty
            menteeagree
            mentoragree
            occup
            profilename
            s3file
            stateuser
            userdescription
            userid
            veteran
            unsubscribematchingme
            newWidth
            newHeight
            gender
          }
          InitialSearchArraySize
          FilteredSearchArraySize
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid,
      stateuser
    };
    if (gendervalue) {
      gqlAPIServiceArguments.gendervalue = gendervalue;
    }
    if (genderflag) {
      gqlAPIServiceArguments.genderflag = genderflag;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (count) {
      gqlAPIServiceArguments.count = count;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AllDatinguserdbStagingsByStateGender1Query>(
      response.data.allDatinguserdbStagingsByStateGender1
    );
  }
  async AllDatinguserdbStagingsByOccupIndus(
    occup: string,
    searcharray?: Array<string>,
    indusvalue?: string,
    indusflag?: string,
    filter?: TableDatinguserdbStagingFilterInput,
    count?: number,
    nextToken?: string
  ): Promise<AllDatinguserdbStagingsByOccupIndusQuery> {
    const statement = `query AllDatinguserdbStagingsByOccupIndus($searcharray: [String!], $indusvalue: String, $indusflag: String, $filter: TableDatinguserdbStagingFilterInput, $occup: String!, $count: Int, $nextToken: String) {
        allDatinguserdbStagingsByOccupIndus(searcharray: $searcharray, indusvalue: $indusvalue, indusflag: $indusflag, filter: $filter, occup: $occup, count: $count, nextToken: $nextToken) {
          __typename
          DatinguserdbStagings {
            __typename
            age
            countyuser
            education
            email
            emailshareagree
            facebookbusername
            industrylevel2
            loyalty
            menteeagree
            mentoragree
            occup
            profilename
            s3file
            stateuser
            userdescription
            userid
            veteran
            unsubscribematchingme
            newWidth
            newHeight
            gender
          }
          InitialSearchArraySize
          FilteredSearchArraySize
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      occup
    };
    if (searcharray) {
      gqlAPIServiceArguments.searcharray = searcharray;
    }
    if (indusvalue) {
      gqlAPIServiceArguments.indusvalue = indusvalue;
    }
    if (indusflag) {
      gqlAPIServiceArguments.indusflag = indusflag;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (count) {
      gqlAPIServiceArguments.count = count;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AllDatinguserdbStagingsByOccupIndusQuery>(
      response.data.allDatinguserdbStagingsByOccupIndus
    );
  }
  async AllDatinguserdbStagingsByOccupIndus1(
    userid: string,
    occup: string,
    indusvalue?: string,
    indusflag?: string,
    filter?: TableDatinguserdbStagingFilterInput,
    count?: number,
    nextToken?: string
  ): Promise<AllDatinguserdbStagingsByOccupIndus1Query> {
    const statement = `query AllDatinguserdbStagingsByOccupIndus1($userid: String!, $indusvalue: String, $indusflag: String, $filter: TableDatinguserdbStagingFilterInput, $occup: String!, $count: Int, $nextToken: String) {
        allDatinguserdbStagingsByOccupIndus1(userid: $userid, indusvalue: $indusvalue, indusflag: $indusflag, filter: $filter, occup: $occup, count: $count, nextToken: $nextToken) {
          __typename
          DatinguserdbStagings {
            __typename
            age
            countyuser
            education
            email
            emailshareagree
            facebookbusername
            industrylevel2
            loyalty
            menteeagree
            mentoragree
            occup
            profilename
            s3file
            stateuser
            userdescription
            userid
            veteran
            unsubscribematchingme
            newWidth
            newHeight
            gender
          }
          InitialSearchArraySize
          FilteredSearchArraySize
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid,
      occup
    };
    if (indusvalue) {
      gqlAPIServiceArguments.indusvalue = indusvalue;
    }
    if (indusflag) {
      gqlAPIServiceArguments.indusflag = indusflag;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (count) {
      gqlAPIServiceArguments.count = count;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AllDatinguserdbStagingsByOccupIndus1Query>(
      response.data.allDatinguserdbStagingsByOccupIndus1
    );
  }
  async AllDatinguserdbStagingsByOccupState(
    occup: string,
    searcharray?: Array<string>,
    statevalue?: string,
    filter?: TableDatinguserdbStagingFilterInput,
    count?: number,
    nextToken?: string
  ): Promise<AllDatinguserdbStagingsByOccupStateQuery> {
    const statement = `query AllDatinguserdbStagingsByOccupState($searcharray: [String!], $statevalue: String, $filter: TableDatinguserdbStagingFilterInput, $occup: String!, $count: Int, $nextToken: String) {
        allDatinguserdbStagingsByOccupState(searcharray: $searcharray, statevalue: $statevalue, filter: $filter, occup: $occup, count: $count, nextToken: $nextToken) {
          __typename
          DatinguserdbStagings {
            __typename
            age
            countyuser
            education
            email
            emailshareagree
            facebookbusername
            industrylevel2
            loyalty
            menteeagree
            mentoragree
            occup
            profilename
            s3file
            stateuser
            userdescription
            userid
            veteran
            unsubscribematchingme
            newWidth
            newHeight
            gender
          }
          InitialSearchArraySize
          FilteredSearchArraySize
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      occup
    };
    if (searcharray) {
      gqlAPIServiceArguments.searcharray = searcharray;
    }
    if (statevalue) {
      gqlAPIServiceArguments.statevalue = statevalue;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (count) {
      gqlAPIServiceArguments.count = count;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AllDatinguserdbStagingsByOccupStateQuery>(
      response.data.allDatinguserdbStagingsByOccupState
    );
  }
  async AllDatinguserdbStagingsByOccupState1(
    userid: string,
    occup: string,
    statevalue?: string,
    filter?: TableDatinguserdbStagingFilterInput,
    count?: number,
    nextToken?: string
  ): Promise<AllDatinguserdbStagingsByOccupState1Query> {
    const statement = `query AllDatinguserdbStagingsByOccupState1($userid: String!, $statevalue: String, $filter: TableDatinguserdbStagingFilterInput, $occup: String!, $count: Int, $nextToken: String) {
        allDatinguserdbStagingsByOccupState1(userid: $userid, statevalue: $statevalue, filter: $filter, occup: $occup, count: $count, nextToken: $nextToken) {
          __typename
          DatinguserdbStagings {
            __typename
            age
            countyuser
            education
            email
            emailshareagree
            facebookbusername
            industrylevel2
            loyalty
            menteeagree
            mentoragree
            occup
            profilename
            s3file
            stateuser
            userdescription
            userid
            veteran
            unsubscribematchingme
            newWidth
            newHeight
            gender
          }
          InitialSearchArraySize
          FilteredSearchArraySize
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid,
      occup
    };
    if (statevalue) {
      gqlAPIServiceArguments.statevalue = statevalue;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (count) {
      gqlAPIServiceArguments.count = count;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AllDatinguserdbStagingsByOccupState1Query>(
      response.data.allDatinguserdbStagingsByOccupState1
    );
  }
  async AllDatinguserdbStagingsByStateIndus(
    statevalue: string,
    searcharray?: Array<string>,
    indusvalue?: string,
    indusflag?: string,
    filter?: TableDatinguserdbStagingFilterInput,
    count?: number,
    nextToken?: string
  ): Promise<AllDatinguserdbStagingsByStateIndusQuery> {
    const statement = `query AllDatinguserdbStagingsByStateIndus($searcharray: [String!], $indusvalue: String, $indusflag: String, $filter: TableDatinguserdbStagingFilterInput, $statevalue: String!, $count: Int, $nextToken: String) {
        allDatinguserdbStagingsByStateIndus(searcharray: $searcharray, indusvalue: $indusvalue, indusflag: $indusflag, filter: $filter, statevalue: $statevalue, count: $count, nextToken: $nextToken) {
          __typename
          DatinguserdbStagings {
            __typename
            age
            countyuser
            education
            email
            emailshareagree
            facebookbusername
            industrylevel2
            loyalty
            menteeagree
            mentoragree
            occup
            profilename
            s3file
            stateuser
            userdescription
            userid
            veteran
            unsubscribematchingme
            newWidth
            newHeight
            gender
          }
          InitialSearchArraySize
          FilteredSearchArraySize
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      statevalue
    };
    if (searcharray) {
      gqlAPIServiceArguments.searcharray = searcharray;
    }
    if (indusvalue) {
      gqlAPIServiceArguments.indusvalue = indusvalue;
    }
    if (indusflag) {
      gqlAPIServiceArguments.indusflag = indusflag;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (count) {
      gqlAPIServiceArguments.count = count;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AllDatinguserdbStagingsByStateIndusQuery>(
      response.data.allDatinguserdbStagingsByStateIndus
    );
  }
  async AllDatinguserdbStagingsByStateIndus1(
    userid: string,
    statevalue: string,
    indusvalue?: string,
    indusflag?: string,
    filter?: TableDatinguserdbStagingFilterInput,
    count?: number,
    nextToken?: string
  ): Promise<AllDatinguserdbStagingsByStateIndus1Query> {
    const statement = `query AllDatinguserdbStagingsByStateIndus1($userid: String!, $indusvalue: String, $indusflag: String, $filter: TableDatinguserdbStagingFilterInput, $statevalue: String!, $count: Int, $nextToken: String) {
        allDatinguserdbStagingsByStateIndus1(userid: $userid, indusvalue: $indusvalue, indusflag: $indusflag, filter: $filter, statevalue: $statevalue, count: $count, nextToken: $nextToken) {
          __typename
          DatinguserdbStagings {
            __typename
            age
            countyuser
            education
            email
            emailshareagree
            facebookbusername
            industrylevel2
            loyalty
            menteeagree
            mentoragree
            occup
            profilename
            s3file
            stateuser
            userdescription
            userid
            veteran
            unsubscribematchingme
            newWidth
            newHeight
            gender
          }
          InitialSearchArraySize
          FilteredSearchArraySize
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid,
      statevalue
    };
    if (indusvalue) {
      gqlAPIServiceArguments.indusvalue = indusvalue;
    }
    if (indusflag) {
      gqlAPIServiceArguments.indusflag = indusflag;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (count) {
      gqlAPIServiceArguments.count = count;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AllDatinguserdbStagingsByStateIndus1Query>(
      response.data.allDatinguserdbStagingsByStateIndus1
    );
  }
  async AllDatinguserdbStagingsByGenderLoyalty(
    userid: string,
    gendervalue: string,
    filter?: TableDatinguserdbStagingFilterInput,
    count?: number,
    nextToken?: string
  ): Promise<AllDatinguserdbStagingsByGenderLoyaltyQuery> {
    const statement = `query AllDatinguserdbStagingsByGenderLoyalty($userid: String!, $gendervalue: String!, $filter: TableDatinguserdbStagingFilterInput, $count: Int, $nextToken: String) {
        allDatinguserdbStagingsByGenderLoyalty(userid: $userid, gendervalue: $gendervalue, filter: $filter, count: $count, nextToken: $nextToken) {
          __typename
          DatinguserdbStagings {
            __typename
            age
            countyuser
            education
            email
            emailshareagree
            facebookbusername
            industrylevel2
            loyalty
            menteeagree
            mentoragree
            occup
            profilename
            s3file
            stateuser
            userdescription
            userid
            veteran
            unsubscribematchingme
            newWidth
            newHeight
            gender
          }
          arraytabs
          arrayindexes
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid,
      gendervalue
    };
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (count) {
      gqlAPIServiceArguments.count = count;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AllDatinguserdbStagingsByGenderLoyaltyQuery>(
      response.data.allDatinguserdbStagingsByGenderLoyalty
    );
  }
  async AllDatinguserdbStagingsByStateLoyalty(
    userid: string,
    statevalue: string,
    filter?: TableDatinguserdbStagingFilterInput,
    count?: number,
    nextToken?: string
  ): Promise<AllDatinguserdbStagingsByStateLoyaltyQuery> {
    const statement = `query AllDatinguserdbStagingsByStateLoyalty($userid: String!, $statevalue: String!, $filter: TableDatinguserdbStagingFilterInput, $count: Int, $nextToken: String) {
        allDatinguserdbStagingsByStateLoyalty(userid: $userid, statevalue: $statevalue, filter: $filter, count: $count, nextToken: $nextToken) {
          __typename
          DatinguserdbStagings {
            __typename
            age
            countyuser
            education
            email
            emailshareagree
            facebookbusername
            industrylevel2
            loyalty
            menteeagree
            mentoragree
            occup
            profilename
            s3file
            stateuser
            userdescription
            userid
            veteran
            unsubscribematchingme
            newWidth
            newHeight
            gender
          }
          arraytabs
          arrayindexes
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid,
      statevalue
    };
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (count) {
      gqlAPIServiceArguments.count = count;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <AllDatinguserdbStagingsByStateLoyaltyQuery>(
      response.data.allDatinguserdbStagingsByStateLoyalty
    );
  }
  async GetLoyaltytab3B6Cindex(
    userid: string,
    itemid?: string
  ): Promise<GetLoyaltytab3B6CindexQuery> {
    const statement = `query GetLoyaltytab3B6Cindex($userid: String!, $itemid: String) {
        getLoyaltytab3B6Cindex(userid: $userid, itemid: $itemid) {
          __typename
          tab13B6Cname
          indextab13B6C
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (itemid) {
      gqlAPIServiceArguments.itemid = itemid;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetLoyaltytab3B6CindexQuery>response.data.getLoyaltytab3B6Cindex;
  }
  async GetDatinguserdbStaging(
    userid?: string
  ): Promise<GetDatinguserdbStagingQuery> {
    const statement = `query GetDatinguserdbStaging($userid: String) {
        getDatinguserdbStaging(userid: $userid) {
          __typename
          age
          countyuser
          education
          email
          emailshareagree
          facebookbusername
          industrylevel2
          loyalty
          menteeagree
          mentoragree
          occup
          profilename
          s3file
          stateuser
          userdescription
          userid
          veteran
          unsubscribematchingme
          newWidth
          newHeight
          gender
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userid) {
      gqlAPIServiceArguments.userid = userid;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDatinguserdbStagingQuery>response.data.getDatinguserdbStaging;
  }
  async GetDatinguserdbStagingsfacebook(
    userid: string,
    facebookvalue: string,
    filter?: TableDatinguserdbStagingFilterInput
  ): Promise<GetDatinguserdbStagingsfacebookQuery> {
    const statement = `query GetDatinguserdbStagingsfacebook($userid: String!, $facebookvalue: String!, $filter: TableDatinguserdbStagingFilterInput) {
        getDatinguserdbStagingsfacebook(userid: $userid, facebookvalue: $facebookvalue, filter: $filter) {
          __typename
          DatinguserdbStagings {
            __typename
            age
            countyuser
            education
            email
            emailshareagree
            facebookbusername
            industrylevel2
            loyalty
            menteeagree
            mentoragree
            occup
            profilename
            s3file
            stateuser
            userdescription
            userid
            veteran
            unsubscribematchingme
            newWidth
            newHeight
            gender
          }
          arraytabs
          arrayindexes
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid,
      facebookvalue
    };
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDatinguserdbStagingsfacebookQuery>(
      response.data.getDatinguserdbStagingsfacebook
    );
  }
  async GetBatchDatinguserdbStaging(
    ids?: Array<string>
  ): Promise<GetBatchDatinguserdbStagingQuery> {
    const statement = `query GetBatchDatinguserdbStaging($ids: [String!]) {
        getBatchDatinguserdbStaging(ids: $ids) {
          __typename
          DatinguserdbStagings {
            __typename
            age
            countyuser
            education
            email
            emailshareagree
            facebookbusername
            industrylevel2
            loyalty
            menteeagree
            mentoragree
            occup
            profilename
            s3file
            stateuser
            userdescription
            userid
            veteran
            unsubscribematchingme
            newWidth
            newHeight
            gender
          }
          InitialSearchArraySize
          FilteredSearchArraySize
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (ids) {
      gqlAPIServiceArguments.ids = ids;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBatchDatinguserdbStagingQuery>(
      response.data.getBatchDatinguserdbStaging
    );
  }
  async ListDatinguserdbStagings(
    filter?: TableDatinguserdbStagingFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDatinguserdbStagingsQuery> {
    const statement = `query ListDatinguserdbStagings($filter: TableDatinguserdbStagingFilterInput, $limit: Int, $nextToken: String) {
        listDatinguserdbStagings(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            age
            countyuser
            education
            email
            emailshareagree
            facebookbusername
            industrylevel2
            loyalty
            menteeagree
            mentoragree
            occup
            profilename
            s3file
            stateuser
            userdescription
            userid
            veteran
            unsubscribematchingme
            newWidth
            newHeight
            gender
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDatinguserdbStagingsQuery>(
      response.data.listDatinguserdbStagings
    );
  }
  async ListDatinguserdbStagingsOneBigArray1A(
    userid: string,
    filter?: TableDatinguserdbStagingFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDatinguserdbStagingsOneBigArray1AQuery> {
    const statement = `query ListDatinguserdbStagingsOneBigArray1A($userid: String!, $filter: TableDatinguserdbStagingFilterInput, $limit: Int, $nextToken: String) {
        listDatinguserdbStagingsOneBigArray1A(userid: $userid, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            userid
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDatinguserdbStagingsOneBigArray1AQuery>(
      response.data.listDatinguserdbStagingsOneBigArray1A
    );
  }
  async ListDatinguserdbStagingsOneBigArray(
    userid: string,
    filter?: TableDatinguserdbStagingFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDatinguserdbStagingsOneBigArrayQuery> {
    const statement = `query ListDatinguserdbStagingsOneBigArray($userid: String!, $filter: TableDatinguserdbStagingFilterInput, $limit: Int, $nextToken: String) {
        listDatinguserdbStagingsOneBigArray(userid: $userid, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            userid
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDatinguserdbStagingsOneBigArrayQuery>(
      response.data.listDatinguserdbStagingsOneBigArray
    );
  }
  async ListDatinguserdbStagingsOneBigArray1C(
    userid: string,
    filter?: TableDatinguserdbStagingFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDatinguserdbStagingsOneBigArray1CQuery> {
    const statement = `query ListDatinguserdbStagingsOneBigArray1C($userid: String!, $filter: TableDatinguserdbStagingFilterInput, $limit: Int, $nextToken: String) {
        listDatinguserdbStagingsOneBigArray1C(userid: $userid, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            userid
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDatinguserdbStagingsOneBigArray1CQuery>(
      response.data.listDatinguserdbStagingsOneBigArray1C
    );
  }
  async GetDatingitemtrackingStaging(
    userid: string
  ): Promise<GetDatingitemtrackingStagingQuery> {
    const statement = `query GetDatingitemtrackingStaging($userid: String!) {
        getDatingitemtrackingStaging(userid: $userid) {
          __typename
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDatingitemtrackingStagingQuery>(
      response.data.getDatingitemtrackingStaging
    );
  }
  async ListDatingitemtrackingStagings(
    filter?: TableDatingitemtrackingStagingFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDatingitemtrackingStagingsQuery> {
    const statement = `query ListDatingitemtrackingStagings($filter: TableDatingitemtrackingStagingFilterInput, $limit: Int, $nextToken: String) {
        listDatingitemtrackingStagings(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            userid
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDatingitemtrackingStagingsQuery>(
      response.data.listDatingitemtrackingStagings
    );
  }
  async GetHouseCands(CandName?: string): Promise<GetHouseCandsQuery> {
    const statement = `query GetHouseCands($CandName: String) {
        getHouseCands(CandName: $CandName) {
          __typename
          CandName
          District
          Party
          State
          Website
          s3file
          PictureAttribution
          Coms
          Motto
          OverallYea
          OverallNay
          CAgricultureYea
          CAgricultureNay
          CFinancialYea
          CFinancialNay
          CEducationYea
          CEducationNay
          CAppropriationsYea
          CAppropriationsNay
          CAdminstrationYea
          CAdminstrationNay
          CForeignYea
          CForeignNay
          CTransportationYea
          CTransportationNay
          CVeteransYea
          CVeteransNay
          CClimateYea
          CClimateNay
          CEnergyYea
          CEnergyNay
          CEthicsYea
          CEthicsNay
          CWaysYea
          CWaysNay
          CScienceYea
          CScienceNay
          CArmedYea
          CArmedNay
          CJudiciaryYea
          CJudiciaryNay
          CHomelandYea
          CHomelandNay
          CBudgetYea
          CBudgetNay
          CNaturalYea
          CNaturalNay
          COversightYea
          COversightNay
          CSmallYea
          CSmallNay
          CTaxationYea
          CTaxationNay
          CIntelligenceYea
          CIntelligenceNay
          CAgricultureFuture
          CFinancialFuture
          CEducationFuture
          CAppropriationsFuture
          CAdminstrationFuture
          CForeignFuture
          CTransportationFuture
          CVeteransFuture
          CClimateFuture
          CEnergyFuture
          CEthicsFuture
          CWaysFuture
          CScienceFuture
          CArmedFuture
          CJudiciaryFuture
          CHomelandFuture
          CBudgetFuture
          CNaturalFuture
          COversightFuture
          CSmallFuture
          CTaxationFuture
          CIntelligenceFuture
          IBorderYea
          IBorderNay
          IImmigrationYea
          IImmigrationNay
          IAbortionYes
          IAbortionNay
          ITransgenderYea
          ITransgenderNay
          ISafetyYea
          ISafetyNay
          IEducationYea
          IEducationNay
          IVeteransYea
          IVeteransNay
          IClimateYea
          IClimateNay
          IMentalYea
          IMentalNay
          IGunsYea
          IGunsNay
          ICostYea
          ICostNay
          IFarmersYea
          IFarmersNay
          IEconomyYea
          IEconomyNay
          IHealthcareYea
          IHealthcareNay
          IInfrastructureYea
          IInfrastructureNay
          IEnergyYea
          IEnergyNay
          INaturalYea
          INaturalNay
          ICannabisYea
          ICannabisNay
          ITaxesYea
          ITaxesNay
          ISeniorsYea
          ISeniorsNay
          IManufacturingYea
          IManufacturingNay
          IHousingYea
          IHousingNay
          IDefenceYea
          IDefenceNay
          IFinanceYea
          IFinanceNay
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (CandName) {
      gqlAPIServiceArguments.CandName = CandName;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetHouseCandsQuery>response.data.getHouseCands;
  }
  async GetSenateCands(CandName?: string): Promise<GetSenateCandsQuery> {
    const statement = `query GetSenateCands($CandName: String) {
        getSenateCands(CandName: $CandName) {
          __typename
          CandName
          Party
          State
          Website
          ImageKey
          PictureAttribution
          Coms
          Issues
          Motto
          OverallYea
          OverallNay
          CAgricultureYea
          CAgricultureNay
          AgricultureFuture
          CAppropriationsYea
          CAppropriationsNay
          AppropriationsFuture
          CArmedYea
          CArmedNay
          ArmedFuture
          CBankingYea
          CBankingNay
          BankingFuture
          CBudgetYea
          CBudgetNay
          BudgetFuture
          CCommerceYea
          CCommerceNay
          CommerceFuture
          CEnergyYea
          CEnergyNay
          EnergyFuture
          CEnvironmentYea
          CEnvironmentNay
          EnvironmentFuture
          CFinanceYea
          CFinanceNay
          FinanceFuture
          CForeignYea
          CForeignNay
          ForeignFuture
          CHealthYea
          CHealthNay
          HealthFuture
          CHomelandYea
          CHomelandNay
          HomelandFuture
          CIndianYea
          CIndianNay
          IndianFuture
          CPrintingYea
          CPrintingNay
          PrintingFuture
          CTaxationYea
          CTaxationNay
          TaxationFuture
          CLibraryYea
          CLibraryNay
          LibraryFuture
          CEconomicYea
          CEconomicNay
          EconomicFuture
          CJudiciaryYea
          CJudiciaryNay
          JudiciaryFuture
          CRulesYea
          CRulesNay
          RulesFuture
          CEthicsYea
          CEthicsNay
          EthicsFuture
          CIntelligenceYea
          CIntelligenceNay
          IntelligenceFuture
          CBusinessYea
          CBusinessNay
          BusinessFuture
          CAgingYea
          CAgingNay
          AgingFuture
          CVeteranYea
          CVeteranNay
          VeteranFuture
          IBorderYea
          IBorderNay
          IImmigrationYea
          IImmigrationNay
          IAbortionYes
          IAbortionNay
          ITransgenderYea
          ITransgenderNay
          ISafetyYea
          ISafetyNay
          IEducationYea
          IEducationNay
          IVeteransYea
          IVeteransNay
          IClimateYea
          IClimateNay
          IMentalYea
          IMentalNay
          IGunsYea
          IGunsNay
          ICostYea
          ICostNay
          IFarmersYea
          IFarmersNay
          IEconomyYea
          IEconomyNay
          IHealthcareYea
          IHealthcareNay
          IInfrastructureYea
          IInfrastructureNay
          IEnergyYea
          IEnergyNay
          INaturalYea
          INaturalNay
          ICannabisYea
          ICannabisNay
          ITaxesYea
          ITaxesNay
          ISeniorsYea
          ISeniorsNay
          IManufacturingYea
          IManufacturingNay
          IHousingYea
          IHousingNay
          IDefenceYea
          IDefenceNay
          IFinanceYea
          IFinanceNay
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (CandName) {
      gqlAPIServiceArguments.CandName = CandName;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSenateCandsQuery>response.data.getSenateCands;
  }
  async GetStateCands(CandName?: string): Promise<GetStateCandsQuery> {
    const statement = `query GetStateCands($CandName: String) {
        getStateCands(CandName: $CandName) {
          __typename
          CandName
          Office
          Party
          State
          District
          Website
          s3file
          PictureAttribution
          Coms
          Motto
          OverallYea
          OverallNay
          IBorderYea
          IBorderNay
          IImmigrationYea
          IImmigrationNay
          IAbortionYes
          IAbortionNay
          ITransgenderYea
          ITransgenderNay
          IVotingYea
          IVotingNay
          IElectionYea
          IElectionNay
          ISafetyYea
          ISafetyNay
          IEducationYea
          IEducationNay
          IVeteransYea
          IVeteransNay
          IClimateYea
          IClimateNay
          IHomelessnessYea
          IHomelessnessNay
          IMentalYea
          IMentalNay
          IGunsYea
          IGunsNay
          ICostYea
          ICostNay
          IFarmersYea
          IFarmersNay
          IPermanentYea
          IPermanentNay
          IEconomyYea
          IEconomyNay
          IHealthcareYea
          IHealthcareNay
          IInfrastructureYea
          IInfrastructureNay
          IEnergyYea
          IEnergyNay
          ICannabisYea
          ICannabisNay
          ITaxesYea
          ITaxesNay
          ILandsYea
          ILandsNay
          ISeniorsYea
          ISeniorsNay
          IManufacturingYea
          IManufacturingNay
          IHousingYea
          IHousingNay
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (CandName) {
      gqlAPIServiceArguments.CandName = CandName;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetStateCandsQuery>response.data.getStateCands;
  }
  async GetDatinginteractionStaging(
    userid: string
  ): Promise<GetDatinginteractionStagingQuery> {
    const statement = `query GetDatinginteractionStaging($userid: String!) {
        getDatinginteractionStaging(userid: $userid) {
          __typename
          eventtype
          interestcategory
          itemid
          timestamp
          userid
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userid
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDatinginteractionStagingQuery>(
      response.data.getDatinginteractionStaging
    );
  }
  async ListDatinginteractionStagings(
    filter?: TableDatinginteractionStagingFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDatinginteractionStagingsQuery> {
    const statement = `query ListDatinginteractionStagings($filter: TableDatinginteractionStagingFilterInput, $limit: Int, $nextToken: String) {
        listDatinginteractionStagings(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            eventtype
            interestcategory
            itemid
            timestamp
            userid
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDatinginteractionStagingsQuery>(
      response.data.listDatinginteractionStagings
    );
  }
  async ListVotedIdsflagshouse(
    userid?: string
  ): Promise<ListVotedIdsflagshouseQuery> {
    const statement = `query ListVotedIdsflagshouse($userid: String) {
        listVotedIdsflagshouse(userid: $userid) {
          __typename
          VotedIdsFlagArray
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userid) {
      gqlAPIServiceArguments.userid = userid;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListVotedIdsflagshouseQuery>response.data.listVotedIdsflagshouse;
  }
  async ListVotedIdsIssuesflagshouse(
    userid?: string,
    isscand?: string
  ): Promise<ListVotedIdsIssuesflagshouseQuery> {
    const statement = `query ListVotedIdsIssuesflagshouse($userid: String, $isscand: String) {
        listVotedIdsIssuesflagshouse(userid: $userid, isscand: $isscand) {
          __typename
          VotedIdsFlagArray
          VotedIdsFlagArrayCand
          futurecomcandsvotedon
          FutureComPreferArray
          FutureComCandViewed
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userid) {
      gqlAPIServiceArguments.userid = userid;
    }
    if (isscand) {
      gqlAPIServiceArguments.isscand = isscand;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListVotedIdsIssuesflagshouseQuery>(
      response.data.listVotedIdsIssuesflagshouse
    );
  }
  async ListVotedIdsIssuesflagssenate(
    userid?: string,
    isscand?: string
  ): Promise<ListVotedIdsIssuesflagssenateQuery> {
    const statement = `query ListVotedIdsIssuesflagssenate($userid: String, $isscand: String) {
        listVotedIdsIssuesflagssenate(userid: $userid, isscand: $isscand) {
          __typename
          VotedIdsFlagArray
          VotedIdsFlagArrayCand
          futurecomcandsvotedon
          FutureComPreferArray
          FutureComCandViewed
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userid) {
      gqlAPIServiceArguments.userid = userid;
    }
    if (isscand) {
      gqlAPIServiceArguments.isscand = isscand;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListVotedIdsIssuesflagssenateQuery>(
      response.data.listVotedIdsIssuesflagssenate
    );
  }
  async ListVotedIdsIssuesflagsgovern(
    userid?: string,
    isscand?: string
  ): Promise<ListVotedIdsIssuesflagsgovernQuery> {
    const statement = `query ListVotedIdsIssuesflagsgovern($userid: String, $isscand: String) {
        listVotedIdsIssuesflagsgovern(userid: $userid, isscand: $isscand) {
          __typename
          VotedIdsFlagArray
          VotedIdsFlagArrayCand
          futurecomcandsvotedon
          FutureComPreferArray
          FutureComCandViewed
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (userid) {
      gqlAPIServiceArguments.userid = userid;
    }
    if (isscand) {
      gqlAPIServiceArguments.isscand = isscand;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListVotedIdsIssuesflagsgovernQuery>(
      response.data.listVotedIdsIssuesflagsgovern
    );
  }
  async SearchHouseCandInstate(
    filter?: TableSearchFilterCands
  ): Promise<SearchHouseCandInstateQuery> {
    const statement = `query SearchHouseCandInstate($filter: TableSearchFilterCands) {
        searchHouseCandInstate(filter: $filter) {
          __typename
          items {
            __typename
            CandName
            District
            Party
            StateCand
            Website
            s3file
            PictureAttribution
            Coms
            Motto
            OverallYea
            OverallNay
            FirstComPrefer
            SecondComPrefer
            ThirdComPrefer
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchHouseCandInstateQuery>response.data.searchHouseCandInstate;
  }
  async SearchsenateCandInstate(
    filter?: TableSearchFilterCands
  ): Promise<SearchsenateCandInstateQuery> {
    const statement = `query SearchsenateCandInstate($filter: TableSearchFilterCands) {
        searchsenateCandInstate(filter: $filter) {
          __typename
          items {
            __typename
            CandName
            District
            Party
            StateCand
            Website
            s3file
            PictureAttribution
            Coms
            Motto
            OverallYea
            OverallNay
            FirstComPrefer
            SecondComPrefer
            ThirdComPrefer
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SearchsenateCandInstateQuery>response.data.searchsenateCandInstate;
  }
  async GetTodo(id: string): Promise<GetTodoQuery> {
    const statement = `query GetTodo($id: ID!) {
        getTodo(id: $id) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTodoQuery>response.data.getTodo;
  }
  async ListTodos(
    filter?: ModelTodoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTodosQuery> {
    const statement = `query ListTodos($filter: ModelTodoFilterInput, $limit: Int, $nextToken: String) {
        listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTodosQuery>response.data.listTodos;
  }
  OnCreateTodoListener(
    filter?: ModelSubscriptionTodoFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTodo">>
  > {
    const statement = `subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
        onCreateTodo(filter: $filter) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTodo">>
    >;
  }

  OnUpdateTodoListener(
    filter?: ModelSubscriptionTodoFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTodo">>
  > {
    const statement = `subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
        onUpdateTodo(filter: $filter) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTodo">>
    >;
  }

  OnDeleteTodoListener(
    filter?: ModelSubscriptionTodoFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTodo">>
  > {
    const statement = `subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
        onDeleteTodo(filter: $filter) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTodo">>
    >;
  }
}
