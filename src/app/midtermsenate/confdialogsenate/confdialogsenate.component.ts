import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {DialogDatasenate} from "../instatesenatedisplaynav/instatesenatedisplaynav.component";

@Component({
  selector: 'app-confdialogsenate',
  templateUrl: './confdialogsenate.component.html',
  styleUrls: ['./confdialogsenate.component.css']
})
export class ConfdialogsenateComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogDatasenate,
              private dialogRef: MatDialogRef<ConfdialogsenateComponent>,
  ) { }

  ngOnInit(): void {
  }

  locationreload() {  location.reload();}

  Cancel() {
    // closing itself and sending data to parent component
    this.dialogRef.close({ data: 'Cancel' })
  }

  Submit() {
    // closing itself and sending data to parent component
    this.dialogRef.close({ data: 'Submit' })
  }

}
