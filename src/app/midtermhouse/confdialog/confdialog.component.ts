import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import {DialogData} from "../instatehousedisplaynav/instatehousedisplaynav.component";

@Component({
  selector: 'app-confdialog',
  templateUrl: './confdialog.component.html',
  styleUrls: ['./confdialog.component.css']
})
export class ConfdialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,
              private dialogRef: MatDialogRef<ConfdialogComponent>,
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
