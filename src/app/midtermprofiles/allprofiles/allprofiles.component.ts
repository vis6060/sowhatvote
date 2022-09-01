import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, OnInit} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {Cache} from "aws-amplify";
import {AuthenticatorService} from "@aws-amplify/ui-angular";

@Component({
  selector: 'app-allprofiles',
  templateUrl: './allprofiles.component.html',
  styleUrls: ['./allprofiles.component.css']
})
export class AllprofilesComponent implements OnInit {

  constructor(public authenticator: AuthenticatorService) {
    this.dataSource.data = TREE_DATA;
    if(Cache.getItem('cookiedenied')=="yes") {this.cookiedenied="yes"}
    if(Cache.getItem('stateuser')=="CA") {this.stateuserCA="yes"}
  }

  ngOnInit(): void {
  //  console.log(this.HouseAL[0])
  }

  cookiedenied=""; stateuserCA=""

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {name: 'Alabama',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Katie Britt"
        },
          {
            name: "Richard C. Shelby"
          },
          {
            name: "Tommy Tuberville"
          },
          {
            name: "Will Boyd"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Kathy Warner-Stanton"
        },
          {
            name: "Phyllis Harvey-Hall"
          },
          {
            name: "Lin Veasey"
          },
          {
            name: "Robert Aderholt"
          },
          {
            name: "Rick Neighbors"
          },
          {
            name: "Dale Strong"
          },
          {
            name: "Jerry Carl"
          },
          {
            name: "Mike Rogers"
          },
          {
            name: "Gary Palmer"
          },
          {
            name: "Terri Sewell"
          },
          {
            name: "Beatrice Nichols"
          },
          {
            name: "Barry Moore"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [{
          name: "Kay Ivey"
        },
          {
            name: "Yolanda Flowers"
          },
          {
            name: "Will Ainsworth"
          },
          {
            name: "Tracie West"
          },
          {
            name: "Yvette Richardson"
          },
          {
            name: "Young Boozer"
          },
          {
            name: "Wes Allen"
          },
          {
            name: "Andrew Sorrell"
          },
          {
            name: "Marie Manning"
          },
          {
            name: "Steve Marshall"
          },
          {
            name: "Wayne Reynolds"
          },
          {
            name: "Jeremy Oden"
          },
          {
            name: "Pamela Laffitte"
          },
          {
            name: "Wendell Major"
          },
          {
            name: "Chris Beeker"
          },
          {
            name: "Rick Pate"
          }
        ],
      },
    ],
  },
  {
    name: 'Arizona',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Kyrsten Sinema"
        },
          {
            name: "Mark Kelly"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Jeff Zink"
        },
          {
            name: "Paul Gosar"
          },
          {
            name: "Andy Biggs"
          },
          {
            name: "Javier Ramos"
          },
          {
            name: "Luis Pozzolo"
          },
          {
            name: "David Schweikert"
          },
          {
            name: "Tom O'Halleran"
          },
          {
            name: "Juan Ciscomani"
          },
          {
            name: "Kirsten Engel"
          },
          {
            name: "Greg Stanton"
          },
          {
            name: "Eli Crane"
          },
          {
            name: "Ruben Gallego"
          },
          {
            name: "Jevin Hodge"
          },
          {
            name: "Debbie Lesko"
          },
          {
            name: "Raul Grijalva"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [{
          name: "Katie Hobbs"
        },
          {
            name: "Kari Lake"
          },
          {
            name: "Abraham Hamadeh"
          },
          {
            name: "Mark Finchem"
          },
          {
            name: "Kristin Mayes"
          },
          {
            name: "Adrian Fontes"
          }
        ],
      },
    ],
  },
  {
    name: 'Arkansas',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "John Boozman"
        },
          {
            name: "Natalie James"
          },
          {
            name: "Tom Cotton"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Bruce Westerman"
        },
          {
            name: "Monte Hodges"
          },
          {
            name: "Quintessa Hathaway"
          },
          {
            name: "Rick Crawford"
          },
          {
            name: "French Hill"
          },
          {
            name: "Steve Womack"
          },
          {
            name: "John White"
          },
          {
            name: "Lauren Mallett-Hays"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [{
          name: "Sarah Huckabee Sanders"
        },
          {
            name: "Chris Jones"
          },
          {
            name: "Leslie Rutledge"
          },
          {
            name: "Kelly Krout"
          },
          {
            name: "Diamond Arnold-Johnson"
          },
          {
            name: "Mark Lowery"
          },
          {
            name: "Pam Whitaker"
          },
          {
            name: "Dennis Milligan"
          },
          {
            name: "John Thurston"
          },
          {
            name: "Tommy Land"
          },
          {
            name: "Goldi Gaines"
          },
          {
            name: "Tim Griffin"
          },
          {
            name: "Jesse Gibson"
          },
          {
            name: "Anna Beth Gorman"
          }
        ],
      },
    ],
  },
  {
    name: 'California',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Alex Padilla"
        },
          {
            name: "Dianne Feinstein"
          },
          {
            name: "Mark Meuser"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Paul Jones"
        },
          {
            name: "Salud Carbajal"
          },
          {
            name: "John Duarte"
          },
          {
            name: "Marisa Wood"
          },
          {
            name: "Tom McClintock"
          },
          {
            name: "Ken Calvert"
          },
          {
            name: "Brian Maryott"
          },
          {
            name: "Maxine Waters"
          },
          {
            name: "Ami Bera"
          },
          {
            name: "Doris Matsui"
          },
          {
            name: "Stephen Houlahan"
          },
          {
            name: "Rishi Kumar"
          },
          {
            name: "Peter Hernandez"
          },
          {
            name: "Mark DeSaulnier"
          },
          {
            name: "Joe Collins"
          },
          {
            name: "Maebe Girl"
          },
          {
            name: "Rudy Salas"
          },
          {
            name: "Asif Mahmood"
          },
          {
            name: "Kevin Mullin"
          },
          {
            name: "Ted Lieu"
          },
          {
            name: "Aja Smith"
          },
          {
            name: "Juan Vargas"
          },
          {
            name: "Josh Harder"
          },
          {
            name: "Angelica Duenas"
          },
          {
            name: "Corey Gustafson"
          },
          {
            name: "David Kim"
          },
          {
            name: "Derek Marshall"
          },
          {
            name: "Tony Cardenas"
          },
          {
            name: "Brian Hawkins"
          },
          {
            name: "John Dennis"
          },
          {
            name: "Kevin McCarthy"
          },
          {
            name: "Jay Obernolte"
          },
          {
            name: "Scott Baugh"
          },
          {
            name: "Jared Huffman"
          },
          {
            name: "Jay Chen"
          },
          {
            name: "Mike Garcia"
          },
          {
            name: "Jan Perry"
          },
          {
            name: "Nancy Pelosi"
          },
          {
            name: "Brad Sherman"
          },
          {
            name: "Scott Peters"
          },
          {
            name: "Pete Aguilar"
          },
          {
            name: "Stan Caplan"
          },
          {
            name: "Linda Sanchez"
          },
          {
            name: "Grace Napolitano"
          },
          {
            name: "Adam Gray"
          },
          {
            name: "Young Kim"
          },
          {
            name: "Anna Eshoo"
          },
          {
            name: "Mike Cargile"
          },
          {
            name: "Will Rollins"
          },
          {
            name: "Barbara Lee"
          },
          {
            name: "Kevin Kiley"
          },
          {
            name: "Eric Swalwell"
          },
          {
            name: "Mike Levin"
          },
          {
            name: "Ritesh Tandon"
          },
          {
            name: "Michelle Steel"
          },
          {
            name: "Darrell Issa"
          },
          {
            name: "Jim Costa"
          },
          {
            name: "Rudy Recile"
          },
          {
            name: "Doug LaMalfa"
          },
          {
            name: "Judy Chu"
          },
          {
            name: "Max Semenenko"
          },
          {
            name: "Raul Ruiz"
          },
          {
            name: "Eric Ching"
          },
          {
            name: "Brad Allen"
          },
          {
            name: "Wes Hallman"
          },
          {
            name: "Omar Navarro"
          },
          {
            name: "Sydney Kamlager"
          },
          {
            name: "Douglas Brower"
          },
          {
            name: "Zoe Lofgren"
          },
          {
            name: "Robert Garcia"
          },
          {
            name: "Adam Schiff"
          },
          {
            name: "Alison Hayden"
          },
          {
            name: "Matt Jacobs"
          },
          {
            name: "Mike Barkley"
          },
          {
            name: "Tamika Hamilton"
          },
          {
            name: "David Canepa"
          },
          {
            name: "Matt Brock"
          },
          {
            name: "Katie Porter"
          },
          {
            name: "Sara Jacobs"
          },
          {
            name: "David Valadao"
          },
          {
            name: "Michael Maher"
          },
          {
            name: "Tom Patti"
          },
          {
            name: "Stephen Slauson"
          },
          {
            name: "Jimmy Panetta"
          },
          {
            name: "Tyler Geffeney"
          },
          {
            name: "Daniel Martinez"
          },
          {
            name: "Mark Takano"
          },
          {
            name: "Nanette Barragan"
          },
          {
            name: "Ro Khanna"
          },
          {
            name: "Lou Correa"
          },
          {
            name: "John Mark Porter"
          },
          {
            name: "John Briscoe"
          },
          {
            name: "Lucie Volotzky"
          },
          {
            name: "Christy Smith"
          },
          {
            name: "Christopher Gonzales"
          },
          {
            name: "Jimmy Gomez"
          },
          {
            name: "John Garamendi"
          },
          {
            name: "Mike Thompson"
          },
          {
            name: "Kermit Jones"
          },
          {
            name: "Jeff Gorman"
          },
          {
            name: "Julia Brownley"
          },
          {
            name: "Norma Torres"
          },
          {
            name: "Max Steiner"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [  {
          name: "Gavin Newsom"
        },
          {
            name: "Brian Dahle"
          },
          {
            name: "Angela Underwood Jacobs"
          },
          {
            name: "Eleni Kounalakis"
          },
          {
            name: "Malia Cohen"
          },
          {
            name: "Rob Bonta"
          },
          {
            name: "David Dodson"
          },
          {
            name: "Tony Vazquez"
          },
          {
            name: "Mike Schaefer"
          },
          {
            name: "Jack Guerrero"
          },
          {
            name: "Jose Altamirano"
          },
          {
            name: "Shirley Weber"
          },
          {
            name: "Robert Bernosky"
          },
          {
            name: "Sally Lieber"
          },
          {
            name: "Fiona Ma"
          },
          {
            name: "Nathan Hochman"
          },
          {
            name: "Peter Verbica"
          },
          {
            name: "Lanhee Chen"
          },
          {
            name: "Ted Gaines"
          }
        ],
      },
    ],
  },
  {
    name: 'Colorado',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Michael Bennet"
        },
          {
            name: "John W. Hickenlooper"
          },
          {
            name: "Joe O'Dea"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Doug Lamborn"
        },
          {
            name: "Diana DeGette"
          },
          {
            name: "Jason Crow"
          },
          {
            name: "Marshall Dawson"
          },
          {
            name: "Steve Monahan"
          },
          {
            name: "Ken Buck"
          },
          {
            name: "David Torres"
          },
          {
            name: "Erik Aadland"
          },
          {
            name: "Brittany Pettersen"
          },
          {
            name: "Barbara Kirkmeyer"
          },
          {
            name: "Jennifer Qualteri"
          },
          {
            name: "Adam Frisch"
          },
          {
            name: "Yadira Caraveo"
          },
          {
            name: "Ike McCorkle"
          },
          {
            name: "Joe Neguse"
          },
          {
            name: "Lauren Boebert"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [{
          name: "Heidi Ganahl"
        },
          {
            name: "Jared Polis"
          },
          {
            name: "Dianne Primavera"
          },
          {
            name: "Mark VanDriel"
          },
          {
            name: "Phil Weiser"
          },
          {
            name: "Molly Lamar"
          },
          {
            name: "Amy Naes"
          },
          {
            name: "Rhonda Solis"
          },
          {
            name: "Joseph Shelton"
          },
          {
            name: "Rebecca McClellan"
          },
          {
            name: "Ron Casados"
          },
          {
            name: "Jack Barrington"
          },
          {
            name: "John Kellner"
          },
          {
            name: "Peggy Propst"
          },
          {
            name: "Yolanda Ortega"
          },
          {
            name: "Lang Sias"
          },
          {
            name: "Ken Montera"
          },
          {
            name: "Dave Young"
          },
          {
            name: "Frank McNulty"
          },
          {
            name: "Pam Anderson"
          },
          {
            name: "Wanda James"
          },
          {
            name: "Jena Griswold"
          },
          {
            name: "Steve Durham"
          }
        ],
      },
    ],
  },
  {
    name: 'Connecticut',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Richard Blumenthal"
        },
          {
            name: "Christopher Murphy"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [  {
          name: "Mike France"
        },
          {
            name: "John Larson"
          },
          {
            name: "Joe Courtney"
          },
          {
            name: "Larry Lazor"
          },
          {
            name: "George Logan"
          },
          {
            name: "Jahana Hayes"
          },
          {
            name: "Lesley DeNardis"
          },
          {
            name: "Rosa L. DeLauro"
          },
          {
            name: "Jim Himes"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [{
          name: "Ned Lamont"
        },
          {
            name: "Bob Stefanowski"
          },
          {
            name: "Susan Bysiewicz"
          },
          {
            name: "Laura Devlin"
          },
          {
            name: "William Tong"
          }
        ],
      },
    ],
  },
  {
    name: 'Delaware',
    children: [
      {
        name: 'U.S. Senate',
        children: [  {
          name: "Christopher A. Coons"
        },
          {
            name: "Thomas R. Carper"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Lisa Rochester"
        }
        ],
      }
    ],
  },
  {
    name: 'Florida',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Rick Scott"
        },
          {
            name: "Marco Rubio"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Greg Steube"
        },
          {
            name: "Dan Webster"
          },
          {
            name: "Scott Franklin"
          },
          {
            name: "Maria Salazar"
          },
          {
            name: "Gus Bilirakis"
          },
          {
            name: "Debbie Wasserman Schultz"
          },
          {
            name: "Mario Diaz-Balart"
          },
          {
            name: "Vern Buchanan"
          },
          {
            name: "Lois Frankel"
          },
          {
            name: "Bill Posey"
          },
          {
            name: "John Rutherford"
          },
          {
            name: "Kathy Castor"
          },
          {
            name: "Frederica Wilson"
          },
          {
            name: "Byron Donalds"
          },
          {
            name: "Darren Soto"
          },
          {
            name: "Brian Mast"
          },
          {
            name: "Kat Cammack"
          },
          {
            name: "Neal Dunn"
          },
          {
            name: "Carlos Gimenez"
          },
          {
            name: "Matt Gaetz"
          },
          {
            name: "Sheila Cherfilus-McCormick"
          },
          {
            name: "Michael Waltz"
          },
          {
            name: "Al Lawson"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [       {
          name: "Ron DeSantis"
        },
          {
            name: "Jimmy Patronis"
          },
          {
            name: "Ashley B. Moody"
          }
        ],
      },
    ],
  },
  {
    name: 'Georgia',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Raphael Warnock"
        },
          {
            name: "Herschel Walker"
          },
          {
            name: "Jon Ossoff"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Mark Gonsalves"
        },
          {
            name: "Rick Allen"
          },
          {
            name: "Jonathan Chavez"
          },
          {
            name: "Austin Scott"
          },
          {
            name: "Lucy McBath"
          },
          {
            name: "Hank Johnson"
          },
          {
            name: "Rich McCormick"
          },
          {
            name: "Antonio Daza-Fernandez"
          },
          {
            name: "Wade Herring"
          },
          {
            name: "Andrew Clyde"
          },
          {
            name: "Marcus Flowers"
          },
          {
            name: "Christian Zimm"
          },
          {
            name: "Darrius Butler"
          },
          {
            name: "Marjorie Taylor Greene"
          },
          {
            name: "Caesar Gonzales"
          },
          {
            name: "Mike Ford"
          },
          {
            name: "Val Almonord"
          },
          {
            name: "Barry Loudermilk"
          },
          {
            name: "Mike Collins"
          },
          {
            name: "Elizabeth Johnson"
          },
          {
            name: "Chris West"
          },
          {
            name: "Bob Christian"
          },
          {
            name: "Tabitha Johnson-Green"
          },
          {
            name: "David Scott"
          },
          {
            name: "Nikema Williams"
          },
          {
            name: "Drew Ferguson"
          },
          {
            name: "Sanford Bishop"
          },
          {
            name: "Buddy Carter"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [{
          name: "Stacey Abrams"
        },
          {
            name: "Brian Kemp"
          },
          {
            name: "Burt Jones"
          },
          {
            name: "Charlie Bailey"
          },
          {
            name: "Alisha Thomas Searcy"
          },
          {
            name: "John King"
          },
          {
            name: "Tyler Harper"
          },
          {
            name: "Bee Nguyen"
          },
          {
            name: "Richard Woods"
          },
          {
            name: "Tim Echols"
          },
          {
            name: "Fitz Johnson"
          },
          {
            name: "William Boddie"
          },
          {
            name: "Janice Laws Robinson"
          },
          {
            name: "Shelia Edwards"
          },
          {
            name: "Chris Carr"
          },
          {
            name: "Jen Jordan"
          },
          {
            name: "Bruce Thompson"
          },
          {
            name: "Brad Raffensperger"
          },
          {
            name: "Patty Durand"
          },
          {
            name: "Nakita Hemingway"
          }
        ],
      },
    ],
  },
  {
    name: 'Hawaii',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Brian Schatz"
        },
          {
            name: "Mazie K. Hirono"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Ed Case"
        }
        ],
      }
    ],
  },
  {
    name: 'Idaho',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Mike Crapo"
        },
          {
            name: "David Roth"
          },
          {
            name: "James E. Risch"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Kaylee Peterson"
        },
          {
            name: "Wendy Norman"
          },
          {
            name: "Michael Simpson"
          },
          {
            name: "Russ Fulcher"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [{
          name: "Brad Little"
        },
          {
            name: "Stephen Heidt"
          },
          {
            name: "Scott Bedke"
          },
          {
            name: "Terri Pickens Manweiler"
          },
          {
            name: "Steven Scanlin"
          },
          {
            name: "Shawn Keenan"
          },
          {
            name: "Dianna David"
          },
          {
            name: "Phil McGrane"
          },
          {
            name: "Julie Ellsworth"
          },
          {
            name: "Brandon Woolf"
          },
          {
            name: "Jill Ellsworth"
          },
          {
            name: "Raul Labrador"
          },
          {
            name: "Debbie Critchfield"
          },
          {
            name: "Terry Gilbert"
          }
        ],
      },
    ],
  },
  {
    name: 'Illinois',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Richard J. Durbin"
        },
          {
            name: "Tammy Duckworth"
          },
          {
            name: "Kathy Salvi"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [   {
          name: "Jesus Garcia"
        },
          {
            name: "Thomas Lynch"
          },
          {
            name: "Scott Gryder"
          },
          {
            name: "Joseph Severino"
          },
          {
            name: "Justin Burau"
          },
          {
            name: "Danny Davis"
          },
          {
            name: "Catalina Lauf"
          },
          {
            name: "Raja Krishnamoorthi"
          },
          {
            name: "Max Rice"
          },
          {
            name: "Darin LaHood"
          },
          {
            name: "Mike Bost"
          },
          {
            name: "Mary Miller"
          },
          {
            name: "Lauren Underwood"
          },
          {
            name: "Tom Hanson"
          },
          {
            name: "Sean Casten"
          },
          {
            name: "Jonathan Jackson"
          },
          {
            name: "Mike Quigley"
          },
          {
            name: "Esther King"
          },
          {
            name: "Regan Deering"
          },
          {
            name: "Homer Markel"
          },
          {
            name: "Nikki Budzinski"
          },
          {
            name: "Brad Schneider"
          },
          {
            name: "Eric Sorensen"
          },
          {
            name: "Paul Lange"
          },
          {
            name: "Keith Pekau"
          },
          {
            name: "Chris Dargis"
          },
          {
            name: "Eric Carlson"
          },
          {
            name: "Delia Ramirez"
          },
          {
            name: "James Falakos"
          },
          {
            name: "Robin Kelly"
          },
          {
            name: "Jan Schakowsky"
          },
          {
            name: "Bill Foster"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [{
          name: "J.B. Pritzker"
        },
          {
            name: "Darren Bailey"
          },
          {
            name: "Juliana Stratton"
          },
          {
            name: "Stephanie Trussell"
          },
          {
            name: "Shannon Teresi"
          },
          {
            name: "Thomas DeVore"
          },
          {
            name: "Susana Mendoza"
          },
          {
            name: "Mike Frerichs"
          },
          {
            name: "Kwame Raoul"
          },
          {
            name: "Alexi Giannoulias"
          },
          {
            name: "Dan Brady"
          },
          {
            name: "Tom Demmer"
          }
        ],
      },
    ],
  },
  {
    name: 'Indiana',
    children: [
      {
        name: 'U.S. Senate',
        children: [  {
          name: "Thomas McDermott"
        },
          {
            name: "Todd Young"
          },
          {
            name: "Mike Braun"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Cynthia Wirth"
        },
          {
            name: "Gary Snyder"
          },
          {
            name: "Ray McCormick"
          },
          {
            name: "Victoria Spartz"
          },
          {
            name: "Matthew Fyfe"
          },
          {
            name: "Greg Pence"
          },
          {
            name: "Jeannine Lake"
          },
          {
            name: "Jennifer Ruth Green"
          },
          {
            name: "Paul Steury"
          },
          {
            name: "Jim Banks"
          },
          {
            name: "Angela Grabovsky"
          },
          {
            name: "Andre Carson"
          },
          {
            name: "Roger Day"
          },
          {
            name: "Erin Houchin"
          },
          {
            name: "Jim Baird"
          },
          {
            name: "Jackie Walorski"
          },
          {
            name: "Frank Mrvan"
          },
          {
            name: "Larry Bucshon"
          }
        ],
      }
    ],
  },
  {
    name: 'Iowa',
    children: [
      {
        name: 'U.S. Senate',
        children: [  {
          name: "Michael Franken"
        },
          {
            name: "Joni Ernst"
          },
          {
            name: "Chuck Grassley"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Randy Feenstra"
        },
          {
            name: "Christina Bohannan"
          },
          {
            name: "Zach Nunn"
          },
          {
            name: "Liz Mathis"
          },
          {
            name: "Cindy Axne"
          },
          {
            name: "Ryan Melton"
          },
          {
            name: "Ashley Hinson"
          },
          {
            name: "Mariannette Miller-Meeks"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [{
          name: "Deidre DeJear"
        },
          {
            name: "Kim Reynolds"
          },
          {
            name: "Marco Battaglia"
          },
          {
            name: "Eric Van Lancker"
          },
          {
            name: "Rob Sand"
          },
          {
            name: "Paul Pate"
          },
          {
            name: "Todd Halbur"
          },
          {
            name: "Joel Miller"
          },
          {
            name: "Thomas John Miller"
          },
          {
            name: "John Norwood"
          },
          {
            name: "Michael L. Fitzgerald"
          },
          {
            name: "Roby Smith"
          },
          {
            name: "Mike Naig"
          },
          {
            name: "Brenna Bird"
          }
        ],
      },
    ],
  },
  {
    name: 'Kansas',
    children: [
      {
        name: 'U.S. Senate',
        children: [  {
          name: "Roger Marshall"
        },
          {
            name: "Jerry Moran"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [  {
          name: "Patrick Schmidt"
        },
          {
            name: "Tracey Mann"
          },
          {
            name: "Bob Hernandez"
          },
          {
            name: "Amanda Adkins"
          },
          {
            name: "Ron Estes"
          },
          {
            name: "James Beard"
          },
          {
            name: "Jacob LaTurner"
          },
          {
            name: "Sharice Davids"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [{
          name: "Derek Schmidt"
        },
          {
            name: "Laura Kelly"
          },
          {
            name: "David Toland"
          },
          {
            name: "Katie Sawyer"
          },
          {
            name: "Michelle Dombrosky"
          },
          {
            name: "Lynn Rogers"
          },
          {
            name: "Ben Jones"
          },
          {
            name: "Chris Mann"
          },
          {
            name: "Jim Porter"
          },
          {
            name: "Scott Schwab"
          },
          {
            name: "Kris Kobach"
          },
          {
            name: "Vicki Schmidt"
          },
          {
            name: "Jean Clifford"
          }
        ],
      },
    ],
  },
  {
    name: 'Kentucky',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Mitch McConnell"
        },
          {
            name: "Charles Booker"
          },
          {
            name: "Rand Paul"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Hal Rogers"
        },
          {
            name: "Thomas Massie"
          },
          {
            name: "Conor Halbleib"
          },
          {
            name: "Stuart Ray"
          },
          {
            name: "Andy Barr"
          },
          {
            name: "Jimmy Ausbrooks"
          },
          {
            name: "Morgan McGarvey"
          },
          {
            name: "Matthew Lehman"
          },
          {
            name: "Brett Guthrie"
          },
          {
            name: "James Comer"
          },
          {
            name: "Geoffrey Young"
          },
          {
            name: "Hank Linderman"
          }
        ],
      }
    ],
  },
  {
    name: 'Louisiana',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Bill Cassidy"
        },
          {
            name: "Gary Chambers"
          },
          {
            name: "John Kennedy"
          },
          {
            name: "Luke Mixon"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Troy Carter"
        },
          {
            name: "Steve Scalise"
          },
          {
            name: "Garret Graves"
          },
          {
            name: "Clay Higgins"
          },
          {
            name: "Julia Letlow"
          },
          {
            name: "Mike Johnson"
          }
        ],
      }
    ],
  },
  {
    name: 'Maine',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Susan M. Collins"
        }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Chellie Pingree"
        },
          {
            name: "Bruce Poliquin"
          },
          {
            name: "Jared Golden"
          },
          {
            name: "Ed Thelander"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [{
          name: "Paul LePage"
        },
          {
            name: "Janet T. Mills"
          }
        ],
      },
    ],
  },
  {
    name: 'Maryland',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Chris Van Hollen"
        },
          {
            name: "Benjamin L. Cardin"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Steny Hoyer"
        },
          {
            name: "Gregory Coll"
          },
          {
            name: "Jamie Raskin"
          },
          {
            name: "Neil Parrott"
          },
          {
            name: "David Trone"
          },
          {
            name: "Dutch Ruppersberger"
          },
          {
            name: "John Sarbanes"
          },
          {
            name: "Yuripzy Morgan"
          },
          {
            name: "Nicolee Ambrose"
          },
          {
            name: "Heather Mizeur"
          },
          {
            name: "Jeff Warner"
          },
          {
            name: "Chris Palombi"
          },
          {
            name: "Andrew Harris"
          },
          {
            name: "Scott M. Collier"
          },
          {
            name: "Glenn Ivey"
          },
          {
            name: "Kweisi Mfume"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [{
          name: "Dan Cox"
        },
          {
            name: "Wes Moore"
          },
          {
            name: "Aruna Miller"
          },
          {
            name: "Gordana Schifanelli"
          },
          {
            name: "Barry Glassman"
          },
          {
            name: "Brooke Elizabeth Lierman"
          },
          {
            name: "Anthony G. Brown"
          },
          {
            name: "Michael Anthony Peroutka"
          }
        ],
      },
    ],
  },
  {
    name: 'Massachusetts',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Edward J. Markey"
        },
          {
            name: "Elizabeth Warren"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [  {
          name: "Jim McGovern"
        },
          {
            name: "Seth Moulton"
          },
          {
            name: "Lori Trahan"
          },
          {
            name: "Jake Auchincloss"
          },
          {
            name: "Stephen Lynch"
          },
          {
            name: "Bill Keating"
          },
          {
            name: "Katherine Clark"
          },
          {
            name: "Ayanna Pressley"
          },
          {
            name: "Richard Neal"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [{
          name: "Joseph Ferreira"
        },
          {
            name: "Terrence Kennedy"
          },
          {
            name: "Robert Jubinville"
          },
          {
            name: "Paul DePalo"
          },
          {
            name: "Marilyn Petitto Devaney"
          },
          {
            name: "Deb Goldberg"
          },
          {
            name: "Eileen Duff"
          },
          {
            name: "Christopher Iannella"
          },
          {
            name: "William Galvin"
          }
        ],
      },
    ],
  },
  {
    name: 'Michigan',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Debbie Stabenow"
        },
          {
            name: "Gary C. Peters"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "John Moolenaar"
        },
          {
            name: "Hillary Scholten"
          },
          {
            name: "Rashida Tlaib"
          },
          {
            name: "Bill Huizenga"
          },
          {
            name: "Tim Walberg"
          },
          {
            name: "Brian Steven Jaye"
          },
          {
            name: "John James"
          },
          {
            name: "Carl Marlinga"
          },
          {
            name: "Jerry Hilliard"
          },
          {
            name: "Mark Ambrose"
          },
          {
            name: "Debbie Dingell"
          },
          {
            name: "Bart Goldberg"
          },
          {
            name: "Elissa Slotkin"
          },
          {
            name: "Paul Junge"
          },
          {
            name: "Daniel Kildee"
          },
          {
            name: "John Gibbs"
          },
          {
            name: "Martell Bivings"
          },
          {
            name: "Robert Lorinser"
          },
          {
            name: "Jack Bergman"
          },
          {
            name: "Whittney Williams"
          },
          {
            name: "Lisa McClain"
          },
          {
            name: "Tom Barrett"
          },
          {
            name: "Shri Thanedar"
          },
          {
            name: "Haley Stevens"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [{
          name: "Tudor Dixon"
        },
          {
            name: "Gretchen Whitmer"
          },
          {
            name: "Jocelyn Benson"
          },
          {
            name: "Pamela Pugh"
          },
          {
            name: "Dana Nessel"
          }
        ],
      },
    ],
  },
  {
    name: 'Minnesota',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Tina Smith"
        },
          {
            name: "Amy Klobuchar"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [  {
          name: "Tyler Kistner"
        },
          {
            name: "Ilhan Omar"
          },
          {
            name: "Tom Weiler"
          },
          {
            name: "Tom Emmer"
          },
          {
            name: "Pete Stauber"
          },
          {
            name: "Michelle Fischbach"
          },
          {
            name: "Jill Abahsain"
          },
          {
            name: "Betty McCollum"
          },
          {
            name: "Angie Craig"
          },
          {
            name: "Jeff Ettinger"
          },
          {
            name: "May Lor Xiong"
          },
          {
            name: "Dean Phillips"
          },
          {
            name: "Cicely Davis"
          },
          {
            name: "Brad Finstad"
          },
          {
            name: "Jeanne Hendricks"
          },
          {
            name: "Jennifer Schultz"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [{
          name: "Tim Walz"
        },
          {
            name: "Scott Jensen"
          },
          {
            name: "Peggy Flanagan"
          },
          {
            name: "Matt Birk"
          },
          {
            name: "Ryan Wilson"
          },
          {
            name: "Keith Ellison"
          },
          {
            name: "Julie Blaha"
          },
          {
            name: "Steve Simon"
          }
        ],
      },
    ],
  },
  {
    name: 'Mississippi',
    children: [
      {
        name: 'U.S. Senate',
        children: [  {
          name: "Roger F. Wicker"
        },
          {
            name: "Cindy Hyde-Smith"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [   {
          name: "Brian Flowers"
        },
          {
            name: "Dianne Dodson-Black"
          },
          {
            name: "Johnny DuPree"
          },
          {
            name: "Shuwaski Young"
          },
          {
            name: "Bennie Thompson"
          },
          {
            name: "Michael Guest"
          },
          {
            name: "Mike Ezell"
          },
          {
            name: "Trent Kelly"
          }
        ],
      }
    ],
  },
  {
    name: 'Missouri',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Josh Hawley"
        },
          {
            name: "Roy Blunt"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Cori Bush"
        },
          {
            name: "Sam Graves"
          },
          {
            name: "Jacob Turk"
          },
          {
            name: "Andrew Jones Jr."
          },
          {
            name: "Mark Alford"
          },
          {
            name: "Eric Burlison"
          },
          {
            name: "Kristen Radaker-Sheafer"
          },
          {
            name: "Jason Smith"
          },
          {
            name: "Bethany Mann"
          },
          {
            name: "Ann Wagner"
          },
          {
            name: "Jack Truman"
          },
          {
            name: "Blaine Luetkemeyer"
          },
          {
            name: "Emanuel Cleaver"
          },
          {
            name: "Henry Martin"
          },
          {
            name: "Trish Gunby"
          },
          {
            name: "Randi McCallian"
          }
        ],
      }
    ],
  },
  {
    name: 'Montana',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Steve Daines"
        },
          {
            name: "Jon Tester"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Monica Tranel"
        },
          {
            name: "Ryan Zinke"
          },
          {
            name: "Penny Ronning"
          },
          {
            name: "Matt Rosendale"
          }
        ],
      }
    ],
  },
  {
    name: 'Nebraska',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Ben Sasse"
        },
          {
            name: "Deb Fischer"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [   {
          name: "Tony Vargas"
        },
          {
            name: "David Else"
          },
          {
            name: "Patty Brooks"
          },
          {
            name: "Mike Flood"
          },
          {
            name: "Don Bacon"
          },
          {
            name: "Adrian Smith"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [{
          name: "Carol Blood"
        },
          {
            name: "Jim Pillen"
          },
          {
            name: "John Murante"
          },
          {
            name: "Mike Hilgers"
          },
          {
            name: "Eric Kamler"
          },
          {
            name: "Mike Foley"
          },
          {
            name: "Bob Evnen"
          },
          {
            name: "Kevin Stocker"
          }
        ],
      },
    ],
  },
  {
    name: 'Nevada',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Catherine Cortez Masto"
        },
          {
            name: "Adam Laxalt"
          },
          {
            name: "Jacky Rosen"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Dina Titus"
        },
          {
            name: "April Becker"
          },
          {
            name: "Mark Amodei"
          },
          {
            name: "Elizabeth Krause"
          },
          {
            name: "Susie Lee"
          },
          {
            name: "Sam Peters"
          },
          {
            name: "Steven Horsford"
          },
          {
            name: "Mark Robertson"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [{
          name: "Steve Sisolak"
        },
          {
            name: "Joe Lombardo"
          },
          {
            name: "Lisa Cano Burkhead"
          },
          {
            name: "Stavros Anthony"
          },
          {
            name: "Michele Fiore"
          },
          {
            name: "Sigal Chattah"
          },
          {
            name: "Cisco Aguilar"
          },
          {
            name: "Ellen Spiegel"
          },
          {
            name: "Jim Marchant"
          },
          {
            name: "Zach Conine"
          },
          {
            name: "Andy Matthews"
          },
          {
            name: "Aaron D. Ford"
          }
        ],
      },
    ],
  },
  {
    name: 'New Hampshire',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Jeanne Shaheen"
        },
          {
            name: "Maggie Hassan"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Ann Kuster"
        },
          {
            name: "Chris Pappas"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [{
          name: "Chris Sununu"
        },
          {
            name: "Janet Stevens"
          },
          {
            name: "Dave Wheeler"
          },
          {
            name: "Joseph Kenney"
          },
          {
            name: "Ted Gatsas"
          },
          {
            name: "Cinde Warmington"
          }
        ],
      },
    ],
  },
  {
    name: 'New Jersey',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Robert Menendez"
        },
          {
            name: "Cory A. Booker"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Claire Gustafson"
        },
          {
            name: "Mikie Sherrill"
          },
          {
            name: "Chris Smith"
          },
          {
            name: "Josh Gottheimer"
          },
          {
            name: "Susan Kiley"
          },
          {
            name: "Andy Kim"
          },
          {
            name: "Donald Norcross"
          },
          {
            name: "Bill Pascrell"
          },
          {
            name: "Paul DeGroot"
          },
          {
            name: "Tom Kean"
          },
          {
            name: "Robert Menendez"
          },
          {
            name: "Billy Prempeh"
          },
          {
            name: "Matthew Jenkins"
          },
          {
            name: "Tim Alexander"
          },
          {
            name: "Jeff Van Drew"
          },
          {
            name: "David Pinckney"
          },
          {
            name: "Donald Payne"
          },
          {
            name: "Tom Malinowski"
          },
          {
            name: "Frank Pallone"
          },
          {
            name: "Bonnie Coleman"
          },
          {
            name: "Frank Pallota"
          },
          {
            name: "Marcos Arroyo"
          },
          {
            name: "Bob Healey"
          },
          {
            name: "Darius Mayfield"
          }
        ],
      }
    ],
  },
  {
    name: 'New Mexico',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Ben Ray Lujan"
        },
          {
            name: "Martin Heinrich"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [  {
          name: "Yvette Herrell"
        },
          {
            name: "Michelle Garcia Holmes"
          },
          {
            name: "Teresa Leger Fernandez"
          },
          {
            name: "Alexis Martinez Johnson"
          },
          {
            name: "Gabriel Vasquez"
          },
          {
            name: "Melanie Ann Stansbury"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [   {
          name: "Michelle Lujan Grisham"
        },
          {
            name: "Mark Ronchetti"
          },
          {
            name: "Howie Morales"
          },
          {
            name: "Anthony Thornton"
          },
          {
            name: "Jefferson Byrd"
          },
          {
            name: "Alan Brauer Jr."
          },
          {
            name: "Joseph Maestas"
          },
          {
            name: "Patricia Gipson"
          },
          {
            name: "Stephanie Garcia Richard"
          },
          {
            name: "Timothy Beck"
          },
          {
            name: "Stewart Ingham"
          },
          {
            name: "Harry Montoya"
          },
          {
            name: "Audrey Mendonca-Trujillo"
          },
          {
            name: "Jeremy Gay"
          },
          {
            name: "Sharon E. Clahchischilliage"
          },
          {
            name: "Maggie Toulouse Oliver"
          },
          {
            name: "Laura Montoya"
          },
          {
            name: "Raul Torrez"
          }
        ],
      },
    ],
  },
  {
    name: 'New York',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Chuck Schumer"
        },
          {
            name: "Kirsten E. Gillibrand"
          },
          {
            name: "Joe Pinion"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [  {
          name: "Sean P. Maloney"
        },
          {
            name: "Claudia Tenney"
          },
          {
            name: "Joseph Morelle"
          },
          {
            name: "Andrew Garbarino"
          },
          {
            name: "Hakeem Jeffries"
          },
          {
            name: "Mondaire Jones"
          },
          {
            name: "Adriano Espaillat"
          },
          {
            name: "Nydia Velazquez"
          },
          {
            name: "Grace Meng"
          },
          {
            name: "Nicole Malliotakis"
          },
          {
            name: "Paul Tonko"
          },
          {
            name: "Gregory Meeks"
          },
          {
            name: "Ritchie Torres"
          },
          {
            name: "Jamaal Bowman"
          },
          {
            name: "Alexandria Ocasio-Cortez"
          },
          {
            name: "Carolyn Maloney"
          },
          {
            name: "Yvette Clarke"
          },
          {
            name: "Jerry Nadler"
          },
          {
            name: "Brian Higgins"
          },
          {
            name: "Elise Stefanik"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [  {
          name: "Kathy Hochul"
        },
          {
            name: "Lee Zeldin"
          },
          {
            name: "Alison Esposito"
          },
          {
            name: "Antonio Delgado"
          },
          {
            name: "Letitia James"
          },
          {
            name: "Paul Rodriguez"
          },
          {
            name: "Michael Henry"
          },
          {
            name: "Thomas P. DiNapoli"
          }
        ],
      },
    ],
  },
  {
    name: 'North Carolina',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Ted Budd"
        },
          {
            name: "Richard Burr"
          },
          {
            name: "Thom Tillis"
          },
          {
            name: "Cheri Lynn Beasley"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Chuck Edwards"
        },
          {
            name: "Tyler Lee"
          },
          {
            name: "Courtney Geels"
          },
          {
            name: "Don Davis"
          },
          {
            name: "Kyle Parrish"
          },
          {
            name: "Virginia Foxx"
          },
          {
            name: "Jasmine Beach-Ferrara"
          },
          {
            name: "Barbara Gaskins"
          },
          {
            name: "Alma Adams"
          },
          {
            name: "Bo Hines"
          },
          {
            name: "Richard Hudson"
          },
          {
            name: "Dan Bishop"
          },
          {
            name: "Patrick McHenry"
          },
          {
            name: "Charles Graham"
          },
          {
            name: "Valerie Foushee"
          },
          {
            name: "Ben Clark"
          },
          {
            name: "Sandy Smith"
          },
          {
            name: "Greg Murphy"
          },
          {
            name: "Kathy Manning"
          },
          {
            name: "Scott Huffman"
          },
          {
            name: "Pam Genant"
          },
          {
            name: "Pat Harrigan"
          },
          {
            name: "David Rouzer"
          },
          {
            name: "Christine Villaverde"
          },
          {
            name: "Jeff Jackson"
          },
          {
            name: "Deborah Ross"
          },
          {
            name: "Wiley Nickel"
          },
          {
            name: "Christian Castelli"
          }
        ],
      }
    ],
  },
  {
    name: 'North Dakota',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Kevin Cramer"
        },
          {
            name: "John Hoeven"
          },
          {
            name: "Katrina Christiansen"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Kelly Armstrong"
        },
          {
            name: "Mark Haugen"
          }
        ],
      }
    ],
  },
  {
    name: 'Ohio',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "J.D. Vance"
        },
          {
            name: "Sherrod Brown"
          },
          {
            name: "Rob Portman"
          },
          {
            name: "Tim Ryan"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [  {
          name: "Michael Turner"
        },
          {
            name: "Louis Lyras"
          },
          {
            name: "Lee Stahley"
          },
          {
            name: "Shontel Brown"
          },
          {
            name: "Brad Wenstrup"
          },
          {
            name: "Max Miller"
          },
          {
            name: "Matthew Diemer"
          },
          {
            name: "JR Majewski"
          },
          {
            name: "Madison Gesiotto"
          },
          {
            name: "Tamie Wilson"
          },
          {
            name: "Vanessa Enoch"
          },
          {
            name: "Craig Swartz"
          },
          {
            name: "Greg Landsman"
          },
          {
            name: "Emilia Sykes"
          },
          {
            name: "Eric Brewer"
          },
          {
            name: "Mike Carey"
          },
          {
            name: "Gary Josephson"
          },
          {
            name: "Marcy Kaptur"
          },
          {
            name: "Jim Jordan"
          },
          {
            name: "Matt Kilboy"
          },
          {
            name: "Warren Davidson"
          },
          {
            name: "Troy Balderson"
          },
          {
            name: "David Joyce"
          },
          {
            name: "David Esrati"
          },
          {
            name: "Bob Latta"
          },
          {
            name: "Joyce Beatty"
          },
          {
            name: "Steve Chabot"
          },
          {
            name: "Samantha Meadows"
          },
          {
            name: "Amy Rippel-Elton"
          },
          {
            name: "Bill Johnson"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [{
          name: "Richard Michael DeWine"
        },
          {
            name: "Nan Whaley"
          },
          {
            name: "Cheryl Stephens"
          },
          {
            name: "Jon Husted"
          },
          {
            name: "Chelsea Clark"
          },
          {
            name: "Robert Sprague"
          },
          {
            name: "Keith Faber"
          },
          {
            name: "Frank LaRose"
          },
          {
            name: "Jeff Crossman"
          },
          {
            name: "Scott Schertzer"
          },
          {
            name: "Taylor Sappington"
          },
          {
            name: "Dave Yost"
          }
        ],
      },
    ],
  },
  {
    name: 'Oklahoma',
    children: [
      {
        name: 'U.S. Senate',
        children: [     {
          name: "Kendra Horn"
        },
          {
            name: "James Lankford"
          },
          {
            name: "James M. Inhofe"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Frank Lucas"
        },
          {
            name: "Joshua Harris-Till"
          },
          {
            name: "Jeremiah Ross"
          },
          {
            name: "Kevin Hern"
          },
          {
            name: "Avery Frix"
          },
          {
            name: "Naomi Andrews"
          },
          {
            name: "Stephanie Bice"
          },
          {
            name: "Mary Brannon"
          },
          {
            name: "Adam Martin"
          },
          {
            name: "Tom Cole"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [  {
          name: "Joy Hofmeister"
        },
          {
            name: "Kevin Stitt"
          },
          {
            name: "Melinda Alizadeh-Fard"
          },
          {
            name: "Matt Pinnell"
          },
          {
            name: "Cindy Byrd"
          },
          {
            name: "Warigia Margaret Bowman"
          },
          {
            name: "Glen Mulready"
          },
          {
            name: "Jena Nelson"
          },
          {
            name: "Gentner Drummond"
          },
          {
            name: "Charles de Coune"
          },
          {
            name: "Jack Henderson"
          }
        ],
      },
    ],
  },
  {
    name: 'Oregon',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Jo Rae Perkins"
        },
          {
            name: "Jeff Merkley"
          },
          {
            name: "Ron Wyden"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Mike Erickson"
        },
          {
            name: "Earl Blumenauer"
          },
          {
            name: "Val Hoyle"
          },
          {
            name: "Cliff Bentz"
          },
          {
            name: "Joanna Harbour"
          },
          {
            name: "Suzanne Bonamici"
          },
          {
            name: "Lori Chavez-DeRemer"
          },
          {
            name: "Joe Yetter"
          },
          {
            name: "Andrea Salinas"
          },
          {
            name: "Alek Skarlatos"
          },
          {
            name: "Jamie McLeod-Skinner"
          },
          {
            name: "Christopher Mann"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [  {
          name: "Tina Kotek"
        },
          {
            name: "Christine Drazan"
          }
        ],
      },
    ],
  },
  {
    name: 'Pennsylvania',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Robert P. Casey, Jr."
        },
          {
            name: "Patrick J. Toomey"
          },
          {
            name: "Mehmet Oz"
          },
          {
            name: "John Fetterman"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Amanda Waldman"
        },
          {
            name: "Jim Bognet"
          },
          {
            name: "Mike Doyle"
          },
          {
            name: "Guy Ciarrocchi"
          },
          {
            name: "Dan Pastore"
          },
          {
            name: "Dwight Evans"
          },
          {
            name: "Jeremy Shaffer"
          },
          {
            name: "Susan Wild"
          },
          {
            name: "Lisa Scheller"
          },
          {
            name: "Shamaine Daniels"
          },
          {
            name: "Mary Gay Scanlon"
          },
          {
            name: "Guy Reschenthaler"
          },
          {
            name: "Christian Nascimento"
          },
          {
            name: "Summer Lee"
          },
          {
            name: "Aaron Bashir"
          },
          {
            name: "Lloyd Smucker"
          },
          {
            name: "Brian Fitzpatrick"
          },
          {
            name: "Madeleine Dean"
          },
          {
            name: "Matt Cartwright"
          },
          {
            name: "Ashley Ehasz"
          },
          {
            name: "Glenn Thompson"
          },
          {
            name: "Mike Kelly"
          },
          {
            name: "Dan Meuser"
          },
          {
            name: "Chris Deluzio"
          },
          {
            name: "John Joyce"
          },
          {
            name: "Bob Hollister"
          },
          {
            name: "Scott Perry"
          },
          {
            name: "Chrissy Houlahan"
          },
          {
            name: "David Galluch"
          },
          {
            name: "Brendan Boyle"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [{
          name: "Austin Davis"
        },
          {
            name: "Carrie DelRosso"
          },
          {
            name: "Doug Mastriano"
          },
          {
            name: "Josh Shapiro"
          }
        ],
      },
    ],
  },
  {
    name: 'Rhode Island',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Sheldon Whitehouse"
        },
          {
            name: "Jack Reed"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [  {
          name: "David Cicilline"
        }
        ],
      }
    ],
  },
  {
    name: 'South Carolina',
    children: [
      {
        name: 'U.S. Senate',
        children: [  {
          name: "Lindsey Graham"
        },
          {
            name: "Tim Scott"
          },
          {
            name: "Krystle Matthews"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "James Clyburn"
        },
          {
            name: "Jeff Duncan"
          },
          {
            name: "Nancy Mace"
          },
          {
            name: "Daryl Scott"
          },
          {
            name: "William Timmons"
          },
          {
            name: "Evangeline Hundley"
          },
          {
            name: "Joe Wilson"
          },
          {
            name: "Ken Hill"
          },
          {
            name: "Russell Fry"
          },
          {
            name: "Duke Buckner"
          },
          {
            name: "Annie Andrews"
          },
          {
            name: "Juddson Larkins"
          },
          {
            name: "Ralph Norman"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [{
          name: "Henry McMaster"
        },
          {
            name: "Joe Cunningham"
          },
          {
            name: "Ellen Weaver"
          },
          {
            name: "Alan Wilson"
          },
          {
            name: "Curtis Loftis"
          },
          {
            name: "Rosemounda Peggy Butler"
          },
          {
            name: "Lisa Ellis"
          },
          {
            name: "Hugh Weathers"
          },
          {
            name: "Richard Eckstrom"
          },
          {
            name: "Mark Hammond"
          }
        ],
      },
    ],
  },
  {
    name: 'South Dakota',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Brian Bengs"
        },
          {
            name: "John Thune"
          },
          {
            name: "Mike Rounds"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [  {
          name: "Dusty Johnson"
        }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [{
          name: "Jamie Smith"
        },
          {
            name: "Kristi L. Noem"
          },
          {
            name: "Richard Sattgast"
          },
          {
            name: "Larry Rhoden"
          },
          {
            name: "Marty J. Jackley"
          },
          {
            name: "Monae Johnson"
          },
          {
            name: "Chris Nelson"
          },
          {
            name: "Josh Haeder"
          },
          {
            name: "Brock Greenfield"
          }
        ],
      },
    ],
  },
  {
    name: 'Tennessee',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Bill Hagerty"
        },
          {
            name: "Marsha Blackburn"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Mark Harmon"
        },
          {
            name: "Mark Green"
          },
          {
            name: "Scott DesJarlais"
          },
          {
            name: "Wayne Steele"
          },
          {
            name: "Diana Harshbarger"
          },
          {
            name: "Charlotte Bergmann"
          },
          {
            name: "John Rose"
          },
          {
            name: "Lynnette Williams"
          },
          {
            name: "Andy Ogles"
          },
          {
            name: "David Kustoff"
          },
          {
            name: "Meg Gorman"
          },
          {
            name: "Tim Burchett"
          },
          {
            name: "Cameron Parsons"
          },
          {
            name: "Heidi Campbell"
          },
          {
            name: "Randal Cooper"
          },
          {
            name: "Chuck Fleischmann"
          },
          {
            name: "Odessa Kelly"
          },
          {
            name: "Steve Cohen"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [{
          name: "Bill Lee"
        },
          {
            name: "Jason Martin"
          }
        ],
      },
    ],
  },
  {
    name: 'Texas',
    children: [
      {
        name: 'U.S. Senate',
        children: [  {
          name: "Ted Cruz"
        },
          {
            name: "John Cornyn"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Sheila Jackson Lee"
        },
          {
            name: "Roger Williams"
          },
          {
            name: "Pat Fallon"
          },
          {
            name: "Carmen Montiel"
          },
          {
            name: "Veronica Escobar"
          },
          {
            name: "August Pfluger"
          },
          {
            name: "Troy Nehls"
          },
          {
            name: "Lance Gooden"
          },
          {
            name: "Beth Van Duyne"
          },
          {
            name: "Henry Cuellar"
          },
          {
            name: "Kathleen Brown"
          },
          {
            name: "Cassy Garcia"
          },
          {
            name: "Kyle Sinclair"
          },
          {
            name: "Jake Ellzey"
          },
          {
            name: "Maclovio Perez"
          },
          {
            name: "Joaquin Castro"
          },
          {
            name: "Greg Casar"
          },
          {
            name: "Robin Fulford"
          },
          {
            name: "John Lira"
          },
          {
            name: "Randy Weber"
          },
          {
            name: "Lloyd Doggett"
          },
          {
            name: "Monica de la Cruz"
          },
          {
            name: "Colin Allred"
          },
          {
            name: "Jasmine Crockett"
          },
          {
            name: "Michael Burgess"
          },
          {
            name: "Antonio Swad"
          },
          {
            name: "Trey Hunt"
          },
          {
            name: "Michelle Vallejo"
          },
          {
            name: "Iro Omere"
          },
          {
            name: "John Carter"
          },
          {
            name: "Dan McQueen"
          },
          {
            name: "Jenny Sharon"
          },
          {
            name: "Morgan Luttrell"
          },
          {
            name: "Kay Granger"
          },
          {
            name: "Marc Veasey"
          },
          {
            name: "Sylvia Garcia"
          },
          {
            name: "Ronny Jackson"
          },
          {
            name: "Patrick Gillespie"
          },
          {
            name: "Mayra Flores"
          },
          {
            name: "Brian Babin"
          },
          {
            name: "Duncan Klussmann"
          },
          {
            name: "Al Green"
          },
          {
            name: "Mikal Williams"
          },
          {
            name: "Jamie Jordan"
          },
          {
            name: "Keith Self"
          },
          {
            name: "Jimmy Leon"
          },
          {
            name: "Nathaniel Moran"
          },
          {
            name: "James Rodgers"
          },
          {
            name: "Jrmar Jefferson"
          },
          {
            name: "Chip Roy"
          },
          {
            name: "Jodey Arrington"
          },
          {
            name: "Tony Gonzales"
          },
          {
            name: "Wesley Hunt"
          },
          {
            name: "Laura Jones"
          },
          {
            name: "Michael Cloud"
          },
          {
            name: "Linda Nuno"
          },
          {
            name: "Irene Armendariz-Jackson"
          },
          {
            name: "Jon Haire"
          },
          {
            name: "Robert Schafranek"
          },
          {
            name: "Claudia Zapata"
          },
          {
            name: "Johnny Teague"
          },
          {
            name: "Pete Sessions"
          },
          {
            name: "Tartisha Hill"
          },
          {
            name: "Vicente Gonzalez"
          },
          {
            name: "Jan McDowell"
          },
          {
            name: "Lizzie Fletcher"
          },
          {
            name: "Mary Jo Woods"
          },
          {
            name: "Michael McCaul"
          },
          {
            name: "Sandeep Srivastava"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [{
          name: "Greg Abbott"
        },
          {
            name: "Beto O'Rourke"
          },
          {
            name: "Dan Patrick"
          },
          {
            name: "Mike Collier"
          },
          {
            name: "Julie Pickren"
          },
          {
            name: "Daniel Hochman"
          },
          {
            name: "Will Hickman"
          },
          {
            name: "Patricia Hardy"
          },
          {
            name: "Evelyn Brooks"
          },
          {
            name: "Keven Ellis"
          },
          {
            name: "Victor Perez"
          },
          {
            name: "Rebecca Bell-Metereau"
          },
          {
            name: "Dawn Buckingham"
          },
          {
            name: "Alex Cornwallis"
          },
          {
            name: "Wayne Christian"
          },
          {
            name: "Ken Paxton"
          },
          {
            name: "Glenn Hegar"
          },
          {
            name: "Mark Loewe"
          },
          {
            name: "Kathryn Monette"
          },
          {
            name: "Susan Hays"
          },
          {
            name: "Tom Maynard"
          },
          {
            name: "Sid Miller"
          },
          {
            name: "Melissa Ortega"
          },
          {
            name: "Tracy Fisher"
          },
          {
            name: "Aicha Davis"
          },
          {
            name: "LJ Francis"
          },
          {
            name: "Rochelle Garza"
          },
          {
            name: "Audrey Young"
          },
          {
            name: "Jay Kleberg"
          },
          {
            name: "Marisa Perez-Diaz"
          },
          {
            name: "Aaron Kinsey"
          },
          {
            name: "Janet Dudding"
          },
          {
            name: "Michelle Palmer"
          },
          {
            name: "Pam Little"
          },
          {
            name: "Luis Sifuentes"
          },
          {
            name: "Staci Childs"
          },
          {
            name: "Luke Warford"
          },
          {
            name: "Ken Morrow"
          },
          {
            name: "Michael Stevens"
          }
        ],
      },
    ],
  },
  {
    name: 'Utah',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Mike Lee"
        },
          {
            name: "Mitt Romney"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Rick Jones"
        },
          {
            name: "Blake Moore"
          },
          {
            name: "John Curtis"
          },
          {
            name: "Nick Mitchell"
          },
          {
            name: "Burgess Owens"
          },
          {
            name: "Chris Stewart"
          },
          {
            name: "Glenn Wright"
          },
          {
            name: "Darlene McDonald"
          }
        ],
      }
    ],
  },
  {
    name: 'Vermont',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Gerald Malloy"
        },
          {
            name: "Peter Welch"
          },
          {
            name: "Bernard Sanders"
          },
          {
            name: "Patrick J. Leahy"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [  {
          name: "Becca Balint"
        },
          {
            name: "Liam Madden"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [{
          name: "Phil Scott"
        },
          {
            name: "Brenda Siegel"
          },
          {
            name: "Doug Hoffer"
          }
        ],
      },
    ],
  },
  {
    name: 'Virgina',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Mark R. Warner"
        },
          {
            name: "Tim Kaine"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Morgan Griffith"
        },
          {
            name: "Herb Jones"
          },
          {
            name: "Karina Lipsman"
          },
          {
            name: "Jim Myles"
          },
          {
            name: "Leon Benjamin"
          },
          {
            name: "Yesli Vega"
          },
          {
            name: "Bob Good"
          },
          {
            name: "Gerry Connolly"
          },
          {
            name: "Rob Wittman"
          },
          {
            name: "Bobby Scott"
          },
          {
            name: "Elaine Luria"
          },
          {
            name: "Josh Throneburg"
          },
          {
            name: "Taysha DeVaughan"
          },
          {
            name: "Don Beyer"
          },
          {
            name: "Don McEachin"
          },
          {
            name: "Hung Cao"
          },
          {
            name: "Abigail Spanberger"
          },
          {
            name: "Ben Cline"
          },
          {
            name: "Jennifer Lewis"
          },
          {
            name: "Jen Kiggans"
          },
          {
            name: "Terry Namkung"
          },
          {
            name: "Jennifer Wexton"
          }
        ],
      }
    ],
  },
  {
    name: 'Washington',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Patty Murray"
        },
          {
            name: "Maria Cantwell"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Matt Larkin"
        },
          {
            name: "Natasha Hill"
          },
          {
            name: "Pramila Jayapal"
          },
          {
            name: "Jason Call"
          },
          {
            name: "Keith Swank"
          },
          {
            name: "Adam Smith"
          },
          {
            name: "Doug White"
          },
          {
            name: "Suzan DelBene"
          },
          {
            name: "Elizabeth Kreiselmaier"
          },
          {
            name: "Paul Glumaz"
          },
          {
            name: "Kim Schrier"
          },
          {
            name: "Rick Larsen"
          },
          {
            name: "Jaime Herrera Beutler"
          },
          {
            name: "Marilyn Strickland"
          },
          {
            name: "Vincent Cavaleri"
          },
          {
            name: "Derek Kilmer"
          },
          {
            name: "Cathy McMorris Rodgers"
          },
          {
            name: "Dan Newhouse"
          }
        ],
      }
    ],
  },
  {
    name: 'West Virginia',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Shelley Moore Capito"
        },
          {
            name: "Joe Manchin III"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Carol Miller"
        },
          {
            name: "Alex Mooney"
          },
          {
            name: "Lacy Watson"
          },
          {
            name: "Barry Wendell"
          }
        ],
      }
    ],
  },
  {
    name: 'Wisconsin',
    children: [
      {
        name: 'U.S. Senate',
        children: [  {
          name: "Tammy Baldwin"
        },
          {
            name: "Mandela Barnes"
          },
          {
            name: "Ron Johnson"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [{
          name: "Scott Fitzgerald"
        },
          {
            name: "Tom Tiffany"
          },
          {
            name: "Tim Rogers"
          },
          {
            name: "Bryan Steil"
          },
          {
            name: "Richard Ausman"
          },
          {
            name: "Mike Van Someren"
          },
          {
            name: "Mike Gallagher"
          },
          {
            name: "Ann Roe"
          },
          {
            name: "Derrick Van Orden"
          },
          {
            name: "Mark Pocan"
          },
          {
            name: "Gwen Moore"
          },
          {
            name: "Glenn Grothman"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [  {
          name: "Tony Evers"
        },
          {
            name: "Tim Michels"
          },
          {
            name: "Sara Rodriguez"
          },
          {
            name: "Roger Roth"
          },
          {
            name: "Douglas J. La Follette"
          },
          {
            name: "Josh Kaul"
          }
        ],
      },
    ],
  },
  {
    name: 'Wyoming',
    children: [
      {
        name: 'U.S. Senate',
        children: [   {
          name: "Cynthia M. Lummis"
        },
          {
            name: "John Barrasso"
          }
        ],
      },
      {
        name: 'U.S. House',
        children: [  {
          name: "Liz Cheney"
        }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [  {
          name: "Mark Gordon"
        },
          {
            name: "Brian Schroeder"
          },
          {
            name: "Curt Meier"
          },
          {
            name: "Kristi Racines"
          }
        ],
      },
    ],
  },
  {
    name: 'Alaska',
    children: [
      {
        name: 'U.S. Senate',
        children: [{
          name: "Lisa Murkowski"
        },
          {
            name: "Dan Sullivan"
          }
        ],
      },
      {
        name: 'State Executive Offices',
        children: [{
          name: "Mike Dunleavy"
        }
        ],
      },
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
