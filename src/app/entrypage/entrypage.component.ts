import { Component, OnInit } from '@angular/core';
import {TermsdialogboxComponent} from "../termsdialogbox/termsdialogbox.component";
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-entrypage',
  templateUrl: './entrypage.component.html',
  styleUrls: ['./entrypage.component.css']
})
export class EntrypageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openTerms() {
    const dialogRef = this.dialog.open(TermsdialogboxComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
