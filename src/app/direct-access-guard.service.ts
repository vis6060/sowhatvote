import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import {Cache} from "aws-amplify";

@Injectable({
  providedIn: 'root'
})
export class DirectAccessGuardService implements CanActivate {
  constructor(private router: Router,private readonly location: Location) {}

  ngOnInit(): void {
  }

  //activate routes based on conditional logic
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // If the previous URL was blank, then the user is directly accessing this page
    //   if (this.location.path() === '/Meetup/Step2') {
    //     this.router.navigate(['/Meetup/Step0']); // Navigate away to some other page
    //     return false;
    //   }

  //  if ( this.location.path() === '/Meetup/Step3' && Cache.getItem('profileDstatus')=="yes") {
  //    this.router.navigate(['/Meetup/Step3']); // Navigate away to some other page
 //     return false;
 //   }


  //    if (this.location.path() === '/Meetup/Step0edit' ||this.location.path() === '/Meetup/Step3' || this.location.path() === '/Meetup/Step4' || this.location.path() === '/Meetup/Step5'
   //     || this.location.path() === '/Community1' || this.location.path() === '/Community2') {
   //     this.router.navigate(['/2022MidtermElections/USSenate']); // Navigate away to some other page
 //       return false;
 //     }

    return true;
  }



}
