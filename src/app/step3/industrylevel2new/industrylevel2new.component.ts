import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import  {Auth} from "aws-amplify";
import { API } from 'aws-amplify';

import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

export interface User {
  name: string;
}

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().includes(filterValue));
};

@Component({
  selector: 'app-industrylevel2new',
  templateUrl: './industrylevel2new.component.html',
  styleUrls: ['./industrylevel2new.component.css']
})
export class Industrylevel2newComponent implements OnInit {
  stateForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });

  stateGroupOptions: Observable<StateGroup[]>;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.indus1get();
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(value)),
    );
  }

  async indus1get() {
    const user = await Auth.currentAuthenticatedUser();
    let paramspK = {headers: {}, response: true, queryStringParameters: {useridq:user.attributes.sub} };
    API.get("datingapitest4", "/userdbapiindustry/m", paramspK).then(responseK => {console.log("successK");console.log(responseK.data[0].industrylevel1)
      this.indus1flag=responseK.data[0].industrylevel1;}).catch(error => {console.log(error.responseK);});
  }

  industrylevel2= {} as StateGroup; //need to declare as a object that matches the export interface.  Also, need to use (ngModelChange) instead of (change) in the html.
  async industry2store(event:any) {
    console.log(this.industrylevel2)
    const user = await Auth.currentAuthenticatedUser();
    console.log(this.industrylevel2.names);
    const paramspJ = {body: {userid: user.attributes.sub, industrylevel2: this.industrylevel2.names}};
    API.post("datingapitest4", "/userdbapiindustry", paramspJ).then(responseJ => {{console.log("successJ");}}).catch(error => {console.log(error.responseJ);});
  }

  indus1flag="";
  private _filterGroup(value: string): StateGroup[] {
    if (this.indus1flag=='Agriculture, Forestry, Fishing, and Hunting') {
      this.stateGroups = [ {
        letter: 'Agriculture, Forestry, Fishing, and Hunting',
        names: ["Crop production",
          "Animal production and aquaculture",
          "Forestry except logging",
          "Logging",
          "Fishing", "hunting and trapping",
          "Support activities for agriculture and forestry"],
      }]
    }
    else if (this.indus1flag=='Mining, Quarrying, and Oil and Gas Extraction') {
      this.stateGroups = [{
        letter: 'Mining, Quarrying, and Oil and Gas Extraction',
        names: ["Oil and gas extraction",
          "Coal mining",
          "Metal ore mining",
          "Nonmetallic mineral mining and quarrying",
          "Not specified type of mining",
          "Support activities for mining"
        ],
      }
      ]} else if (this.indus1flag=='Manufacturing') {
      this.stateGroups = [{
        letter: 'Manufacturing',
        names: ["Animal food, grain and oilseed milling",
          "Sugar and confectionery products",
          "Fruit and vegetable preserving and specialty food manufacturing",
          "Dairy product manufacturing",
          "Animal slaughtering and processing",
          "Retail bakeries",
          "Bakeries and tortilla manufacturing except retail bakeries",
          "Seafood and other miscellaneous foods",
          "Not specified food industries",
          "Beverage manufacturing",
          "Tobacco manufacturing",
          "Fiber yarn and thread mills",
          "Fabric mills except knitting mills",
          "Textile and fabric finishing and fabric coating mills",
          "Carpet and rug mills",
          "Textile product mills except carpet and rug",
          "Knitting fabric mills and apparel knitting mills",
          "Cut and sew and apparel accessories and other apparel manufacturing",
          "Footwear manufacturing",
          "Leather and hide tanning and finishing, and other leather and allied product manufacturing",
          "Pulp, paper, and paperboard mills",
          "Paperboard container manufacturing",
          "Miscellaneous paper and pulp products",
          "Printing and related support activities",
          "Petroleum refining",
          "Miscellaneous petroleum and coal products",
          "Resin, synthetic rubber, and fibers and filaments manufacturing",
          "Agricultural chemical manufacturing",
          "Pharmaceutical and medicine manufacturing",
          "Paint, coating, and adhesive manufacturing",
          "Soap, cleaning compound, and cosmetics manufacturing",
          "Industrial and miscellaneous chemicals",
          "Plastics product manufacturing",
          "Tire manufacturing",
          "Rubber products, except tires, manufacturing",
          "Pottery, ceramics, and plumbing fixture manufacturing",
          "Clay building material and refractories manufacturing",
          "Glass and glass product manufacturing",
          "Cement, concrete, lime, and gypsum product manufacturing",
          "Miscellaneous nonmetallic mineral product manufacturing",
          "Iron and steel mills and steel product manufacturing ",
          "Aluminum production and processing",
          "Nonferrous metal (except aluminum) production and processing",
          "Foundries",
          "Metal forgings and stampings",
          "Cutlery and hand tool manufacturing",
          "Structural metals and boiler tank and shipping container manufacturing",
          "Machine shops; turned product; screw, nut, and bolt manufacturing",
          "Coating, engraving, heat treating, and allied activities",
          "Ordnance",
          "Miscellaneous fabricated metal products manufacturing",
          "Not specified metal industries",
          "Agricultural implement manufacturing",
          "Construction and mining and oil and gas field machinery manufacturing",
          "Commercial and service industry machinery manufacturing",
          "Metalworking machinery manufacturing",
          "Engine, turbine, and power transmission equipment manufacturing",
          "Machinery manufacturing",
          "Computer and peripheral equipment manufacturing",
          "Communications, audio, and video equipment manufacturing",
          "Navigational, measuring, electromedical, and control instruments manufacturing",
          "Electronic component and product manufacturing",
          "Household appliance manufacturing ",
          "Electric lighting and electrical equipment manufacturing and other electrical component manufacturing",
          "Motor vehicles and motor vehicle equipment manufacturing",
          "Aircraft and parts manufacturing",
          "Aerospace products and parts manufacturing",
          "Railroad rolling stock manufacturing",
          "Ship and boat building",
          "Other transportation equipment manufacturing",
          "Sawmills and wood preservation",
          "Veneer, plywood, and engineered wood products",
          "Prefabricated wood buildings and mobile homes manufacturing",
          "Miscellaneous wood products",
          "Furniture and related product manufacturing",
          "Medical equipment and supplies manufacturing",
          "Sporting and athletic goods and doll toy and game manufacturing",
          "Miscellaneous manufacturing"
        ],
      }
      ]}  else if (this.indus1flag=='Wholesale Trade') {
      this.stateGroups = [{
        letter: 'Wholesale Trade',
        names: ["Motor vehicle and motor vehicle parts and supplies merchant wholesalers",
          "Furniture and home furnishing merchant wholesalers",
          "Lumber and other construction materials merchant wholesalers",
          "Professional and commercial equipment and supplies merchant wholesalers",
          "Metals and minerals, except petroleum, merchant wholesalers",
          "Household appliances and electrical and electronic goods merchant wholesalers",
          "Hardware, and plumbing and heating equipment, and supplies merchant wholesalers",
          "Machinery, equipment, and supplies merchant wholesalers",
          "Recyclable material merchant wholesalers",
          "Miscellaneous durable goods merchant wholesalers",
          "Paper and paper products merchant wholesalers",
          "Drugs, sundries, and chemical and allied products merchant wholesalers",
          "Apparel, piece goods and notions merchant wholesalers",
          "Grocery and related product merchant wholesalers",
          "Farm product raw material merchant wholesalers",
          "Petroleum and petroleum products merchant wholesalers",
          "Alcoholic beverages merchant wholesalers",
          "Farm supplies merchant wholesalers",
          "Miscellaneous nondurable goods merchant wholesalers",
          "Wholesale electronic markets and agents and brokers"
        ],
      }
      ]} else if (this.indus1flag=='Retail Trade') {
      this.stateGroups = [{
        letter: 'Retail Trade',
        names: ["Automobile dealers",
          "Other motor vehicle dealers",
          "Automotive parts, accessories and tire stores",
          "Furniture and home furnishings stores",
          "Household appliance stores",
          "Electronics Stores",
          "Building material and supplies dealers",
          "Hardware stores",
          "Lawn and garden equipment and supplies stores",
          "Supermarkets and other grocery (except convenience) stores",
          "Convenience Stores",
          "Specialty food stores",
          "Beer, wine, and liquor stores",
          "Pharmacies and drug stores",
          "Health and personal care except drug stores",
          "Gasoline stations",
          "Clothing stores",
          "Shoe stores",
          "Jewelry, luggage, and leather goods stores",
          "Sporting goods and hobby and toy stores",
          "Sewing needlework and piece goods stores",
          "Musical instrument and supplies stores",
          "Book stores and news dealers",
          "Department stores",
          "General merchandise stores including warehouse clubs and supercenters",
          "Florists",
          "Office supplies and stationery stores",
          "Used merchandise stores",
          "Gift, novelty, and souvenir shops",
          "Miscellaneous retail stores",
          "Electronic shopping and mail-order houses",
          "Vending machine operators",
          "Fuel dealers",
          "Other direct selling establishments"
        ],
      }
      ]}  else if (this.indus1flag=='Transportation and Warehousing') {
      this.stateGroups = [{
        letter: 'Transportation and Warehousing',
        names: ["Air transportation",
          "Rail transportation",
          "Water transportation",
          "Truck transportation",
          "Bus service and urban transit",
          "Taxi and limousine service",
          "Pipeline transportation",
          "Scenic and sightseeing transportation",
          "Services incidental to transportation",
          "Postal Service",
          "Couriers and messengers",
          "Warehousing and storage"
        ],
      }
      ]} else if (this.indus1flag=='Utilities') {
      this.stateGroups = [{
        letter: 'Utilities',
        names: ["Electric power generation transmission and distribution",
          "Natural gas distribution",
          "Electric and gas and other combinations",
          "Water, steam, air-conditioning and irrigation systems",
          "Sewage treatment facilities"
        ],
      }
      ]} else if (this.indus1flag=='Software & Media (newspapers, motion pictures, data processing, internet publishing, telecommunications, etc.') {
      this.stateGroups = [{
        letter: 'Software & Media (newspapers, motion pictures, data processing, internet publishing, telecommunications, etc.',
        names: ["Newspaper publishers",
          "Periodical, book, and directory publishers",
          "Software publishers",
          "Motion pictures and video industries",
          "Sound recording industries",
          "Broadcasting (except internet)",
          "Internet publishing and broadcasting and web search portals",
          "Wired telecommunications carriers",
          "Telecommunications except wired telecommunications carriers",
          "Data processing, hosting and related services",
          "Libraries and archives",
          "Other information services except libraries and archives and internet publishing and broadcasting and web search portals"

        ],
      }
      ]} else if (this.indus1flag=='Finance and Insurance') {
      this.stateGroups = [{
        letter: 'Finance and Insurance',
        names: ["Banking and related activities",
          "Savings institutions including credit unions",
          "Nondepository credit and related activities",
          "Securities, commodities, funds, trusts, and other financial investments",
          "Insurance carriers",
          "Agencies, brokerages and other insurance related activities"
        ],
      }
      ]} else if (this.indus1flag=='Real Estate and Rental and Leasing') {
      this.stateGroups = [{
        letter: 'Software & Media (newspapers, motion pictures, data processing, internet publishing, telecommunications, etc.',
        names: ["Newspaper publishers",
          "Periodical, book, and directory publishers",
          "Software publishers",
          "Motion pictures and video industries",
          "Sound recording industries",
          "Broadcasting (except internet)",
          "Internet publishing and broadcasting and web search portals",
          "Wired telecommunications carriers",
          "Telecommunications except wired telecommunications carriers",
          "Data processing, hosting and related services",
          "Libraries and archives",
          "Other information services except libraries and archives and internet publishing and broadcasting and web search portals"
        ],
      }
      ]} else if (this.indus1flag=='Professional, Scientific, and Technical Services') {
      this.stateGroups = [{
        letter: 'Professional, Scientific, and Technical Services',
        names: ["Legal services",
          "Accounting, tax preparation, bookkeeping, and payroll services",
          "Architectural, engineering, and related services",
          "Specialized design services",
          "Computer systems design and related services",
          "Management, scientific, and technical consulting services",
          "Scientific research and development services",
          "Advertising, public relations and related services",
          "Veterinary services",
          "Other professional, scientific and technical services"
        ],
      }
      ]} else if (this.indus1flag=='Administrative and support and waste management services') {
      this.stateGroups = [{
        letter: 'Administrative and support and waste management services',
        names: ["Employment services",
          "Business support services",
          "Travel arrangements and reservation services",
          "Investigation and security services",
          "Services to buildings and dwellings (except cleaning during construction and immediately after construction)",
          "Landscaping services",
          "Other administrative and other support services",
          "Waste management and remediation services"
        ],
      }
      ]} else if (this.indus1flag=='Educational Services') {
      this.stateGroups = [{
        letter: 'Educational Services',
        names: ["Elementary and secondary schools",
          "Colleges, universities, and professional schools, including junior colleges",
          "Business, technical and trade schools and training",
          "Other schools and instruction, and educational support services"
        ],
      }
      ]} else if (this.indus1flag=='Health Care and Social Assistance') {
      this.stateGroups = [{
        letter: 'Health Care and Social Assistance',
        names: ["Offices of physicians",
          "Offices of dentists",
          "Offices of chiropractors",
          "Offices of optometrists",
          "Offices of other health practitioners",
          "Outpatient care centers",
          "Home health care services",
          "Other health care services",
          "General medical and surgical hospitals and specialty (except psychiatric and substance abuse) hospitals",
          "Psychiatric and substance abuse hospitals",
          "Nursing care facilities (skilled nursing facilities)",
          "Residential care facilities except skilled nursing facilities",
          "Individual and family services",
          "Community food and housing and emergency services",
          "Vocational rehabilitation services",
          "Child day care services"
        ],
      }
      ]} else if (this.indus1flag=='Arts, Entertainment, and Recreation') {
      this.stateGroups = [{
        letter: 'Arts, Entertainment, and Recreation',
        names: ["Performing arts companies",
          "Spectator sports",
          "Promoters of performing arts, sports, and similar events, agents and managers for artists, athletes, entertainers and other public figures",
          "Independent artists, writers and performers",
          "Museums, art galleries, historical sites and similar institutions",
          "Bowling centers",
          "Other amusement, gambling and recreation industries"
        ],
      }
      ]} else if (this.indus1flag=='Accommodation and Food Services') {
      this.stateGroups = [{
        letter: 'Accommodation and Food Services',
        names: ["Traveler accommodation",
          "Recreational vehicle parks and camps and rooming and boarding houses, dormitories, and workers' camps",
          "Restaurants and other food services",
          "Drinking places, alcoholic beverages"
        ],
      }
      ]} else if (this.indus1flag=='Labor Unions, Other Services, Except Public Administration') {
      this.stateGroups = [{
        letter: 'Labor Unions, Other Services, Except Public Administration',
        names: ["Automotive repair and maintenance",
          "Car washes",
          "Electronic and precision equipment repair and maintenance",
          "Commercial and industrial machinery and equipment repair and maintenance",
          "Personal and household goods repair and maintenance",
          "Barber shops",
          "Beauty salons",
          "Nail salons and other personal care services",
          "Drycleaning and laundry services",
          "Funeral homes, and cemeteries and crematories",
          "Other personal services",
          "Religious organizations",
          "Civic, social, advocacy organizations, and grantmaking and giving services",
          "Labor unions",
          "Business, professional, political, and similar organizations",
          "Private households"
        ],
      }
      ]} else if (this.indus1flag=='Public Administration') {
      this.stateGroups = [{
        letter: 'Public Administration',
        names: ["Executive offices and legislative bodies",
          "Public finance activities",
          "Other general government and support",
          "Justice, public order, and safety activities",
          "Administration of human resource programs",
          "Administration of environmental quality and housing programs",
          "Administration of economic programs and space research",
          "National security and international affairs"
        ],
      }
      ]} else if (this.indus1flag=='Military') {
      this.stateGroups = [{
        letter: 'Military',
        names: ["U. S. Army",
          "U. S. Air Force",
          "U. S. Navy",
          "U. S. Marines",
          "U. S. Coast Guard",
          "Armed Forces, Branch not specified",
          "Military Reserves or National Guard"
        ],
      }
      ]}

    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }

  stateGroups: StateGroup[] = [
    {
      letter: 'Agriculture, Forestry, Fishing, and Hunting',
      names: ["Crop production",
        "Animal production and aquaculture",
        "Forestry except logging",
        "Logging",
        "Fishing, hunting and trapping",
        "Support activities for agriculture and forestry"],
    },
    {
      letter: 'Mining, Quarrying, and Oil and Gas Extraction',
      names: ["Oil and gas extraction",
        "Coal mining",
        "Metal ore mining",
        "Nonmetallic mineral mining and quarrying",
        "Not specified type of mining",
        "Support activities for mining"
      ],
    },
    {
      letter: 'Manufacturing',
      names: ["Animal food, grain and oilseed milling",
        "Sugar and confectionery products",
        "Fruit and vegetable preserving and specialty food manufacturing",
        "Dairy product manufacturing",
        "Animal slaughtering and processing",
        "Retail bakeries",
        "Bakeries and tortilla manufacturing except retail bakeries",
        "Seafood and other miscellaneous foods",
        "Not specified food industries",
        "Beverage manufacturing",
        "Tobacco manufacturing",
        "Fiber yarn and thread mills",
        "Fabric mills except knitting mills",
        "Textile and fabric finishing and fabric coating mills",
        "Carpet and rug mills",
        "Textile product mills except carpet and rug",
        "Knitting fabric mills and apparel knitting mills",
        "Cut and sew and apparel accessories and other apparel manufacturing",
        "Footwear manufacturing",
        "Leather and hide tanning and finishing, and other leather and allied product manufacturing",
        "Pulp, paper, and paperboard mills",
        "Paperboard container manufacturing",
        "Miscellaneous paper and pulp products",
        "Printing and related support activities",
        "Petroleum refining",
        "Miscellaneous petroleum and coal products",
        "Resin, synthetic rubber, and fibers and filaments manufacturing",
        "Agricultural chemical manufacturing",
        "Pharmaceutical and medicine manufacturing",
        "Paint, coating, and adhesive manufacturing",
        "Soap, cleaning compound, and cosmetics manufacturing",
        "Industrial and miscellaneous chemicals",
        "Plastics product manufacturing",
        "Tire manufacturing",
        "Rubber products, except tires, manufacturing",
        "Pottery, ceramics, and plumbing fixture manufacturing",
        "Clay building material and refractories manufacturing",
        "Glass and glass product manufacturing",
        "Cement, concrete, lime, and gypsum product manufacturing",
        "Miscellaneous nonmetallic mineral product manufacturing",
        "Iron and steel mills and steel product manufacturing ",
        "Aluminum production and processing",
        "Nonferrous metal (except aluminum) production and processing",
        "Foundries",
        "Metal forgings and stampings",
        "Cutlery and hand tool manufacturing",
        "Structural metals and boiler tank and shipping container manufacturing",
        "Machine shops; turned product; screw, nut, and bolt manufacturing",
        "Coating, engraving, heat treating, and allied activities",
        "Ordnance",
        "Miscellaneous fabricated metal products manufacturing",
        "Not specified metal industries",
        "Agricultural implement manufacturing",
        "Construction and mining and oil and gas field machinery manufacturing",
        "Commercial and service industry machinery manufacturing",
        "Metalworking machinery manufacturing",
        "Engine, turbine, and power transmission equipment manufacturing",
        "Machinery manufacturing",
        "Computer and peripheral equipment manufacturing",
        "Communications, audio, and video equipment manufacturing",
        "Navigational, measuring, electromedical, and control instruments manufacturing",
        "Electronic component and product manufacturing",
        "Household appliance manufacturing ",
        "Electric lighting and electrical equipment manufacturing and other electrical component manufacturing",
        "Motor vehicles and motor vehicle equipment manufacturing",
        "Aircraft and parts manufacturing",
        "Aerospace products and parts manufacturing",
        "Railroad rolling stock manufacturing",
        "Ship and boat building",
        "Other transportation equipment manufacturing",
        "Sawmills and wood preservation",
        "Veneer, plywood, and engineered wood products",
        "Prefabricated wood buildings and mobile homes manufacturing",
        "Miscellaneous wood products",
        "Furniture and related product manufacturing",
        "Medical equipment and supplies manufacturing",
        "Sporting and athletic goods and doll toy and game manufacturing",
        "Miscellaneous manufacturing"
      ],
    },
    {
      letter: 'Wholesale Trade',
      names: ["Motor vehicle and motor vehicle parts and supplies merchant wholesalers",
        "Furniture and home furnishing merchant wholesalers",
        "Lumber and other construction materials merchant wholesalers",
        "Professional and commercial equipment and supplies merchant wholesalers",
        "Metals and minerals, except petroleum, merchant wholesalers",
        "Household appliances and electrical and electronic goods merchant wholesalers",
        "Hardware, and plumbing and heating equipment, and supplies merchant wholesalers",
        "Machinery, equipment, and supplies merchant wholesalers",
        "Recyclable material merchant wholesalers",
        "Miscellaneous durable goods merchant wholesalers",
        "Paper and paper products merchant wholesalers",
        "Drugs, sundries, and chemical and allied products merchant wholesalers",
        "Apparel, piece goods and notions merchant wholesalers",
        "Grocery and related product merchant wholesalers",
        "Farm product raw material merchant wholesalers",
        "Petroleum and petroleum products merchant wholesalers",
        "Alcoholic beverages merchant wholesalers",
        "Farm supplies merchant wholesalers",
        "Miscellaneous nondurable goods merchant wholesalers",
        "Wholesale electronic markets and agents and brokers"
      ],
    },
    {
      letter: 'Retail Trade',
      names: ["Automobile dealers",
        "Other motor vehicle dealers",
        "Automotive parts, accessories and tire stores",
        "Furniture and home furnishings stores",
        "Household appliance stores",
        "Electronics Stores",
        "Building material and supplies dealers",
        "Hardware stores",
        "Lawn and garden equipment and supplies stores",
        "Supermarkets and other grocery (except convenience) stores",
        "Convenience Stores",
        "Specialty food stores",
        "Beer, wine, and liquor stores",
        "Pharmacies and drug stores",
        "Health and personal care except drug stores",
        "Gasoline stations",
        "Clothing stores",
        "Shoe stores",
        "Jewelry, luggage, and leather goods stores",
        "Sporting goods and hobby and toy stores",
        "Sewing needlework and piece goods stores",
        "Musical instrument and supplies stores",
        "Book stores and news dealers",
        "Department stores",
        "General merchandise stores including warehouse clubs and supercenters",
        "Florists",
        "Office supplies and stationery stores",
        "Used merchandise stores",
        "Gift, novelty, and souvenir shops",
        "Miscellaneous retail stores",
        "Electronic shopping and mail-order houses",
        "Vending machine operators",
        "Fuel dealers",
        "Other direct selling establishments"
      ],
    },
    {
      letter: 'Transportation and Warehousing',
      names: ["Air transportation",
        "Rail transportation",
        "Water transportation",
        "Truck transportation",
        "Bus service and urban transit",
        "Taxi and limousine service",
        "Pipeline transportation",
        "Scenic and sightseeing transportation",
        "Services incidental to transportation",
        "Postal Service",
        "Couriers and messengers",
        "Warehousing and storage"
      ],
    },
    {
      letter: 'Utilities',
      names: ["Electric power generation transmission and distribution",
        "Natural gas distribution",
        "Electric and gas and other combinations",
        "Water, steam, air-conditioning and irrigation systems",
        "Sewage treatment facilities"],
    },
    {
      letter: 'Software & Media (newspapers, motion pictures, data processing, internet publishing, telecommunications, etc.',
      names: ["Newspaper publishers",
        "Periodical, book, and directory publishers",
        "Software publishers",
        "Motion pictures and video industries",
        "Sound recording industries",
        "Broadcasting (except internet)",
        "Internet publishing and broadcasting and web search portals",
        "Wired telecommunications carriers",
        "Telecommunications except wired telecommunications carriers",
        "Data processing, hosting and related services",
        "Libraries and archives",
        "Other information services except libraries and archives and internet publishing and broadcasting and web search portals"
      ],
    },
    {
      letter: 'Finance and Insurance',
      names: ["Banking and related activities",
        "Savings institutions including credit unions",
        "Nondepository credit and related activities",
        "Securities, commodities, funds, trusts, and other financial investments",
        "Insurance carriers",
        "Agencies, brokerages and other insurance related activities"
      ],
    },
    {
      letter: 'Real Estate and Rental and Leasing',
      names: ["Lessors of real estate and offices of real estate agents and brokers",
        "Real estate property managers, offices of real estate appraisers and other activities related to real estate",
        "Automotive equipment rental and leasing",
        "Other consumer goods rental",
        "Commercial, industrial and other intangible assets rental and leasing"],
    },
    {
      letter: 'Professional, Scientific, and Technical Services',
      names: ["Legal services",
        "Accounting, tax preparation, bookkeeping, and payroll services",
        "Architectural, engineering, and related services",
        "Specialized design services",
        "Computer systems design and related services",
        "Management, scientific, and technical consulting services",
        "Scientific research and development services",
        "Advertising, public relations and related services",
        "Veterinary services",
        "Other professional, scientific and technical services"
      ],
    },
    {
      letter: 'Administrative and support and waste management services',
      names: ["Employment services",
        "Business support services",
        "Travel arrangements and reservation services",
        "Investigation and security services",
        "Services to buildings and dwellings (except cleaning during construction and immediately after construction)",
        "Landscaping services",
        "Other administrative and other support services",
        "Waste management and remediation services"
      ],
    },
    {
      letter: 'Educational Services',
      names: ["Elementary and secondary schools",
        "Colleges, universities, and professional schools, including junior colleges",
        "Business, technical and trade schools and training",
        "Other schools and instruction, and educational support services"
      ],
    },
    {
      letter: 'Health Care and Social Assistance',
      names: ["Offices of physicians",
        "Offices of dentists",
        "Offices of chiropractors",
        "Offices of optometrists",
        "Offices of other health practitioners",
        "Outpatient care centers",
        "Home health care services",
        "Other health care services",
        "General medical and surgical hospitals and specialty (except psychiatric and substance abuse) hospitals",
        "Psychiatric and substance abuse hospitals",
        "Nursing care facilities (skilled nursing facilities)",
        "Residential care facilities except skilled nursing facilities",
        "Individual and family services",
        "Community food and housing and emergency services",
        "Vocational rehabilitation services",
        "Child day care services"
      ],
    },
    {
      letter: 'Arts, Entertainment, and Recreation',
      names: ["Performing arts companies",
        "Spectator sports",
        "Promoters of performing arts, sports, and similar events, agents and managers for artists, athletes, entertainers and other public figures",
        "Independent artists, writers and performers",
        "Museums, art galleries, historical sites and similar institutions",
        "Bowling centers",
        "Other amusement, gambling and recreation industries"
      ],
    },
    {
      letter: 'Accommodation and Food Services',
      names: ["Traveler accommodation",
        "Recreational vehicle parks and camps and rooming and boarding houses, dormitories, and workers' camps",
        "Restaurants and other food services",
        "Drinking places, alcoholic beverages"],
    },
    {
      letter: 'Labor Unions, Other Services, Except Public Administration',
      names: ["Automotive repair and maintenance",
        "Car washes",
        "Electronic and precision equipment repair and maintenance",
        "Commercial and industrial machinery and equipment repair and maintenance",
        "Personal and household goods repair and maintenance",
        "Barber shops",
        "Beauty salons",
        "Nail salons and other personal care services",
        "Drycleaning and laundry services",
        "Funeral homes, and cemeteries and crematories",
        "Other personal services",
        "Religious organizations",
        "Civic, social, advocacy organizations, and grantmaking and giving services",
        "Labor unions",
        "Business, professional, political, and similar organizations",
        "Private households"
      ],
    },
    {
      letter: 'Public Administration',
      names: ["Executive offices and legislative bodies",
        "Public finance activities",
        "Other general government and support",
        "Justice, public order, and safety activities",
        "Administration of human resource programs",
        "Administration of environmental quality and housing programs",
        "Administration of economic programs and space research",
        "National security and international affairs"
      ],
    },
    {
      letter: 'Military',
      names: ["U. S. Army",
        "U. S. Air Force",
        "U. S. Navy",
        "U. S. Marines",
        "U. S. Coast Guard",
        "Armed Forces, Branch not specified",
        "Military Reserves or National Guard"
      ],
    }
  ];

}
