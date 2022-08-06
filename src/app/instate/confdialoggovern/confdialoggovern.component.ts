import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogDatagovern} from "../instategovernordisplaynav/instategovernordisplaynav.component";

@Component({
  selector: 'app-confdialoggovern',
  templateUrl: './confdialoggovern.component.html',
  styleUrls: ['./confdialoggovern.component.css']
})
export class ConfdialoggovernComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogDatagovern) { }

  ngOnInit(): void {
  }

}
