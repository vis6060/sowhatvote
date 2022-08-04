import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import Amplify, {Auth, Storage} from "aws-amplify";
import awsExports from "src/aws-exports";
import {API} from 'aws-amplify';
import { DatePipe } from '@angular/common';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import { ActivatedRoute } from '@angular/router';
import {APIService, DatinguserdbStaging} from "../API.service";


@Component({
  selector: 'app-loginbox',
  templateUrl: './loginbox.component.html',
  styleUrls: ['./loginbox.component.css']
})
export class LoginboxComponent implements OnInit {

  user: CognitoUserInterface | undefined;
  authState: AuthState;
  // filename="image2.png"
//  public key='';
  public dealsPer1: Array<DatinguserdbStaging>;  public dealsPer3: Array<DatinguserdbStaging>; public dealsPer5: Array<DatinguserdbStaging>;

  constructor(public authenticator: AuthenticatorService, private route: ActivatedRoute,private api: APIService) {
    Amplify.configure(awsExports);
  }

  ngOnInit(): void {
  }

}
